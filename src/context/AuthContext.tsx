import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { useApp } from './AppContext';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
  isVerified: boolean;
  progress: UserProgress;
  createdAt: string;
}

interface AuthContextType {
  currentUser: UserAccount | null;
  loading: boolean;
  register: (name: string, email: string, password: string, phone?: string) => Promise<{ success: boolean; error?: string; user?: UserAccount }>;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string; user?: UserAccount }>;
  logout: () => void;
  verifyEmail: (code: string) => Promise<{ success: boolean; error?: string }>;
  resendVerification: () => void;
  sendPasswordReset: (email: string) => Promise<{ success: boolean; error?: string }>;
  resetPasswordWithToken: (token: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  loginWithGoogle: () => Promise<{ success: boolean; user?: UserAccount }>;
  loginWithFacebook: () => Promise<{ success: boolean; user?: UserAccount }>;
  updateUserProgress: (progress: UserProgress) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<UserAccount | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { progress, updateProfile, addXP, resetAllProgress } = useApp();

  // Helper to load accounts
  const getAccounts = (): UserAccount[] => {
    const data = localStorage.getItem('sabaicode-users');
    return data ? JSON.parse(data) : [];
  };

  // Helper to save accounts
  const saveAccounts = (accounts: UserAccount[]) => {
    localStorage.setItem('sabaicode-users', JSON.stringify(accounts));
  };

  // Load active session on init
  useEffect(() => {
    const activeSessionEmail = localStorage.getItem('sabaicode-active-user');
    if (activeSessionEmail) {
      const accounts = getAccounts();
      const user = accounts.find(a => a.email.toLowerCase() === activeSessionEmail.toLowerCase());
      if (user) {
        setCurrentUser(user);
        // Load user's saved progress to the AppState
        syncProgressToAppState(user.progress);
      }
    }
    setLoading(false);
  }, []);

  // Whenever progress updates in AppContext, sync it to current user if logged in
  useEffect(() => {
    if (currentUser) {
      const accounts = getAccounts();
      const updatedAccounts = accounts.map(acc => {
        if (acc.email.toLowerCase() === currentUser.email.toLowerCase()) {
          const updatedUser = { ...acc, progress };
          return updatedUser;
        }
        return acc;
      });
      saveAccounts(updatedAccounts);
      
      // Update currentUser reference
      const updatedUser = updatedAccounts.find(a => a.email.toLowerCase() === currentUser.email.toLowerCase());
      if (updatedUser && JSON.stringify(updatedUser.progress) !== JSON.stringify(currentUser.progress)) {
        setCurrentUser(updatedUser);
      }
    }
  }, [progress, currentUser?.email]);

  const syncProgressToAppState = (userProg: UserProgress) => {
    // Write progress directly to local storage as sabaicode-progress, then refresh local AppState if needed
    localStorage.setItem('sabaicode-progress', JSON.stringify(userProg));
    // Trigger update profile to refresh AppContext references
    if (userProg.profileName && userProg.profileAvatar) {
      updateProfile(userProg.profileName, userProg.profileAvatar);
    }
  };

  const register = async (name: string, email: string, password: string, phone?: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // Network delay simulation

    const accounts = getAccounts();
    const exists = accounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
    
    if (exists) {
      setLoading(false);
      return { success: false, error: "This email is already registered — try logging in instead." };
    }

    // Default starting progress for newly registered user, inheriting what they have done so far!
    const startingProgress: UserProgress = {
      ...progress, // Inherit current guest progress so they don't lose anything!
      profileName: name,
      profileAvatar: "🦊",
    };

    const newUser: UserAccount = {
      id: `user_${Date.now()}`,
      name,
      email,
      phone,
      passwordHash: btoa(password), // simple client-side encryption simulation
      isVerified: false,
      progress: startingProgress,
      createdAt: new Date().toISOString(),
    };

    const newAccounts = [...accounts, newUser];
    saveAccounts(newAccounts);

    // Save active session
    localStorage.setItem('sabaicode-active-user', email);
    setCurrentUser(newUser);
    syncProgressToAppState(startingProgress);

    setLoading(false);
    return { success: true, user: newUser };
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800)); // Network delay simulation

    const accounts = getAccounts();
    const user = accounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());

    if (!user || user.passwordHash !== btoa(password)) {
      setLoading(false);
      return { success: false, error: "Invalid email or password. Please try again." };
    }

    // Save active session
    localStorage.setItem('sabaicode-active-user', email);
    setCurrentUser(user);
    syncProgressToAppState(user.progress);

    setLoading(false);
    return { success: true, user };
  };

  const logout = () => {
    localStorage.removeItem('sabaicode-active-user');
    setCurrentUser(null);
    // Reset back to a fresh guest progress or keep previous
    resetAllProgress();
  };

  const verifyEmail = async (code: string) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    if (code === "1234" || code === "8888") { // Simulated verification codes
      if (currentUser) {
        const updatedUser = { ...currentUser, isVerified: true };
        setCurrentUser(updatedUser);

        const accounts = getAccounts();
        const updatedAccounts = accounts.map(acc => {
          if (acc.email.toLowerCase() === currentUser.email.toLowerCase()) {
            return updatedUser;
          }
          return acc;
        });
        saveAccounts(updatedAccounts);
        
        // Reward student with 100 XP bonus for completing email registration!
        addXP(100);

        return { success: true };
      }
      return { success: false, error: "Internal Auth Error: No active session." };
    }
    return { success: false, error: "Incorrect 4-digit verification code. Use code '1234' for this demo." };
  };

  const resendVerification = () => {
    // Simply alerts or triggers simulation toast in UI
  };

  const sendPasswordReset = async (email: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const accounts = getAccounts();
    const exists = accounts.some(acc => acc.email.toLowerCase() === email.toLowerCase());
    if (!exists) {
      return { success: false, error: "We couldn't find an account with that email address." };
    }
    return { success: true };
  };

  const resetPasswordWithToken = async (email: string, newPassword: string) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    const accounts = getAccounts();
    const updatedAccounts = accounts.map(acc => {
      if (acc.email.toLowerCase() === email.toLowerCase()) {
        return { ...acc, passwordHash: btoa(newPassword) };
      }
      return acc;
    });
    saveAccounts(updatedAccounts);
    return { success: true };
  };

  const loginWithGoogle = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // simulate popup delay
    
    // Choose/Generate a Google user profile
    const email = "mony.rachana@gmail.com";
    const name = "Mony Rachana";
    
    const accounts = getAccounts();
    let user = accounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      const startingProgress: UserProgress = {
        ...progress,
        profileName: name,
        profileAvatar: "🦊",
      };

      user = {
        id: `google_${Date.now()}`,
        name,
        email,
        passwordHash: btoa("google-oauth-pwd"),
        isVerified: true, // Google oauth is pre-verified
        progress: startingProgress,
        createdAt: new Date().toISOString(),
      };
      accounts.push(user);
      saveAccounts(accounts);
    }

    localStorage.setItem('sabaicode-active-user', email);
    setCurrentUser(user);
    syncProgressToAppState(user.progress);
    setLoading(false);

    return { success: true, user };
  };

  const loginWithFacebook = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const email = "sokha.chan@gmail.com";
    const name = "Sokha Chan";
    
    const accounts = getAccounts();
    let user = accounts.find(acc => acc.email.toLowerCase() === email.toLowerCase());

    if (!user) {
      const startingProgress: UserProgress = {
        ...progress,
        profileName: name,
        profileAvatar: "🐯",
      };

      user = {
        id: `facebook_${Date.now()}`,
        name,
        email,
        passwordHash: btoa("fb-oauth-pwd"),
        isVerified: true,
        progress: startingProgress,
        createdAt: new Date().toISOString(),
      };
      accounts.push(user);
      saveAccounts(accounts);
    }

    localStorage.setItem('sabaicode-active-user', email);
    setCurrentUser(user);
    syncProgressToAppState(user.progress);
    setLoading(false);

    return { success: true, user };
  };

  const updateUserProgress = (newProgress: UserProgress) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, progress: newProgress };
      setCurrentUser(updatedUser);

      const accounts = getAccounts();
      const updatedAccounts = accounts.map(acc => {
        if (acc.email.toLowerCase() === currentUser.email.toLowerCase()) {
          return updatedUser;
        }
        return acc;
      });
      saveAccounts(updatedAccounts);
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      loading,
      register,
      login,
      logout,
      verifyEmail,
      resendVerification,
      sendPasswordReset,
      resetPasswordWithToken,
      loginWithGoogle,
      loginWithFacebook,
      updateUserProgress,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

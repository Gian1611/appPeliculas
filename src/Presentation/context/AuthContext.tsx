import React, {createContext, useState, useContext, ReactNode} from 'react';

interface AuthContextProps {
  userId: string | null;
  setUserId: (userId: string | null) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [userId, setUserId] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{userId, setUserId}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

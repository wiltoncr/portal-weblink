import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { string } from 'yup';

import authService from '../services/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (data: LoginData) => Promise<void>;
  logout: () => void;
}

interface LoginData {
  email: string;
  password: string;
  remember: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    // Verificar se o usuário está autenticado ao montar o contexto
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    const { token } = user;
    if (token) {
      authService
        .verifyToken(token)
        .then(() => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error('Erro ao verificar token:', error);
          setIsAuthenticated(false);
        });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const login = async (data: LoginData) => {
    try {
      const res = await authService.authenticate(data);
      authService.setLoggedUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error; // Tratar erro no componente que chama login()
    }
  };

  const logout = () => {
    authService.logout(); // Implementar função de logout no serviço de autenticação
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

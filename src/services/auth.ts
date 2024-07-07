// Importanto biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do url para os endpoints
const apiUrl = import.meta.env.VITE_API_BACKENDAPP;

interface LoginData {
  email: string;
  password: string;
}

// Definindo o bjeto do serviço
const authService = {
  // Definindo a função de login
  async authenticate(data: LoginData) {
    const endpoint = `${apiUrl}/login`;
    return axios.post(endpoint, data);
  },

  // Função para salar o usuário logado no local storage
  setLoggedUser(data: LoginData) {
    const parsedData = JSON.stringify(data);
    localStorage.setItem('user', parsedData);
  },

  // Função responsável por recuperar o usuário logado do local storage
  getLoggedUser() {
    const data = localStorage.getItem('user');
    if (!data) return null;
    try {
      const parsedData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default authService;

// Importando biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do URL para os endpoints
const apiUrl = import.meta.env.VITE_API_BACKENDAPP;

interface UserData {
  id: number;
  name: string;
  email: string;
  // Adicione outros campos conforme necessário
}

// Definindo o objeto do serviço
const userService = {
  // Função para buscar informações do usuário
  async getUserData(token: string): Promise<UserData | null> {
    try {
      const endpoint = `${apiUrl}/user`; // Endpoint para buscar informações do usuário
      const response = await axios.get<UserData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data; // Retorna os dados do usuário obtidos do backend
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
      return null; // Retorna null em caso de erro
    }
  },

  // Função para salvar os dados do usuário no localStorage
  setUserData(userData: UserData | null) {
    if (!userData) {
      throw new Error('Token inválido');
    }
    const parsedData = JSON.stringify(userData);
    localStorage.setItem('userData', parsedData);
  },

  // Função para recuperar os dados do usuário do localStorage
  getUserDataFromLocalStorage(): UserData | null {
    const data = localStorage.getItem('userData');
    if (!data) return null;
    try {
      const parsedData: UserData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default userService;

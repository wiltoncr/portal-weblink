// Importando biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do URL para os endpoints
const apiUrl = import.meta.env.VITE_API_BACKENDAPP;

interface AccessData {
  access: AccessItem[];
}

interface AccessItem {
  id: number;
  type: number;
  server: boolean;
  access: string;
  desc: string;
  client: ClientInfo;
}

interface ClientInfo {
  id: number;
  name: string;
  cnpj: string;
  email: string;
}

// Definindo o objeto do serviço
const accesService = {
  async postAccess(accessdata: AccessData, token: string): Promise<AccessData> {
    try {
      const endpoint = `${apiUrl}/access/`;
      const { type, server, access, desc } = accessdata.access[0];
      const idClient = accessdata.access[0].client.id;

      const response = await axios.post<AccessData>(
        endpoint,
        { type, server, access, desc, idClient },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return { access: [{ id: '0' }] }; // Retorna null em caso de erro
    }
  },

  async putAccess(accessdata: AccessData, token: string): Promise<AccessData> {
    try {
      const endpoint = `${apiUrl}/access/`;
      const { id, type, server, access, desc } = accessdata.access[0];
      const idClient = accessdata.access[0].client.id;

      const response = await axios.put<AccessData>(
        endpoint,
        { id, type, server, access, desc, idClient },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return { access: [{ id: '0' }] }; // Retorna null em caso de erro
    }
  },

  async getByIdAccess(id: string, token: string): Promise<AccessData> {
    try {
      const endpoint = `${apiUrl}/access/${id}`;
      const response = await axios.get<AccessData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return { access: [{ id: '0' }] }; // Retorna null em caso de erro
    }
  },
  // Função para buscar informações do usuário
  async getAllAccess(token: string): Promise<AccessData | null> {
    try {
      const endpoint = `${apiUrl}/access`;
      const response = await axios.get<AccessData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return null; // Retorna null em caso de erro
    }
  },

  // Função para salvar os dados do usuário no localStorage
  setUserData(userData: AccessData | null) {
    if (!userData) {
      throw new Error('Token inválido');
    }
    const parsedData = JSON.stringify(userData);
    localStorage.setItem('userData', parsedData);
  },

  // Função para recuperar os dados do usuário do localStorage
  getUserDataFromLocalStorage(): AccessData | null {
    const data = localStorage.getItem('userData');
    if (!data) return null;
    try {
      const parsedData: AccessData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default accesService;

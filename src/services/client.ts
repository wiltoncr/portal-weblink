// Importando biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do URL para os endpoints
const apiUrl = import.meta.env.VITE_API_BACKENDAPP;

interface ClientData {
  clients: ClientItem[];
}

interface ClientItem {
  id: number;
  name: string;
  cnpj: string;
  email: string;
  company: CompanyInfo;
}
interface CompanyInfo {
  id: number;
  name: string;
  cnpj: string;
  email: string;
}

// Definindo o objeto do serviço
const clientService = {
  async postAccess(clientdata: ClientData, token: string): Promise<ClientData> {
    try {
      const endpoint = `${apiUrl}/client/`;
      const { name, cnpj, email, company } = clientdata.clients[0];

      const response = await axios.post<ClientData>(
        endpoint,
        { name, cnpj, email, companyId: company.id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return { clients: [] }; // Retorna null em caso de erro
    }
  },
  async delAccess(id: number, token: string): Promise<ClientData> {
    try {
      const endpoint = `${apiUrl}/client/${id}`;

      const response = await axios.delete<ClientData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de acessos:', error);
      return { clients: [] };
    }
  },
  async putClient(clientdata: ClientData, token: string): Promise<ClientData> {
    try {
      const endpoint = `${apiUrl}/client/`;
      const { id, name, cnpj, email } = clientdata.clients[0];

      const response = await axios.put<ClientData>(
        endpoint,
        { id, name, cnpj, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de clientes:', error);
      return { clients: [] };
    }
  },
  async getByIdClient(id: string, token: string): Promise<ClientData | null> {
    try {
      const endpoint = `${apiUrl}/client/${id}`;
      const response = await axios.get<ClientData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de cliente:', error);
      return null; // Retorna null em caso de erro
    }
  },
  // Função para buscar informações do usuário
  async getAllClient(token: string): Promise<ClientData | null> {
    try {
      const endpoint = `${apiUrl}/client`;
      const response = await axios.get<ClientData>(endpoint, {
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

  async getClientsByCompany(token: string, companyId: number): Promise<ClientData | null> {
    try {
      const endpoint = `${apiUrl}/client/getByCompany`;
      const response = await axios.post<ClientData>(
        endpoint,
        { companyId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar clientes por empresa:', error);
      return null;
    }
  },

  // Função para salvar os dados do usuário no localStorage
  setClientData(ClientData: ClientData | null) {
    if (!ClientData) {
      throw new Error('Token inválido');
    }
    const parsedData = JSON.stringify(ClientData);
    localStorage.setItem('clientData', parsedData);
  },

  // Função para recuperar os dados do usuário do localStorage
  getClientDataFromLocalStorage(): ClientData | null {
    const data = localStorage.getItem('clientData');
    if (!data) return null;
    try {
      const parsedData: ClientData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default clientService;

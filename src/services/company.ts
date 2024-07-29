// Importando biblioteca responsável por requisições HTTP
import axios from 'axios';

// Definindo a base do URL para os endpoints
const apiUrl = import.meta.env.VITE_API_BACKENDAPP;

interface CompanyData {
  companys: CompanyItem[];
}

interface CompanyItem {
  id: number;
  name: string;
  cnpj: string;
  email: string;
}

const companyService = {
  async postCompany(companydata: CompanyData, token: string): Promise<CompanyData> {
    try {
      const endpoint = `${apiUrl}/company/`;
      const { name, cnpj, email } = companydata.companys[0];

      const response = await axios.post<CompanyData>(
        endpoint,
        { name, cnpj, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de company:', error);
      return { companys: [] }; // Retorna null em caso de erro
    }
  },
  async delCompany(id: number, token: string): Promise<CompanyData> {
    try {
      const endpoint = `${apiUrl}/company/${id}`;

      const response = await axios.delete<CompanyData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de company:', error);
      return { companys: [] };
    }
  },
  async putCompany(companydata: CompanyData, token: string): Promise<CompanyData> {
    try {
      const endpoint = `${apiUrl}/company/`;
      const { id, name, cnpj, email } = companydata.companys[0];

      const response = await axios.put<CompanyData>(
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
      return { companys: [] };
    }
  },
  async getByIdCompany(id: string, token: string): Promise<CompanyData> {
    try {
      const endpoint = `${apiUrl}/company/${id}`;
      const response = await axios.get<CompanyData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de company:', error);
      return { companys: [] };
    }
  },
  // Função para buscar informações do usuário
  async getAllCompany(token: string): Promise<CompanyData> {
    try {
      const endpoint = `${apiUrl}/company`;
      const response = await axios.get<CompanyData>(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error('Erro ao buscar informações de company:', error);
      return { companys: [] };
    }
  },

  // Função para salvar os dados do usuário no localStorage
  setCompanyData(CompanyData: CompanyData) {
    if (!CompanyData) {
      throw new Error('Token inválido');
    }
    const parsedData = JSON.stringify(CompanyData);
    localStorage.setItem('companyData', parsedData);
  },

  // Função para recuperar os dados do usuário do localStorage
  getCompanyDataFromLocalStorage(): CompanyData {
    const data = localStorage.getItem('companyData');
    if (!data) return { companys: [] };
    try {
      const parsedData: CompanyData = JSON.parse(data);
      return parsedData;
    } catch (error) {
      console.log(error);
      return { companys: [] };
    }
  },
};

export default companyService;

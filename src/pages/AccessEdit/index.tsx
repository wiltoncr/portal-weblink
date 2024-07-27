import './AccessEdit.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';
import accesService from '../../services/access';
import clientService from '../../services/client';

const AccessEdit = () => {
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

  interface ClientData {
    clients: ClientItem[];
  }

  interface ClientItem {
    id: number;
    name: string;
    cnpj: string;
    email: string;
  }

  const accessTypeOptions = [
    { value: 1, label: 'Anydesk' },
    { value: 2, label: 'Teamviewer' },
    { value: 3, label: 'Outros' },
  ];

  // Captura o parâmetro `id` da URL
  const { id } = useParams<{ id: string }>();

  const [accessData, setAccessData] = useState<AccessData>({ access: [] });

  const [clientsData, setClientsData] = useState<ClientData>({ clients: [] });

  const handleInputAccess = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setAccessData((prevState) => {
      return {
        ...prevState,
        access: [{ ...prevState.access[0], access: value }],
      };
    });
  };

  const handleInputDesc = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setAccessData((prevState) => {
      return {
        ...prevState,
        access: [{ ...prevState.access[0], desc: value }],
      };
    });
  };

  const handleInputType = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setAccessData((prevState) => {
      return {
        ...prevState,
        access: [{ ...prevState.access[0], type: Number(value) }],
      };
    });
  };

  const handleInputClient = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setAccessData((prevState) => {
      return {
        ...prevState,
        access: [
          { ...prevState.access[0], client: { ...prevState.access[0].client, id: Number(value) } },
        ],
      };
    });
  };

  const handleInputServer = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setAccessData((prevState) => {
      return {
        ...prevState,
        access: [{ ...prevState.access[0], server: Boolean(value) }],
      };
    });

    console.log(accessData);
  };

  const handleSaveAccess = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user') ?? '{}');
      const { token } = user;
      if (!token) {
        throw new Error('Token não encontrado');
      }
      const response: AccessData | null = await accesService.putAccess(accessData, token);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error('Erro ao buscar informações do usuário:', error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessDataById = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        const { token } = user;
        if (!token) {
          throw new Error('Token não encontrado');
        }

        if (!id) {
          throw new Error('ID não encontrado');
        }

        const accessResponse: AccessData = await accesService.getByIdAccess(id, token);

        const clientsResponse: ClientData | null = await clientService.getAllClient(token);

        // Verifica se ambos os dados foram obtidos com sucesso
        if (accessResponse && clientsResponse) {
          setAccessData(accessResponse);
          setClientsData(clientsResponse);
        } else {
          navigate(-1);
        }
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
        // Trate o erro conforme necessário (por exemplo, redirecionar para a página de login)
      }
    };

    fetchAccessDataById();
  }, [id, navigate]);

  return (
    <>
      <Header />
      {accessData.access.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div className="container px-13 px-md-4 px-lg-5 mt-2">
          <ToastContainer />
          <div className="color-border-muted py-3">
            <div className="Box d-flex flex-column Box-overlay--wide">
              <div className="width-full">
                <div className="Box-header">
                  <h1 className="Box-title">Editando Acesso</h1>
                </div>
                <div className="Box-body">
                  <form>
                    <div className="form-group mt-0 mb-3 ">
                      <div className="mb-2">
                        <label htmlFor="access">Acesso</label>
                      </div>
                      <input
                        type="text"
                        id="access"
                        className="form-control input-contrast width-full js-length-limited-input"
                        name="access"
                        placeholder="Digite o acesso do cliente"
                        value={accessData.access[0].access}
                        onChange={handleInputAccess}
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <label htmlFor="desc">Descrição</label>
                      </div>
                      <input
                        type="text"
                        id="desc"
                        className="form-control input-contrast width-full"
                        name="desc"
                        placeholder="Digite o acesso do cliente"
                        value={accessData.access[0].desc}
                        onChange={handleInputDesc}
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <label htmlFor="type">Tipo</label>
                      </div>
                      <select
                        className="form-control input-contrast width-full"
                        name="type"
                        value={accessData.access[0].type}
                        onChange={handleInputType}
                      >
                        <option value="">Selecione o tipo</option>
                        {accessTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <label htmlFor="client">Cliente</label>
                      </div>
                      <select
                        className="form-control input-contrast width-full"
                        name="client"
                        value={accessData.access[0].client.id}
                        onChange={handleInputClient}
                      >
                        <option value="">Selecione o Cliente</option>
                        {clientsData.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <input
                          className="mr-2"
                          type="checkbox"
                          checked={accessData.access[0].server ? true : false}
                          id="server"
                          name="server"
                          onChange={handleInputServer}
                        />
                        <label htmlFor="server">Servidor</label>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="Box-footer">
                  <div className="form-actions">
                    <button
                      className="d-md-none btn btn-primary d-flex flex-items-center flex-justify-center width-full mb-4"
                      onClick={handleSaveAccess}
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        className="octicon octicon-repo mr-1"
                      >
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                      </svg>
                      Salvar
                    </button>
                    <Link
                      className="d-md-none btn d-flex flex-items-center flex-justify-center width-full mb-4"
                      to={'/'}
                    >
                      <svg
                        aria-hidden="true"
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        className="octicon octicon-repo mr-1"
                      >
                        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                      </svg>
                      Voltar
                    </Link>
                    <div className="d-flex flex-items-start">
                      <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
                        <Link className="text-center btn ml-2" to={'/'}>
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            className="octicon octicon-repo"
                          >
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                          </svg>
                          Voltar
                        </Link>
                      </div>
                      <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
                        <button className="text-center btn btn-primary ml-2">
                          <svg
                            aria-hidden="true"
                            height="16"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            data-view-component="true"
                            className="octicon octicon-repo"
                          >
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                          </svg>
                          Salvar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AccessEdit;

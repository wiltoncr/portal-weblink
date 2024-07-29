import { SetStateAction, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';
import clientService from '../../services/client';

const Home = () => {
  const [clientData, setClientData] = useState<ClientData>({ clients: [] });
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  interface ClientData {
    clients: ClientInfo[];
  }

  interface ClientInfo {
    id: number;
    name: string;
    cnpj: string;
    email: string;
  }
  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        const { token } = user;
        if (!token) {
          throw new Error('Token não encontrado');
        }

        const response: ClientData | null = await clientService.getAllClient(token);

        if (response) {
          setClientData(response);
        }
      } catch (error) {
        console.error('Erro ao buscar informações do cliente:', error);
      }
    };
    fetchClientData();
  }, []);

  const sortClientByName = () => {
    if (clientData) {
      const sortedClient = clientData;

      if (sortOrder === 'asc') {
        sortedClient.clients.sort((a, b) => a.name.localeCompare(b.name));
        setSortOrder('desc');
      } else {
        sortedClient.clients.sort((a, b) => b.name.localeCompare(a.name));
        setSortOrder('asc');
      }

      setClientData(sortedClient);
    } else {
      setClientData((prevState) => ({
        ...prevState,
        client: [...(prevState.clients ?? [])],
      }));
    }
  };

  const handleSearchChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
  };

  const filteredClient = clientData.clients.filter((item) => {
    const name = item.name.toLowerCase();
    const cnpj = item.cnpj.toLowerCase();
    const email = item.email.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return (
      name.includes(searchTermLower) ||
      cnpj.includes(searchTermLower) ||
      email.includes(searchTermLower)
    );
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log(`Texto '${text}' copiado para o clipboard.`);
        // Aqui você pode adicionar um feedback visual se desejar
      })
      .catch((error) => {
        console.error('Erro ao copiar para o clipboard:', error);
        // Tratar o erro conforme necessário
      });
  };

  return (
    <>
      <Header />
      <div className="container px-13 px-md-4 px-lg-5 mt-2">
        <ToastContainer />
        <div className="Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start">
          <div className="Layout-main">
            <div>
              <div className="border-bottom color-border-muted py-3">
                <Link
                  to={`/client/add`}
                  className="d-md-none btn btn-primary d-flex flex-items-center flex-justify-center width-full mb-4"
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
                  Novo
                </Link>
                <div className="d-flex flex-items-start">
                  <form className="width-full">
                    <div className="d-flex flex-column flex-lg-row flex-auto">
                      <div className="mb-1 mb-md-0 mr-md-2 flex-auto">
                        <input
                          type="search"
                          id="your-repos-filter"
                          name="q"
                          className="form-control width-full"
                          placeholder="Find a somethings…"
                          autoComplete="off"
                          value={searchTerm}
                          onChange={handleSearchChange}
                        />
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <div className="details-reset details-overlay position-relative mt-1 mt-lg-0">
                          <div className="btn" onClick={() => sortClientByName()}>
                            <span>Name</span>
                          </div>
                        </div>
                        <div className="details-reset details-overlay position-relative mt-1 mt-lg-0">
                          <div className="btn">
                            <span>Company</span>
                          </div>
                        </div>
                        <div className="details-reset details-overlay position-relative mt-1 mt-lg-0">
                          <div className="btn">
                            <span>Sort</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
                    <Link to={`/client/add`} className="text-center btn btn-primary ml-2">
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
                      Novo
                    </Link>
                  </div>
                </div>
              </div>
              {clientData.clients.length === 0 ? (
                <p>Carregando...</p>
              ) : (
                <div className="list">
                  <ul>
                    {filteredClient?.map((clientItem) => (
                      <li
                        key={clientItem.id}
                        className="col-12 d-flex flex-justify-between width-full py-4 border-bottom color-border-muted public source"
                      >
                        <div className="col-10 col-lg-9 d-inline-block">
                          <div className="d-inline-block mb-1">
                            <h3 className="wb-break-all">
                              <Link to={`/client/${clientItem.id}`}>
                                Cliente: {clientItem.name}
                              </Link>
                            </h3>
                          </div>
                          <div>
                            <p className="col-9 d-inline-block color-fg-muted mb-2 pr-4">
                              Cnpj: {clientItem.cnpj}
                            </p>
                          </div>
                          <div className="f6 color-fg-muted mt-2">
                            <span className="ml-0 mr-3">
                              <span>{clientItem.email}</span>
                            </span>
                            {'id: ' + clientItem.id}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

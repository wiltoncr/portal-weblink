import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';
import companyService from '../../services/company';

const CompanyEdit = () => {
  interface CompanyData {
    companys: CompanyInfo[];
  }

  interface CompanyInfo {
    id: number;
    name: string;
    cnpj: string;
    email: string;
  }

  // Captura o parâmetro `id` da URL
  const { id } = useParams<{ id: string }>();

  const [companysData, setCompanysData] = useState<CompanyData>({ companys: [] });

  const handleInputName = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setCompanysData((prevState) => {
      return {
        ...prevState,
        companys: [{ ...prevState.companys[0], name: value }],
      };
    });
  };

  const handleInputCnpj = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setCompanysData((prevState) => {
      return {
        ...prevState,
        companys: [{ ...prevState.companys[0], cnpj: value }],
      };
    });
  };

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;

    setCompanysData((prevState) => {
      return {
        ...prevState,
        companys: [{ ...prevState.companys[0], email: value }],
      };
    });
  };

  const handleDeleteCompany = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user') ?? '{}');
      const { token } = user;
      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response: CompanyData = await companyService.delCompany(Number(id), token);
      if (response) {
        console.log(response);
        navigate(-1);
      }
    } catch (error) {
      console.error('Erro ao buscar informações da empresa:', error);
    }
  };

  const handleSaveCompany = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user') ?? '{}');
      const { token } = user;
      if (!token) {
        throw new Error('Token não encontrado');
      }
      const response: CompanyData = await companyService.putCompany(companysData, token);
      if (response) {
        console.log(response);
      }
    } catch (error) {
      console.error('Erro ao buscar informações da empresa:', error);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyDataById = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        const { token } = user;
        if (!token) {
          throw new Error('Token não encontrado');
        }

        if (!id) {
          throw new Error('ID não encontrado');
        }

        const companyResponse: CompanyData = await companyService.getByIdCompany(id, token);
        console.log(companyResponse);

        if (companyResponse.companys.length > 0) {
          setCompanysData(companyResponse);
        } else {
          navigate(-1);
        }
      } catch (error) {
        console.error('Erro ao buscar informações da empresa:', error);
      }
    };

    fetchCompanyDataById();
  }, [id, navigate]);

  return (
    <>
      <Header />
      {companysData.companys.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div className="container px-13 px-md-4 px-lg-5 mt-2">
          <ToastContainer />
          <div className="color-border-muted py-3">
            <div className="Box d-flex flex-column Box-overlay--wide">
              <div className="width-full">
                <div className="Box-header">
                  <h1 className="Box-title">Editando Empresa</h1>
                </div>
                <div className="Box-body">
                  <form>
                    <div className="form-group mt-0 mb-3 ">
                      <div className="mb-2">
                        <label htmlFor="name">Name</label>
                      </div>
                      <input
                        type="text"
                        id="name"
                        className="form-control input-contrast width-full js-length-limited-input"
                        name="name"
                        placeholder="Digite o nome do cliente"
                        value={companysData.companys[0].name}
                        onChange={handleInputName}
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <label htmlFor="cnpj">Cnpj</label>
                      </div>
                      <input
                        type="text"
                        id="cnpj"
                        className="form-control input-contrast width-full"
                        name="cnpj"
                        placeholder="Digite o cnpj do cliente"
                        value={companysData.companys[0].cnpj}
                        onChange={handleInputCnpj}
                      />
                    </div>
                    <div className="form-group my-3">
                      <div className="mb-2">
                        <label htmlFor="email">Email</label>
                      </div>
                      <input
                        type="text"
                        id="email"
                        className="form-control input-contrast width-full"
                        name="email"
                        placeholder="Digite o email do cliente"
                        value={companysData.companys[0].email}
                        onChange={handleInputEmail}
                      />
                    </div>
                  </form>
                </div>
                <div className="Box-footer">
                  <div className="form-actions">
                    <button
                      className="d-md-none btn btn-primary d-flex flex-items-center flex-justify-center width-full mb-4"
                      onClick={handleSaveCompany}
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
                    <button
                      className="d-md-none btn btn-danger d-flex flex-items-center flex-justify-center width-full mb-4"
                      onClick={handleDeleteCompany}
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
                      Deletar
                    </button>
                    <Link
                      className="d-md-none btn d-flex flex-items-center flex-justify-center width-full mb-4"
                      to={'/company'}
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
                        <Link className="text-center btn ml-2" to={'/company'}>
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
                        <button
                          className="text-center btn btn-danger ml-2"
                          onClick={handleDeleteCompany}
                        >
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
                          Deletar
                        </button>
                      </div>
                      <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
                        <button
                          className="text-center btn btn-primary ml-2"
                          onClick={handleSaveCompany}
                        >
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

export default CompanyEdit;

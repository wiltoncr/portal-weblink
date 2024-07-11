import './AccessEdit.css';

import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';

const AccessEdit = () => {
  // Captura o parâmetro `id` da URL
  const { id } = useParams();

  // Use o `id` como necessário no seu componente
  return (
    <>
      <Header />
      <div className="container px-13 px-md-4 px-lg-5 mt-2">
        <ToastContainer />
        <div className="border-bottom color-border-muted py-3">
          <div className="Box d-flex flex-column Box-overlay--wide">
            <div className="width-full">
              <div className="Box-header">
                <h1 className="Box-title">Editando Acesso</h1>
              </div>
              <div className="Box-body">
                <form>
                  <div className="form-group mt-0 mb-3 ">
                    <div className="mb-2">
                      <label htmlFor="repo_description">Acesso</label>
                    </div>
                    <input
                      type="text"
                      id="repo_description"
                      className="form-control input-contrast width-full js-length-limited-input"
                      name="repo_description"
                      placeholder="Digite o acesso do cliente"
                      autoFocus
                    />
                  </div>
                  <div className="form-group my-3">
                    <div className="mb-2">
                      <label htmlFor="repo_description">Acesso</label>
                    </div>
                    <input
                      type="text"
                      id="repo_description"
                      className="form-control input-contrast width-full"
                      name="repo_description"
                      placeholder="Digite o acesso do cliente"
                      autoFocus
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <a
            href="/new"
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
            Salvar
          </a>
          <a
            href="/new"
            className="d-md-none btn d-flex flex-items-center flex-justify-center width-full mb-4"
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
          </a>

          <div className="d-flex flex-items-start">
            <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
              <a href="/new" className="text-center btn ml-2">
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
                Cancelar
              </a>
            </div>
            <div className="d-none d-md-flex flex-md-items-center flex-md-justify-end">
              <a href="/new" className="text-center btn btn-primary ml-2">
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessEdit;

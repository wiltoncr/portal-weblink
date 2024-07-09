import './Home.css';

import { ToastContainer } from 'react-toastify';

import Header from '../../Components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container px-13 px-md-4 px-lg-5 mt-2">
        <ToastContainer />
        <div className="Layout Layout--flowRow-until-md Layout--sidebarPosition-start Layout--sidebarPosition-flowRow-start">
          <div className="Layout-main">
            <div>
              <div className="border-bottom color-border-muted py-3">
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
                  Novo
                </a>
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
                        />
                      </div>
                      <div className="d-flex flex-wrap gap-2">
                        <div className="details-reset details-overlay position-relative mt-1 mt-lg-0">
                          <div className="btn">
                            <span>Type</span>
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
                      New
                    </a>
                  </div>
                </div>
              </div>
              <div className="list">
                <ul>
                  <li className="col-12 d-flex flex-justify-between width-full py-4 border-bottom color-border-muted public source">
                    <div className="col-10 col-lg-9 d-inline-block">
                      <div className="d-inline-block mb-1">
                        <h3 className="wb-break-all">
                          <a href="#">control-help-desk</a>
                        </h3>
                      </div>
                      <div>
                        <p className="col-9 d-inline-block color-fg-muted mb-2 pr-4">
                          Este projeto simples tem como objetivo controlar acessos remotos dos
                          clientes
                        </p>
                      </div>
                      <div className="f6 color-fg-muted mt-2">
                        <span className="ml-0 mr-3">
                          <span>JavaScript</span>
                        </span>
                        Updated
                      </div>
                    </div>
                    <div className="col-2 d-flex flex-column flex-justify-around flex-items-end ml-3">
                      <button
                        type="submit"
                        className="js-toggler-target rounded-left-2 btn-sm btn BtnGroup-item"
                      >
                        <svg
                          height="16"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          className="octicon octicon-star d-inline-block mr-2"
                        >
                          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                        </svg>
                        <span className="d-inline">Copy</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import './Header.css';

import { useEffect, useState } from 'react';

import userService from '../../services/userData';

const Header = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  interface UserData {
    id: number;
    name: string;
    email: string;
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user') ?? '{}');
        const { token } = user;
        if (!token) {
          throw new Error('Token não encontrado');
        }

        const response: UserData | null = await userService.getUserData(token);

        userService.setUserData(response);

        const storedUserData = userService.getUserDataFromLocalStorage();
        if (storedUserData) {
          setUserData(storedUserData);
        }
      } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
        // Trate o erro conforme necessário (ex.: redirecionar para página de login)
      }
    };

    fetchUserData();
  }, []);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <header className="AppHeader">
      <div className="AppHeader-glocalBar">
        <div className="AppHeader-globalBar-start">
          <div>
            <button className="Button AppHeader-button" onClick={toggleOverlay}>
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                data-view-component="true"
                className="octicon octicon-three-bars Button-visual"
              >
                <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
              </svg>
            </button>
            <div
              className={`Overlay Overlay-whenNarrow Overlay--size-small-portrait Overlay--motion-scaleFade Overlay--placement-left SidePanel ${isOverlayVisible ? 'Overlay-header' : 'd-none'}`}
            >
              <div className="Overlay-header">
                <div className="Overlay-headerContentWrap">
                  <div className="Overlay-titleWrap">
                    <div className="d-flex">
                      <div className="AppHeader-logo position-relative">
                        <svg
                          height="24"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="24"
                          className="octicon octicon-mark-github"
                        >
                          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="Overlay-actionWrap">
                    <button
                      type="button"
                      className="close-button Overlay-closeButton"
                      onClick={toggleOverlay}
                    >
                      <svg
                        height="16"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="16"
                        className="octicon octicon-x"
                      >
                        <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="Overlay-body d-flex flex-column px-2">
                <div className="d-flex flex-column mb-3">
                  <nav className="ActionList">
                    <ul className="ActionListWrap">
                      <li className="ActionListItem">
                        <a
                          href="/dashboard"
                          className="ActionListContent ActionListContent--visual16"
                        >
                          <span className="ActionListItem-visual ActionListItem-visual--leading">
                            <svg
                              aria-hidden="true"
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              className="octicon octicon-home"
                            >
                              <path d="M6.906.664a1.749 1.749 0 0 1 2.187 0l5.25 4.2c.415.332.657.835.657 1.367v7.019A1.75 1.75 0 0 1 13.25 15h-3.5a.75.75 0 0 1-.75-.75V9H7v5.25a.75.75 0 0 1-.75.75h-3.5A1.75 1.75 0 0 1 1 13.25V6.23c0-.531.242-1.034.657-1.366l5.25-4.2Zm1.25 1.171a.25.25 0 0 0-.312 0l-5.25 4.2a.25.25 0 0 0-.094.196v7.019c0 .138.112.25.25.25H5.5V8.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 .75.75v5.25h2.75a.25.25 0 0 0 .25-.25V6.23a.25.25 0 0 0-.094-.195Z"></path>
                            </svg>
                          </span>

                          <span className="ActionListItem-label">Home</span>
                        </a>
                      </li>
                      <li className="ActionListItem">
                        <a
                          href="https://github.com/codespaces"
                          className="ActionListContent ActionListContent--visual16"
                        >
                          <span className="ActionListItem-visual ActionListItem-visual--leading">
                            <svg
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              className="octicon octicon-codespaces"
                            >
                              <path d="M0 11.25c0-.966.784-1.75 1.75-1.75h12.5c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm2-9.5C2 .784 2.784 0 3.75 0h8.5C13.216 0 14 .784 14 1.75v5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 2 6.75Zm1.75-.25a.25.25 0 0 0-.25.25v5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-5a.25.25 0 0 0-.25-.25Zm-2 9.5a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25Z"></path>
                              <path d="M7 12.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm-4 0a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Z"></path>
                            </svg>
                          </span>

                          <span className="ActionListItem-label">Codespaces</span>
                        </a>
                      </li>
                      <li className="ActionListItem">
                        <a
                          href="/explore"
                          className="ActionListContent ActionListContent--visual16"
                        >
                          <span className="ActionListItem-visual ActionListItem-visual--leading">
                            <svg
                              height="16"
                              viewBox="0 0 16 16"
                              version="1.1"
                              width="16"
                              className="octicon octicon-telescope"
                            >
                              <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
                            </svg>
                          </span>

                          <span className="ActionListItem-label">Explore</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <a className="AppHeader-logo" href="https://github.com/">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle color-fg-default"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <div className="AppHeader-context">
            <div className="AppHeader-context-compact">
              <a className="AppHeader-context-compact-trigger no-underline" href="/wiltoncr">
                <strong className="AppHeader-context-compact-mainItem d-flex flex-items-center Truncate">
                  <span className="Truncate-text ">{userData?.name}</span>
                </strong>
              </a>
            </div>
          </div>
        </div>
        <div className="AppHeader-globalBar-end">
          <div className="AppHeader-search">
            <button type="button" className="AppHeader-button AppHeader-search-whenNarrow">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="octicon octicon-search"
              >
                <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
              </svg>
            </button>
          </div>
          <div className="AppHeader-notifications-button">
            <button type="button" className="AppHeader-button AppHeader-search-whenNarrow">
              <svg
                aria-hidden="true"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                className="octicon octicon-inbox Button-visual"
              >
                <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
              </svg>
            </button>
          </div>
          <div className="AppHeader-user">
            <button
              type="button"
              className="Button--invisible Button--medium Button Button--invisible-noVisuals color-bg-transparent p-0"
            >
              <span className="Button-content">
                <span className="Button-label">
                  <img
                    src="https://avatars.githubusercontent.com/u/28462310?v=4"
                    alt=""
                    sizes="32"
                    height="32"
                    width="32"
                    className="avatar circle"
                  />
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

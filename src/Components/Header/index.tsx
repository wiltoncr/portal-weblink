import './Header.css';

const Header = () => {
  return (
    <header className="AppHeader">
      <div className="AppHeader-glocalBar">
        <div className="AppHeader-globalBar-start">
          <div>
            <button className="Button AppHeader-button">
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
                  <span className="Truncate-text ">wiltoncr</span>
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

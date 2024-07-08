const Header = () => {
  return (
    <header className="header-nav header white-header ">
      <div className="navbar ">
        <div className="">
          <div className="">
            <a className="brand " aria-label="home" href="/">
              <img
                src="https://static.dhiwise.com/home/Dhi_logo.webp?w=3840&q=75"
                alt="logo"
                width="200" // Ajuste o tamanho conforme necessário
                height="120"
                loading="eager"
              />
            </a>
            <nav role="navigation" className="nav-menu start  false">
              <a className="nav-link _1" href="/pricing">
                Pricing
              </a>
              <a className="nav-link _1 w-nav-link" href="/wisegpt">
                WiseGPT
              </a>
              <a className="nav-link _3 white-color " href="/community">
                Join our community
              </a>
              <a
                className="nav-link _3 login-box white-color button "
                href="https://app.dhiwise.com/signin"
              >
                Sign in
              </a>
              <a className="button signup-button " href="https://app.dhiwise.com/sign-up">
                Sign up for free
              </a>
            </nav>
          </div>
          <div
            className="menu-button "
            aria-label="menu"
            role="button"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            X
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

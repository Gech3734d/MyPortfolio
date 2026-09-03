function Navbar({
  menuOpen,
  setMenuOpen,
  lightMode,
  toggleTheme,
  activeSection,
}) {
  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    {
      name: "Education & Skills",
      href: "#skills",
      id: "skills",
    },
    {
      name: "Projects",
      href: "#projects",
      id: "projects",
    },
    {
      name: "Contact",
      href: "#contact",
      id: "contact",
    },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header id="header" className={window.scrollY > 50 ? "scrolled" : ""}>
      <nav className="navbar">
        <a href="#home" className="logo">
          MyPortfolio<span>.</span>
        </a>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? "active" : ""}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-buttons">
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <i
              className={
                lightMode
                  ? "fa-solid fa-moon"
                  : "fa-solid fa-sun"
              }
            ></i>
          </button>

          <button
            className="icon-btn menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <i
              className={
                menuOpen
                  ? "fa-solid fa-xmark"
                  : "fa-solid fa-bars"
              }
            ></i>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
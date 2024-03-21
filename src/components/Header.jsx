export default function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>

      <nav className="navbar">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="bx bx-moon" id="darkMode-icon"></div>

      <div className="bx bx-menu" id="menu-icon"></div>
    </header>
  );
}

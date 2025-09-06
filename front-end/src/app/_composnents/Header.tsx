import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="logo ">
          <div>
            <span>wp</span>
            <span>{`>_`}</span>
          </div>
          <p>Seemol</p>
        </div>
        <ul className="nav-links" id="navLinks">
          {navMenus.map((menu) => (
            <NavMenu key={menu.id} menu={menu} />
          ))}
        </ul>
        <div className="mobile-toggle" id="mobileToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

const navMenus: {
  label: string;
  href: string;
  id: string;
}[] = [
  {
    label: "Home",
    href: "#home",
    id: "home",
  },
  {
    label: "About",
    href: "#about",
    id: "about",
  },
  {
    label: "Skills",
    href: "#skills",
    id: "skills",
  },
  {
    label: "Games",
    href: "#games",
    id: "games",
  },
  {
    label: "Tools",
    href: "#tools",
    id: "tools",
  },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Blog", href: "#blog", id: "blog" },
  { label: "Contact", href: "#contact", id: "contact" },
];

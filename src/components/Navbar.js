import "./navbar.css";

export default function Navbar() {
  const navItems = ["Services", "Portfolio", "Contact", "Aboutus"];

  return (
    <>
      <ul className="list">
        {navItems.map(function (citem, i) {
          return (
            <li key={i} className="list-item">
              {citem}
            </li>
          );
        })}
      </ul>
    </>
  );
}

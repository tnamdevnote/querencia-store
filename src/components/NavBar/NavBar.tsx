import { Link } from "react-router-dom";
import Icon from "../Icons/Icon";
import { useState } from "react";

const categories = [
  "All Products",
  "Plant Pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Art & Decor",
];

function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };
  return (
    <header>
      <div className="flex items-center justify-between p-5">
        <Link to="/">
          <Icon name="Logo" className="text-2xl" />
        </Link>
        <div className="flex gap-4">
          <Link to="/cart">
            <Icon name="Cart" className="h-4 w-4" />
          </Link>
          <div>
            <Icon name="Avatar" className="h-4 w-4" />
          </div>
          <button className="md:hidden" onClick={handleMenuOpen}>
            <Icon name="Menu" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <nav className="relative">
        <div
          className={`min-h-screen w-full bg-white/10 backdrop-blur-sm ${isOpen ? "block" : "hidden"} md:hidden`}
        >
          <ul
            className={`absolute left-1/2 ${isOpen ? "flex" : "hidden"} w-full -translate-x-1/2 flex-col items-center gap-2 py-5`}
          >
            {categories.map((category, i) => (
              <li key={i} className="font-body text-md text-primary">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <hr></hr>
        <ul
          className={`hidden w-full gap-2 py-5 md:flex md:justify-center md:gap-11`}
        >
          {categories.map((category, i) => (
            <li key={i} className="font-body text-md text-primary">
              <a href="#">{category}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;

import { Link } from "react-router-dom";
import Icon from "../Icons/Icon";

const categories = [
  "All Products",
  "Plant Pots",
  "Ceramics",
  "Tables",
  "Chairs",
  "Art & Decor",
];

function NavBar() {
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
          <button>
            <Icon name="Menu" className="h-4 w-4" />
          </button>
        </div>
      </div>
      <nav className="relative">
        <ul className="absolute left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-2 bg-white/10 backdrop-blur-sm">
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

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-3 justify-center mb-5">
      <Link to="/coffee">Coffee</Link>
      <Link to="/addCoffee">AddCoffee</Link>
      <Link to="/updateCoffee">UpdateCoffee</Link>
    </div>
  );
};

export default Header;

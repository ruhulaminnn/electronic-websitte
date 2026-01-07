import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-yellow-400">ElectroMart</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
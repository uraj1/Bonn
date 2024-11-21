import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 dark:bg-black text-white py-6 px-6">
    
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm text-black dark:text-white">
          © 2024 Bonn Supplychain Solutions. All rights reserved.
        </p>
        <div className="flex space-x-4 text-sm text-black dark:text-white">
          <NavLink to="/" className="hover:underline">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>
          <NavLink to="/team" className="hover:underline">
            Team
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

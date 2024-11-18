import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 pr-6 pl-6">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-sm">
                    © 2024 Bonn Supplychain Solutions. All rights reserved.
                </p>
                <div className="flex space-x-4 text-sm">
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
  )
}

export default Footer

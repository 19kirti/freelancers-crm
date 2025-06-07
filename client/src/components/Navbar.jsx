import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 fixed left-0 right-0 top-0 z-50 h-16">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center justify-start">
          <Link to="/" className="flex">
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-600">Freelancer CRM</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
            end
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/clients" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
          >
            Clients
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/tasks" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
          >
            Tasks
          </NavLink>
          <NavLink 
            to="/invoices" 
            className={({ isActive }) => 
              isActive ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600"
            }
          >
            Invoices
          </NavLink>
        </div>
        
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>

          {/* User dropdown */}
          <div className="flex items-center ml-3">
            <div>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
              >
                <span className="sr-only">Open user menu</span>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                  FD
                </div>
              </button>
            </div>
            
            {dropdownOpen && (
              <div className="absolute top-10 right-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900">Freelancer Dev</span>
                  <span className="block text-sm font-medium text-gray-500 truncate">dev@freelancer.com</span>
                </div>
                <ul className="py-1">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full mt-2 py-2 border-t border-gray-200">
          <ul className="flex flex-col">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `block py-2 px-3 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                }
                end
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/clients" 
                className={({ isActive }) => 
                  `block py-2 px-3 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Clients
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => 
                  `block py-2 px-3 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/tasks" 
                className={({ isActive }) => 
                  `block py-2 px-3 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/invoices" 
                className={({ isActive }) => 
                  `block py-2 px-3 ${isActive ? "text-blue-600 font-medium" : "text-gray-600"}`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                Invoices
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
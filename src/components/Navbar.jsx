import { Link } from 'react-router-dom';
import { Menu, MapPin, Users, ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">TripFinder</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Home</Link>
            <Link to="/destinations" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">Destinos</Link>
            <div className="relative">
              <button className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Categorias
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Praias</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Natureza</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">História</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Aventura</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Gastronomia</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

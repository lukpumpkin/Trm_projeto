import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import DestinationCard from '../components/DestinationCard';
import destinations from '../data/destinations.json';

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const query = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    setSearchQuery(query);
    setSelectedCategory(category);
    applyFilters();
  }, [searchParams]);

  const applyFilters = () => {
    let results = [...destinations];

    if (searchQuery) {
      results = results.filter(dest =>
        dest.nome.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      results = results.filter(dest => dest.categoria === selectedCategory);
    }

    setFilteredDestinations(results);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Update URL without reloading page
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('search', query);
    } else {
      params.delete('search');
    }
    // Also preserve category
    params.set('category', selectedCategory || '');
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    applyFilters();
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    params.set('search', searchQuery || '');
    window.history.replaceState({}, '', `${window.location.pathname}?${params.toString()}`);
    applyFilters();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Explore Destinos</h1>
        
        <SearchBar onSearch={handleSearch} />
        <CategoryFilter 
          activeCategory={selectedCategory} 
          setActiveCategory={handleCategoryChange} 
        />

        {filteredDestinations.length === 0 ? (
          <p className="text-gray-500 text-center py-12">
            Nenhum destino encontrado com os filtros aplicados.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
            {filteredDestinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="group"
              >
                <DestinationCard destination={dest} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
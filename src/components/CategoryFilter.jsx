import { Link } from 'react-router-dom';

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  const categories = [
    { name: 'Todas', value: '' },
    { name: 'Praias', value: 'Praias' },
    { name: 'Natureza', value: 'Natureza' },
    { name: 'História', value: 'História' },
    { name: 'Aventura', value: 'Aventura' },
    { name: 'Gastronomia', value: 'Gastronomia' },
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            to={`/destinations?category=${cat.value}`}
            className={`px-3 py-1 rounded-md text-sm font-medium ${
              activeCategory === cat.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
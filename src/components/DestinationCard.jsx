import { Link } from 'react-router-dom';
import { Heart, HeartHandshake } from 'lucide-react';
import { useState } from 'react';

export default function DestinationCard({ destination }) {
  const [isFavorite, setIsFavorite] = useState(() => {
    const favorites = JSON.parse(localStorage.getItem('tripFinderFavorites') || '[]');
    return favorites.includes(destination.id);
  });

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem('tripFinderFavorites') || '[]');
    const index = favorites.indexOf(destination.id);
    if (index === -1) {
      localStorage.setItem('tripFinderFavorites', JSON.stringify([...favorites, destination.id]));
    } else {
      favorites.splice(index, 1);
      localStorage.setItem('tripFinderFavorites', JSON.stringify(favorites));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={destination.imagem}
        alt={destination.nome}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{destination.nome}</h3>
          <button
            onClick={toggleFavorite}
            className={`p-1 rounded-full hover:bg-gray-100 ${isFavorite ? 'text-red-500' : 'text-gray-400'}`}
          >
            {isFavorite ? <Heart className="h-4 w-4" /> : <HeartHandshake className="h-4 w-4" />}
          </button>
        </div>
        <p className="text-sm text-gray-600 mb-1">
          {destination.cidade}, {destination.estado}
        </p>
        <p className="text-xs text-gray-500 mb-2">{destination.categoria}</p>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-yellow-400 ${i < destination.avaliacao ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ⭐
            </span>
          ))}
          <span className="ml-2 text-xs text-gray-600">({destination.avaliacao})</span>
        </div>
        <p className="text-xs text-gray-700 line-clamp-2">
          {destination.descricao}
        </p>
        <Link
          to={`/destinations/${destination.id}`}
          className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
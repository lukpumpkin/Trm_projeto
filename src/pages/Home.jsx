import { Link } from 'react-router-dom';
import { MapPin, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import destinations from '../data/destinations.json';

export default function Home() {
  const [featuredDestinations, setFeaturedDestinations] = useState([]);

  useEffect(() => {
    // Select 3 random destinations for featured section
    const shuffled = [...destinations].sort(() => 0.5 - Math.random());
    setFeaturedDestinations(shuffled.slice(0, 3));
  }, []);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Encontre destinos incríveis para sua próxima aventura.
          </h1>
          <Link
            to="/destinations"
            className="block mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 transition-colors"
          >
            Explorar destinos
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Destinos em Destaque
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDestinations.map((dest) => (
              <Link
                key={dest.id}
                to={`/destinations/${dest.id}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={dest.imagem}
                    alt={dest.nome}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">{dest.nome}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {dest.cidade}, {dest.estado}
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-yellow-400 ${
                            i < dest.avaliacao ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        >
                          ⭐
                        </span>
                      ))}
                      <span className="ml-2 text-xs text-gray-600">({dest.avaliacao})</span>
                    </div>
                    <p className="text-xs text-gray-700 line-clamp-2">
                      {dest.descricao}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Categorias
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-8 w-8 text-blue-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Praias</h3>
              <p className="text-sm text-gray-600">
                Descubra as melhores praias do Brasil
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-8 w-8 text-green-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Natureza</h3>
              <p className="text-sm text-gray-600">
                Aventure-se em parques e reservas naturais
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-8 w-8 text-purple-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">História</h3>
              <p className="text-sm text-gray-600">
                Visite cidades com rica herança cultural
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Aventura</h3>
              <p className="text-sm text-gray-600">
                Atividades radicais e esportes de aventura
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <MapPin className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Gastronomia</h3>
              <p className="text-sm text-gray-600">
                Saboreie a culinária local e internacional
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <Users className="h-8 w-8 text-indigo-500 mb-4" />
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Ecoturismo</h3>
              <p className="text-sm text-gray-600">
                Turismo sustentável e respeitoso ao meio ambiente
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
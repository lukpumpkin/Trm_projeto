import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MapComponent from '../components/MapComponent';
import destinations from '../data/destinations.json';

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find(d => d.id === parseInt(id));
  const [mapVisible, setMapVisible] = useState(false);

  if (!destination) {
    return <div className="p-6">Destino não encontrado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <div className="mb-6">
          <a
            href="/destinations"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            ← Voltar para os destinos
          </a>
        </div>

        {/* Image */}
        <img
          src={destination.imagem}
          alt={destination.nome}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
        />

        {/* Title and rating */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{destination.nome}</h1>
          <div className="flex items-center mt-2">
            <span className="text-xl text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <span key={i} aria-hidden="true">⭐</span>
              ))}
            </span>
            <span className="ml-2 text-gray-600">({destination.avaliacao})</span>
          </div>
          <p className="mt-2 text-sm text-gray-500">
            {destination.cidade}, {destination.estado} • {destination.categoria}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <button
            onClick={() => setMapVisible(false)}
            className={`px-4 py-2 mr-2 rounded-t-lg ${
              !mapVisible ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Informações
          </button>
          <button
            onClick={() => setMapVisible(true)}
            className={`px-4 py-2 mr-2 rounded-t-lg ${
              mapVisible ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Mapa
          </button>
        </div>

        {mapVisible ? (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Localização</h2>
            <MapComponent latitude={destination.latitude} longitude={destination.longitude} />
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre o local</h2>
              <p className="text-gray-700">{destination.descricao}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">História</h2>
              <p className="text-gray-700">{destination.historia}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Curiosidades</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {destination.curiosidades.map((curiosidade, index) => (
                  <li key={index}>{curiosidade}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Melhor época para visitar</h2>
              <p className="text-gray-700">{destination.melhor_epoca}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Custo estimado</h2>
              <p className="text-gray-700">{destination.custo_estimado}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Pontos turísticos próximos</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {destination.pontos_turisticos.map((ponto, index) => (
                  <li key={index}>{ponto}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
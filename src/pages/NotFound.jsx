export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex items-center justify-center h-16 mb-8">
        <svg className="h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M7 20a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Página não encontrada</h1>
      <p className="mb-6 text-lg text-gray-500">
        Desculpe, a página que você está procurando não existe.
      </p>
      <a
        href="/"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}
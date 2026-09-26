export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          TripFinder &copy; {new Date().getFullYear()} - Projeto acadêmico de turismo
        </p>
        <p className="text-xs mt-2">
          Desenvolvido com React, Vite e Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
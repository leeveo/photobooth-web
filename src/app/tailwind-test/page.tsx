export default function TailwindTest() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-violet-600">
          Test de Tailwind CSS
        </h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-red-500 h-24 rounded-lg flex items-center justify-center text-white font-bold">
            Rouge
          </div>
          <div className="bg-blue-500 h-24 rounded-lg flex items-center justify-center text-white font-bold">
            Bleu
          </div>
          <div className="bg-green-500 h-24 rounded-lg flex items-center justify-center text-white font-bold">
            Vert
          </div>
          <div className="bg-yellow-500 h-24 rounded-lg flex items-center justify-center text-white font-bold">
            Jaune
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-violet-100 rounded-lg">
            <h2 className="text-xl font-bold text-violet-800 mb-2">Test des classes de texte</h2>
            <p className="text-sm text-gray-600">Texte petit</p>
            <p className="text-base text-gray-700">Texte normal</p>
            <p className="text-lg text-gray-800">Texte large</p>
            <p className="text-xl text-gray-900">Texte extra large</p>
          </div>
          
          <div className="p-4 bg-indigo-100 rounded-lg">
            <h2 className="text-xl font-bold text-indigo-800 mb-2">Test des bordures</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="border-2 border-indigo-500 p-2 rounded">Border</div>
              <div className="border-2 border-dashed border-indigo-500 p-2 rounded">Dashed</div>
              <div className="border-2 border-dotted border-indigo-500 p-2 rounded">Dotted</div>
            </div>
          </div>
          
          <div className="p-4 bg-sky-100 rounded-lg">
            <h2 className="text-xl font-bold text-sky-800 mb-2">Test des boutons</h2>
            <div className="flex flex-wrap gap-2">
              <button className="btn-primary">Bouton Primary</button>
              <button className="btn-secondary">Bouton Secondary</button>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-lg hover:opacity-90 transition-opacity">
                Bouton Gradient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

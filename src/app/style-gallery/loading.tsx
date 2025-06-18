export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 font-medium">Chargement des styles...</p>
      </div>
    </div>
  );
}

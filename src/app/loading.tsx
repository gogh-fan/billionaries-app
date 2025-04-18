export default function Loading() {
  return (
    <div className="container mx-auto py-20 px-6 flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-blue-500 border-l-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-gray-600">데이터를 불러오는 중...</p>
    </div>
  );
} 
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto py-20 px-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4 text-red-600">오류가 발생했습니다</h2>
      <p className="text-lg mb-8 text-center">{error.message || '데이터를 가져오는 도중 문제가 발생했습니다.'}</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          다시 시도하기
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
} 
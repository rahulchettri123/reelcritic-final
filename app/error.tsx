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
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-8">An unexpected error has occurred.</p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
        <Link href="/" className="px-4 py-2 rounded bg-gray-600 text-white hover:bg-gray-700 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
} 
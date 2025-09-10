'use client';

import type { Dispatch, SetStateAction } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) {
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className='flex items-center justify-end space-x-4 my-6'>
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`px-3 py-1 transition-all duration-200 ease-out transform ${
          currentPage === 1
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer hover:scale-105'
        }`}
      >
        Previous
      </button>

      <div className='flex items-center space-x-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            className={`px-3 py-1 cursor-pointer transition-all duration-200 ease-out transform hover:scale-105 ${
              currentPage === i + 1
                ? 'text-gray-600 dark:text-gray-400 font-medium'
                : 'text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 transition-all duration-200 ease-out transform ${
          currentPage === totalPages
            ? 'text-gray-300 cursor-not-allowed'
            : 'text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer hover:scale-105'
        }`}
      >
        Next
      </button>
    </div>
  );
}

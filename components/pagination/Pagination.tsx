'use client';

import { Dispatch, SetStateAction } from 'react';

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
				className={`px-3 py-1 rounded  ${
					currentPage === 1
						? 'text-neutral-400 cursor-not-allowed'
						: 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
				}`}
			>
				Previous
			</button>

			<div className='flex items-center space-x-2'>
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i}
						onClick={() => paginate(i + 1)}
						className={`px-3 py-1 rounded cursor-pointer ${
							currentPage === i + 1
								? 'bg-blue-500 text-white'
								: 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300'
						}`}
					>
						{i + 1}
					</button>
				))}
			</div>

			<button
				onClick={nextPage}
				disabled={currentPage === totalPages}
				className={`px-3 py-1 rounded ${
					currentPage === totalPages
						? 'text-neutral-400 cursor-not-allowed'
						: 'text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 cursor-pointer'
				}`}
			>
				Next
			</button>
		</div>
	);
}

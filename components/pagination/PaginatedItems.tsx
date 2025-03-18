'use client';

import { ReactNode, useState } from 'react';
import Pagination from './Pagination';

interface PaginatedItemsProps<T> {
	items: T[];
	itemsPerPage: number;
	renderItem: (item: T, index: number) => ReactNode;
	containerClassName?: string;
}

export default function PaginatedItems<T>({
	items,
	itemsPerPage,
	renderItem,
	containerClassName = '',
}: PaginatedItemsProps<T>) {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(items.length / itemsPerPage);

	// Get current items
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<>
			<div className={containerClassName}>
				{currentItems.map((item, index) => renderItem(item, index))}
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
}

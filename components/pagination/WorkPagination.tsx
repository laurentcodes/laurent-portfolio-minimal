'use client';

import Link from 'next/link';
import PaginatedItems from './PaginatedItems';

type WorkItem = {
	project: string;
	company: string;
	techStack: string[];
	description: string;
	role: string;
	impact: string;
	access: string;
	url?: string;
};

interface WorkPaginationProps {
	workExperience: WorkItem[];
	itemsPerPage: number;
}

export default function WorkPagination({
	workExperience,
	itemsPerPage,
}: WorkPaginationProps) {
	const renderWorkItem = (work: WorkItem, index: number) => (
		<div
			key={index}
			className='flex flex-col space-y-3 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-200'
		>
			<div className='border-b border-neutral-200 dark:border-neutral-800 pb-3 mb-2'>
				<h2 className='text-xl font-medium text-neutral-900 dark:text-neutral-100'>
					{work.url ? (
						<Link
							href={work.url}
							target='_blank'
							className='hover:text-blue-500 dark:hover:text-blue-400'
						>
							{work.project}
						</Link>
					) : (
						work.project
					)}
				</h2>

				<p className='text-neutral-600 dark:text-neutral-400 text-sm mt-1'>
					<span className='font-medium text-blue-600 dark:text-blue-400'>
						Company:
					</span>{' '}
					{work.company}
				</p>
			</div>

			<div className='flex flex-col space-y-3'>
				<div className='flex flex-wrap gap-2 mb-2'>
					{work.techStack.map((tech, i) => (
						<span
							key={i}
							className='px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
						>
							{tech}
						</span>
					))}
				</div>

				<p className='text-neutral-800 dark:text-neutral-200 mb-1'>
					<span className='font-medium text-blue-600 dark:text-blue-400'>
						Description:
					</span>{' '}
					{work.description}
				</p>

				<p className='text-neutral-800 dark:text-neutral-200 mb-1'>
					<span className='font-medium text-blue-600 dark:text-blue-400'>
						My Role:
					</span>{' '}
					{work.role}
				</p>

				<p className='text-neutral-800 dark:text-neutral-200 mb-1'>
					<span className='font-medium text-blue-600 dark:text-blue-400'>
						Impact:
					</span>{' '}
					{work.impact}
				</p>

				<p className='text-neutral-600 dark:text-neutral-400 italic text-sm mt-2 border-t border-neutral-200 dark:border-neutral-800 pt-3'>
					{work.access}
				</p>
			</div>
		</div>
	);

	return (
		<PaginatedItems
			items={workExperience}
			itemsPerPage={itemsPerPage}
			renderItem={renderWorkItem}
			containerClassName='my-8 flex flex-col space-y-8'
		/>
	);
}

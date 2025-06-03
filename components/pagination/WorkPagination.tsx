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
			className='flex flex-col space-y-3 p-6 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200'
		>
			<div className='pb-3 mb-2'>
				<h2 className='text-xl font-medium'>
					{work.url ? (
						<Link href={work.url} target='_blank' className='hover:underline'>
							{work.project}
						</Link>
					) : (
						work.project
					)}
				</h2>

				<p className='text-sm mt-1'>
					<span className='font-medium'>Company:</span> {work.company}
				</p>
			</div>

			<div className='flex flex-col space-y-3'>
				<div className='flex flex-wrap gap-2 mb-2'>
					{work.techStack.map((tech, i) => (
						<span
							key={i}
							className='px-2 py-1 text-xs font-medium text-black dark:text-white'
						>
							{tech}
						</span>
					))}
				</div>

				<p className='mb-1'>
					<span className='font-medium'>Description:</span> {work.description}
				</p>

				<p className='mb-1'>
					<span className='font-medium'>My Role:</span> {work.role}
				</p>

				<p className='mb-1'>
					<span className='font-medium'>Impact:</span> {work.impact}
				</p>

				<p className='italic text-sm mt-2 pt-3'>{work.access}</p>
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

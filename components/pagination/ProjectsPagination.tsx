'use client';

import Link from 'next/link';
import PaginatedItems from './PaginatedItems';

type Project = {
	name: string;
	tags: string[];
	url: string;
	isGithub?: boolean;
};

interface ProjectsPaginationProps {
	projects: Project[];
	itemsPerPage: number;
}

export default function ProjectsPagination({
	projects,
	itemsPerPage,
}: ProjectsPaginationProps) {
	const renderProject = (project: Project, index: number) => (
		<div
			key={index}
			className='p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-200'
		>
			<div className='flex items-center justify-between mb-2'>
				<h3 className='text-base font-medium'>
					<Link
						href={project.url}
						target='_blank'
						className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					>
						{project.name}
					</Link>
				</h3>
				{project.isGithub && (
					<span className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'>
						GitHub
					</span>
				)}
			</div>

			<div className='flex flex-wrap gap-1.5'>
				{project.tags.map((tag, i) => (
					<span
						key={i}
						className='px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
					>
						{tag}
					</span>
				))}
			</div>
		</div>
	);

	return (
		<PaginatedItems
			items={projects}
			itemsPerPage={itemsPerPage}
			renderItem={renderProject}
			containerClassName='flex flex-col space-y-4 mb-6'
		/>
	);
}

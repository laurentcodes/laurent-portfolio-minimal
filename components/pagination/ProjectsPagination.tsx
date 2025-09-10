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
      className='p-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200'
    >
      <div className='flex items-center justify-between mb-2'>
        <h3 className='text-base font-medium'>
          <Link href={project.url} target='_blank' className='hover:underline'>
            {project.name}
          </Link>
        </h3>
        {project.isGithub && (
          <span className='text-xs px-2 py-1 text-black dark:text-white'>
            GitHub
          </span>
        )}
      </div>

      <div className='flex flex-wrap gap-1.5'>
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className='px-2 py-0.5 text-xs text-black dark:text-white'
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

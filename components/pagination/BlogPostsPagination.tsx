'use client';

import Link from 'next/link';
import { formatDate } from '../../utils/dateFormatter';
import PaginatedItems from './PaginatedItems';

type BlogPost = {
	slug: string;
	metadata: {
		title: string;
		publishedAt: string;
		summary?: string;
	};
};

interface BlogPostsPaginationProps {
	posts: BlogPost[];
	itemsPerPage: number;
	showPagination?: boolean;
}

export default function BlogPostsPagination({
	posts,
	itemsPerPage,
	showPagination = true,
}: BlogPostsPaginationProps) {
	const renderPost = (post: BlogPost, index: number) => (
		<Link
			key={post.slug}
			className='block p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-200'
			href={`/blog/${post.slug}`}
		>
			<div className='flex flex-col space-y-2'>
				<h3 className='text-base font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'>
					{post.metadata.title}
				</h3>

				<div className='flex items-center'>
					<span className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 tabular-nums'>
						{formatDate(post.metadata.publishedAt, false)}
					</span>
				</div>

				{post.metadata.summary && (
					<p className='text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2'>
						{post.metadata.summary}
					</p>
				)}
			</div>
		</Link>
	);

	return (
		<>
			<div className='flex flex-col space-y-4'>
				{showPagination ? (
					<PaginatedItems
						items={posts}
						itemsPerPage={itemsPerPage}
						renderItem={renderPost}
						containerClassName='flex flex-col space-y-4'
					/>
				) : (
					posts
						.slice(0, itemsPerPage)
						.map((post, index) => renderPost(post, index))
				)}
			</div>
		</>
	);
}

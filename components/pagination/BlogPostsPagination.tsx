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
			className='block p-4 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200'
			href={`/blog/${post.slug}`}
		>
			<div className='flex flex-col space-y-2'>
				<h3 className='text-base font-medium'>{post.metadata.title}</h3>

				<div className='flex items-center'>
					<span className='text-xs px-2 py-1 text-black dark:text-white tabular-nums'>
						{formatDate(post.metadata.publishedAt, false)}
					</span>
				</div>

				{post.metadata.summary && (
					<p className='text-sm line-clamp-2'>{post.metadata.summary}</p>
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

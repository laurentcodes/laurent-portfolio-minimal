import { BlogPosts } from 'components/posts';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

export function generateMetadata() {
	return metadata({
		title: 'Blog',
		description: 'Read my blog.',
		url: `${baseUrl}/blog`,
	});
}

export default function Page() {
	return (
		<section>
			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6 mb-8'>
				<h1 className='font-semibold text-2xl mb-8 tracking-tighter text-blue-600 dark:text-blue-400'>
					My Blog
				</h1>

				<BlogPosts limit={100} postsPerPage={3} />
			</div>
		</section>
	);
}

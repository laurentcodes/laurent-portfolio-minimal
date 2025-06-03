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
			<div className='p-6 mb-8'>
				<h1 className='font-semibold text-2xl mb-8 tracking-tighter text-black dark:text-white'>
					My Blog
				</h1>

				<BlogPosts limit={100} postsPerPage={3} />
			</div>
		</section>
	);
}

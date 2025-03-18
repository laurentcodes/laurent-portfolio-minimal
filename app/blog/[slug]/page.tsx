import { notFound } from 'next/navigation';
import { CustomMDX } from 'components/mdx';
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

export async function generateStaticParams() {
	let posts = getBlogPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export function generateMetadata({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		return;
	}

	let { title, publishedAt: publishedTime, summary, image } = post.metadata;

	return metadata({
		title,
		description: summary,
		publishedTime,
		url: `${baseUrl}/blog/${post.slug}`,
		image,
	});
}

export default function Blog({ params }) {
	let post = getBlogPosts().find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<section>
			<script
				type='application/ld+json'
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished: post.metadata.publishedAt,
						dateModified: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `${baseUrl}${post.metadata.image}`
							: `/og?title=${encodeURIComponent(post.metadata.title)}`,
						url: `${baseUrl}/blog/${post.slug}`,
						author: {
							'@type': 'Person',
							name: "Laurent's Portfolio",
						},
					}),
				}}
			/>

			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6 mb-8'>
				<h1 className='font-semibold text-2xl tracking-tighter mb-4 text-blue-600 dark:text-blue-400'>
					{post.metadata.title}
				</h1>

				<div className='flex items-center mb-6'>
					<span className='text-xs px-2 py-1 rounded bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 tabular-nums'>
						{formatDate(post.metadata.publishedAt, true, true)}
					</span>
				</div>

				{post.metadata.summary && (
					<p className='text-sm text-neutral-600 dark:text-neutral-400 border-l-4 border-blue-500 pl-3 py-1 mb-6 italic'>
						{post.metadata.summary}
					</p>
				)}

				<article className='prose prose-blue dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0 prose-pre:overflow-visible max-w-none'>
					<CustomMDX source={post.content} />
				</article>
			</div>
		</section>
	);
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
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

export function generateMetadata({ params }: { params: { slug: string } }) {
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

export default function Blog({ params }: { params: { slug: string } }) {
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
			<Link
				href='/blog'
				className='inline-flex items-center mb-4 text-sm text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400'
			>
				<span aria-hidden='true' className='mr-1'>←</span>
				back
			</Link>

                        <div className='p-6 mb-8'>
                                <h1 className='font-semibold text-2xl tracking-tighter mb-4 text-black dark:text-white'>
                                        {post.metadata.title}
                                </h1>

				<div className='flex items-center mb-6'>
					<span className='text-xs px-2 py-1 text-black dark:text-white tabular-nums'>
						{formatDate(post.metadata.publishedAt, true, true)}
					</span>
				</div>

				{post.metadata.summary && (
					<p className='text-sm text-black dark:text-white pl-3 py-1 mb-6 italic'>
						{post.metadata.summary}
					</p>
				)}

				<article className='prose prose-black dark:prose-invert prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0 prose-pre:overflow-visible max-w-none text-black dark:text-white'>
					<CustomMDX source={post.content} />
				</article>
			</div>
		</section>
	);
}

import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { baseUrl } from 'app/sitemap';

// components
import { CustomMDX } from 'components/mdx';

// utils
import { formatDate, getBlogPosts } from 'app/blog/utils';
import { metadata } from 'utils/metadata';

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const { title, publishedAt: publishedTime, summary, image } = post.metadata;

  return metadata({
    title,
    description: summary,
    publishedTime,
    url: `${baseUrl}/blog/${post.slug}`,
    image,
  });
}

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

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
        className='inline-flex items-center mb-4 text-sm text-black [html.dark_&]:text-white hover:text-gray-600 [html.dark_&]:hover:text-gray-400'
      >
        <span aria-hidden='true' className='mr-1'>
          ←
        </span>
        back
      </Link>

      <div className='p-6 mb-8'>
        <h1 className='font-semibold text-2xl tracking-tighter mb-4 text-black [html.dark_&]:text-white'>
          {post.metadata.title}
        </h1>

        <div className='flex items-center mb-6'>
          <span className='text-xs px-2 py-1 text-black [html.dark_&]:text-white tabular-nums'>
            {formatDate(post.metadata.publishedAt, true, true)}
          </span>
        </div>

        {post.metadata.summary && (
          <p className='text-sm text-black [html.dark_&]:text-white pl-3 py-1 mb-6 italic'>
            {post.metadata.summary}
          </p>
        )}

        <article className='prose prose-black [html.dark_&]:prose-invert prose-pre:p-0 prose-pre:bg-transparent prose-pre:m-0 prose-pre:overflow-visible max-w-none text-black [html.dark_&]:text-white'>
          <CustomMDX source={post.content} />
        </article>
      </div>
    </section>
  );
}

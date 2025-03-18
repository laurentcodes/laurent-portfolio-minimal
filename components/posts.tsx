import { getBlogPosts } from 'app/blog/utils';
import BlogPostsPagination from './pagination/BlogPostsPagination';

interface BlogPostsProps {
	limit?: number;
	showPagination?: boolean;
	postsPerPage?: number;
}

export function BlogPosts({
	limit = 10,
	showPagination = true,
	postsPerPage,
}: BlogPostsProps) {
	// This component runs on the server
	let allBlogs = getBlogPosts();

	// Sort blogs by date (newest first)
	const sortedBlogs = allBlogs.sort((a, b) => {
		if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
			return -1;
		}
		return 1;
	});

	// Determine the effective posts per page value
	const effectivePostsPerPage = postsPerPage || (showPagination ? 3 : limit);

	// Limit the number of posts if specified
	const limitedBlogs = limit ? sortedBlogs.slice(0, limit) : sortedBlogs;

	// Transform the data to include only what's needed by the client component
	const clientSafePosts = limitedBlogs.map((post) => ({
		slug: post.slug,
		metadata: {
			title: post.metadata.title,
			publishedAt: post.metadata.publishedAt,
			summary: post.metadata.summary,
		},
	}));

	return (
		<BlogPostsPagination
			posts={clientSafePosts}
			itemsPerPage={
				showPagination ? effectivePostsPerPage : clientSafePosts.length
			}
			showPagination={showPagination}
		/>
	);
}

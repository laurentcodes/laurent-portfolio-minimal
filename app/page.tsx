import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

import { BlogPosts } from 'app/components/posts';

export function generateMetadata() {
	return metadata({
		title: "Laurent's Portfolio",
		description: 'Welcome to my Portfolio & Blog',
		url: `${baseUrl}`,
	});
}

export default function Page() {
	return (
		<section>
			<h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
				Laurent. 👋
			</h1>
			<p className='mb-4'>
				I'm a Software Developer experienced in JavaScript and TypeScript,
				passionate about creating innovative solutions through code.
			</p>
			<p className='mb-4'>
				From designing user-friendly interfaces to optimizing performance, I
				collaborate with cross-functional teams to deliver high-quality,
				scalable software applications that exceed user expectations.
			</p>
			<p className='mb-4'>
				I am an organized person, passionate about learning and practising new
				things and a problem solver. Gamer. An avid Football, NBA and F1 fan.
			</p>

			<p className='mb-4 font-semibold'>
				Have a look at my Resume{' '}
				<a
					href='https://drive.google.com/file/d/1q4-Y-k3fhsdzbwN31XRDb5UGBEyo45Qp/view?usp=sharing'
					className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					target='_blank'
				>
					here
				</a>
				.
			</p>

			<div className='my-8'>
				<h2 className='mb-4 font-bold text-xl'>Latest Posts</h2>
				<BlogPosts limit={3} />
			</div>
		</section>
	);
}

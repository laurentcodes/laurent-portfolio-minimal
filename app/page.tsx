import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

import { BlogPosts } from 'components/posts';

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
			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6'>
				<h1 className='mb-6 text-2xl font-semibold tracking-tighter text-blue-600 dark:text-blue-400'>
					Laurent. 👋
				</h1>

				<div className='space-y-4 text-neutral-800 dark:text-neutral-200 mb-8'>
					<p>
						I'm a Software Developer specializing in JavaScript and TypeScript,
						passionate about crafting innovative solutions through code.
					</p>

					<p>
						From designing intuitive user interfaces to optimizing performance,
						I collaborate with cross-functional teams to build high-quality,
						scalable applications that enhance user experiences.
					</p>

					<p>
						Organized, curious, and always eager to learn, I thrive on solving
						complex problems. Also, a gamer and an avid fan of football, the
						NBA, and Formula 1.
					</p>

					<p className='font-semibold'>
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
				</div>

				<div className='pt-6 border-t border-neutral-200 dark:border-neutral-800'>
					<h2 className='mb-4 text-lg font-semibold text-blue-600 dark:text-blue-400'>
						Latest Posts
					</h2>
					<BlogPosts limit={2} showPagination={false} />
				</div>
			</div>
		</section>
	);
}

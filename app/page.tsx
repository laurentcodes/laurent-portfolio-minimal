import { BlogPosts } from 'app/components/posts';

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
				An organized person, always comfortable learning new things, always
				practicing, a problem solver. Gamer. Football, NBA and F1 fan.
			</p>

			<p className='mb-4'>
				Have a look at my Resume{' '}
				<a
					href='https://drive.google.com/file/d/1-pUuNuk2vuS0Nkt3GJpfqEs6J9UgaHVE/view?usp=sharing'
					className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					target='_blank'
				>
					here
				</a>
				.
			</p>

			<div className='my-8'>
				<BlogPosts limit={3} />
			</div>
		</section>
	);
}

import Link from 'next/link';

export default function Contact() {
	return (
		<section>
			<h1 className='mb-8 text-2xl font-semibold tracking-tighter'>
				Contact Me
			</h1>
			<p className='mb-4'>
				Have a great idea? Want to say hi? Feel free to contact me at:
			</p>

			<p className='mb-2'>
				<Link
					className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					href='https://x.com/laurent0x'
					target='_blank'
				>
					X
				</Link>
			</p>

			<p className='mb-2'>
				<Link
					className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					href='https://linkedin.com/in/laurentcodes'
					target='_blank'
				>
					LinkedIn
				</Link>
			</p>

			<p className='mb-2'>
				<Link
					className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
					href='https://instagram.com/0xlaurent'
					target='_blank'
				>
					Instagram
				</Link>
			</p>

			<a
				className='text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
				href='mailto:stlaurentcodes@gmail.com'
			>
				stlaurentcodes@gmail.com
			</a>
		</section>
	);
}

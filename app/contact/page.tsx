import Link from 'next/link';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

export function generateMetadata() {
	return metadata({
		title: 'Contact',
		description: 'Contact me.',
		url: `${baseUrl}/contact`,
	});
}

type ContactMethod = {
	name: string;
	url: string;
	isEmail?: boolean;
};

const contactMethods: ContactMethod[] = [
	{
		name: 'X (Twitter)',
		url: 'https://x.com/laurent0x',
	},
	{
		name: 'LinkedIn',
		url: 'https://linkedin.com/in/laurentcodes',
	},
	{
		name: 'Instagram',
		url: 'https://instagram.com/0xlaurent',
	},
	{
		name: 'Email',
		url: 'mailto:stlaurentcodes@gmail.com',
		isEmail: true,
	},
];

export default function Contact() {
	return (
		<section>
			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter'>
					Contact Me
				</h1>

				<p className='mb-5 text-neutral-800 dark:text-neutral-200 text-sm'>
					Have a great idea? Want to say hi? Feel free to contact me through any
					of these channels:
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					{contactMethods.map((method, index) => (
						<div
							key={index}
							className='p-3 rounded-md border border-neutral-200 dark:border-neutral-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200'
						>
							<Link
								className='flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200'
								href={method.url}
								target={method.isEmail ? undefined : '_blank'}
							>
								<span className='font-medium'>{method.name}</span>
								<svg
									className='ml-1.5 w-4 h-4'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M14 5l7 7m0 0l-7 7m7-7H3'
									/>
								</svg>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

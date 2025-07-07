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
		url: 'mailto:saint@laurentcodes.xyz',
		isEmail: true,
	},
];

export default function Contact() {
	return (
		<section>
			<div className='p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter text-black dark:text-white'>
					Contact Me
				</h1>

				<p className='mb-5 text-black dark:text-white text-sm'>
					Have a great idea? Want to say hi? Feel free to contact me through any
					of these channels:
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
					{contactMethods.map((method, index) => (
						<div
							key={index}
							className='p-3 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200'
						>
							<Link
								className='flex items-center hover:underline'
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

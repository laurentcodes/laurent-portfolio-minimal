import Link from 'next/link';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

export function generateMetadata() {
	return metadata({
		title: 'Projects | Laurent',
		description: 'Check out my projects.',
		url: `${baseUrl}/projects`,
	});
}

const projects = [
	{
		name: 'TodoSide',
		tags: ['JavaScript', 'HTML', 'CSS'],
		url: 'https://todoside.netlify.app',
	},
	{
		name: 'Infinix Spinner',
		tags: ['Next.js', 'Tailwind CSS', 'HTML', 'CSS'],
		url: 'https://www.infinix-spinner.com',
	},
	{
		name: 'Natours',
		tags: ['Node.js', 'Express', 'MongoDB', 'Pug'],
		url: 'https://natours-7avo.onrender.com',
	},
	{
		name: 'Currency Converter',
		tags: ['JavaScript', 'HTML', 'CSS'],
		url: 'https://usdtocurrency.netlify.app',
	},
	{
		name: 'Public Sphere NG',
		tags: ['WordPress', 'PHP'],
		url: 'https://publicsphereng.com',
	},
	{
		name: 'Car Value API',
		tags: ['NestJS', 'TypeScript', 'SQLite'],
		url: 'https://github.com/laurentcodes/car-value-estimate',
	},
	{
		name: 'Weather App',
		tags: ['Flutter', 'Dart'],
		url: 'https://github.com/laurentcodes/weather-app',
	},
	{
		name: 'Social Media API',
		tags: ['Express.js', 'MongoDB', 'Amazon S3'],
		url: 'https://github.com/laurentcodes/tech-assessment-social-api',
	},
];

export default function Projects() {
	return (
		<section>
			<h1 className='mb-8 text-2xl font-semibold tracking-tighter'>Projects</h1>

			<div className='my-8'>
				{projects.map((project) => (
					<Link
						className='flex flex-col space-y-1 mb-3'
						href={project.url}
						target='_blank'
					>
						<div className='w-full flex flex-col md:flex-row gap-x-0 md:gap-x-2'>
							<p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
								{project.name}
							</p>

							<p className='text-neutral-600 dark:text-neutral-400 hover:text-blue-400 dark:hover:text-blue-400 tracking-tight'>
								{project.tags.join(', ')}
							</p>
						</div>
					</Link>
				))}
			</div>

			<Link
				className='flex flex-col space-y-1 mb-4'
				href='https://github.com/laurentcodes'
				target='_blank'
			>
				<div className='w-full flex flex-col md:flex-row gap-x-0 md:gap-x-2'>
					<p className='text-neutral-900 dark:text-neutral-100 hover:text-blue-400 dark:hover:text-blue-400 tracking-tight'>
						View all Projects
					</p>
				</div>
			</Link>
		</section>
	);
}

import Link from 'next/link';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';
import ProjectsPagination from '../../components/pagination/ProjectsPagination';

export function generateMetadata() {
	return metadata({
		title: 'Projects',
		description: 'Check out my projects.',
		url: `${baseUrl}/projects`,
	});
}

type Project = {
	name: string;
	tags: string[];
	url: string;
	isGithub?: boolean;
};

const projects: Project[] = [
	{
		name: 'Events API',
		tags: ['Go'],
		url: 'https://github.com/laurentcodes/go-events-api',
		isGithub: true,
	},
	{
		name: 'Form Builder',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
		url: 'https://form-builder-cyan.vercel.app/',
	},
	{
		name: 'Legislative Management System',
		tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		url: 'https://lms-sand-psi.vercel.app',
	},
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
		isGithub: true,
	},
	{
		name: 'Weather App',
		tags: ['Flutter', 'Dart'],
		url: 'https://github.com/laurentcodes/weather-app',
		isGithub: true,
	},
	{
		name: 'Social Media API',
		tags: ['Express.js', 'MongoDB', 'Amazon S3'],
		url: 'https://github.com/laurentcodes/tech-assessment-social-api',
		isGithub: true,
	},
	{
		name: 'Gratitude & Light Candles',
		tags: ['WordPress', 'PHP', 'JavaScript', 'CSS', 'Elementor'],
		url: 'https://gratitudeandlightcandles.ca',
	},
];

export default function Projects() {
	return (
		<section>
			<div className='p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter text-black dark:text-white'>
					Projects
				</h1>

				<p className='mb-5 text-black dark:text-white text-sm'>
					Here are some of my personal and open-source projects:
				</p>

				<ProjectsPagination projects={projects} itemsPerPage={5} />

				<Link
					className='inline-flex items-center text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 text-sm font-medium underline px-2 py-1 transition-colors'
					href='https://github.com/laurentcodes'
					target='_blank'
				>
					View all projects on GitHub
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
		</section>
	);
}

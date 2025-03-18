import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';

export function generateMetadata() {
	return metadata({
		title: 'Skills',
		description: 'Check out my skills.',
		url: `${baseUrl}/skills`,
	});
}

type SkillCategory = {
	title: string;
	skills: string[];
};

const skillCategories: SkillCategory[] = [
	{
		title: 'Mobile Development',
		skills: ['Flutter', 'React Native'],
	},
	{
		title: 'Frontend Development',
		skills: [
			'HTML & CSS',
			'Javascript',
			'Typescript',
			'React.js',
			'Next.js',
			'Astro',
			'Tailwind',
			'Bootstrap',
		],
	},
	{
		title: 'Backend Development',
		skills: ['NestJS', 'Firebase', 'Express.js', 'Node.js', 'TypeScript'],
	},
	{
		title: 'Databases',
		skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
	},
	{
		title: 'CMS',
		skills: ['Wordpress', 'Sanity.io', 'TinaCMS'],
	},
	{
		title: 'Version Control',
		skills: ['Git', 'GitHub', 'Gitlab'],
	},
];

export default function Skills() {
	return (
		<section>
			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter'>Skills</h1>

				<p className='mb-5 text-neutral-800 dark:text-neutral-200 text-sm'>
					Here is an overview of my technical skills and experience:
				</p>

				<div className='flex flex-col gap-5 mb-8'>
					{skillCategories.map((category, index) => (
						<div
							key={index}
							className='p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md transition-all duration-200'
						>
							<h3 className='text-base font-medium text-blue-600 dark:text-blue-400 mb-2 pb-2 border-b border-neutral-200 dark:border-neutral-800'>
								{category.title}
							</h3>

							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, i) => (
									<span
										key={i}
										className='px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

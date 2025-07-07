import Link from 'next/link';
import { baseUrl } from 'app/sitemap';
import { metadata } from 'utils/metadata';
import WorkPagination from '../../components/pagination/WorkPagination';

export function generateMetadata() {
	return metadata({
		title: 'Work',
		description: "Professional projects I've contributed to.",
		url: `${baseUrl}/work`,
	});
}

const workExperience = [
	{
		project: 'Stayfindar',
		company: 'Digicomme',
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		description:
			'A modern accommodation booking platform that connects travelers with unique stays worldwide. Stayfindar streamlines the property discovery and booking process with an intuitive user interface and robust search functionality.',
		role: 'Led the entire project development to deployment, architecting the frontend infrastructure, implementing responsive design patterns, and optimizing user experience across all device types.',
		impact:
			'Created a comprehensive booking platform that simplifies accommodation search and reservation processes, providing travelers with seamless access to diverse lodging options.',
		access: 'Publicly available',
		url: 'https://stayfindar.com',
	},
	{
		project: 'ValuePlus Agency Landing Page',
		company: 'Nitax Tech',
		techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
		description:
			'A modern landing page for ValuePlus Agency, the #1 Mobile affiliate & Ads Network for mVas.',
		role: 'Developed responsive frontend components and optimized site performance.',
		impact:
			"Created a professional web presence that effectively showcases the company's services for both advertisers and affiliates.",
		access: 'Publicly available',
		url: 'https://www.valueplusagency.com/',
	},
	{
		project: 'ValuePlus Agency Dashboard',
		company: 'Nitax Tech',
		techStack: ['Next.js', 'TypeScript', 'Daisy UI', 'Tailwind'],
		description:
			'An internal dashboard for managing campaigns, tracking affiliate performance, and monitoring advertising metrics.',
		role: 'Designed and implemented the UI, integrated backend APIs, and built data visualization components.',
		impact:
			'Streamlined campaign management and provided real-time analytics for better decision making.',
		access: 'Internal platform with login access',
		url: 'https://dashboard.valueplusagency.com/',
	},
	{
		project: 'LearnBeta',
		company: 'Nitax Tech',
		techStack: ['Next.js', 'Tailwind CSS', 'Tanstack Query', 'Mantine'],
		description:
			'An educational platform offering online courses and learning resources for students.',
		role: 'Optimized application performance, fixed critical bugs, and implemented new features to enhance the overall user experience.',
		impact:
			'Enhanced learning accessibility for students through an intuitive digital platform.',
		access: 'Publicly available',
		url: 'https://learnbeta.ng',
	},
	{
		project: 'BetaCare',
		company: 'Nitax Tech',
		techStack: [
			'Next.js',
			'TypeScript',
			'Redux',
			'Tailwind CSS',
			'Material UI',
			'Socket.io',
		],
		description:
			'A healthcare platform providing medical services, consultation, and health information.',
		role: 'Enhanced existing codebase by optimizing performance, troubleshooting critical issues, and implementing new healthcare-focused features.',
		impact:
			'Improved access to healthcare services and information for patients.',
		access: 'Publicly available',
		url: 'https://betacare.ng/',
	},
	{
		project: 'EDOHIS Aggregators Portal',
		company: 'Digicomme',
		techStack: ['React', 'Redux', 'Bootstrap'],
		description:
			'A portal for the Edo State Health Insurance Scheme that allows aggregators to manage enrollments and view analytics.',
		role: 'Improved the existing portal by enhancing frontend performance and resolving third party integration issues.',
		impact:
			'Streamlined the health insurance enrollment process and improved data management for agents.',
		access: 'Platform with login access',
		url: 'https://agent.edhicadmin.org/',
	},
	{
		project: 'EDOHIS Insurance Management Portal',
		company: 'Digicomme',
		techStack: [
			'React',
			'TypeScript',
			'Zustand',
			'Tailwind',
			'Shadcn',
			'Tanstack Query',
		],
		description:
			'A comprehensive management system for the Edo State Health Insurance Scheme that handles enrollments, claims, and benefits management.',
		role: 'Led frontend development, implemented complex workflows, and optimized data handling for large datasets.',
		impact:
			'Digitized the entire insurance management process, reducing processing time and improving accuracy.',
		access: 'Internal system, not publicly accessible.',
	},
	{
		project: 'EDOHIS Benefits Management System',
		company: 'Digicomme',
		techStack: ['React', 'Redux', 'Bootstrap'],
		description:
			'A system for managing healthcare benefits, coverage details, and claims processing for the Edo State Health Insurance Scheme.',
		role: 'Enhanced the existing system by optimizing performance, fixing UI/UX issues, and implementing additional modules to help the users perform their duties better.',
		impact:
			'Improved transparency of healthcare benefits and streamlined the claims processing workflow.',
		access: 'Internal system, not publicly accessible.',
	},
];

export default function Work() {
	return (
		<section>
			<div className='p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter text-black dark:text-white'>
					Work
				</h1>

				<div className='mb-8 prose dark:prose-invert'>
					<p className='text-black dark:text-white'>
						Below is a selection of professional projects I've worked on
						throughout my career. This portfolio includes both projects I've
						built from scratch and existing systems I've taken over to improve
						and maintain. Each project showcases different aspects of my
						technical skills and problem-solving approach.
					</p>
				</div>

				<WorkPagination workExperience={workExperience} itemsPerPage={3} />

				<div className='mt-8 mb-4'>
					<p className='text-black dark:text-white'>
						Additional work details available upon request.
					</p>
				</div>
			</div>
		</section>
	);
}

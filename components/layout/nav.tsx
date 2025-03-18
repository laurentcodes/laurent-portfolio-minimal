'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = {
	'/': {
		name: 'Home',
	},
	'/projects': {
		name: 'Projects',
	},
	'/work': {
		name: 'Work',
	},
	'/skills': {
		name: 'Skills',
	},
	'/contact': {
		name: 'Contact',
	},
	'/blog': {
		name: 'Blog',
	},
};

export function Navbar() {
	const pathname = usePathname();

	return (
		<aside className='mb-8 md:mb-12'>
			<div className='lg:sticky lg:top-20'>
				<nav className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-1.5 md:p-2 overflow-x-auto'>
					<div className='flex flex-row justify-center md:justify-center space-x-0.5 md:space-x-1 min-w-full'>
						{Object.entries(navItems).map(([path, { name }]) => {
							// Check if the current path matches or starts with the blog path
							const isActive =
								pathname === path ||
								(path === '/blog' && pathname.startsWith('/blog'));

							return (
								<Link
									key={path}
									href={path}
									className={`
										transition-all px-2 py-1.5 md:px-3 md:py-2 rounded-md text-xs md:text-sm font-medium text-center whitespace-nowrap flex-1 md:flex-none
										${
											isActive
												? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
												: 'text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-neutral-800 dark:hover:text-neutral-200'
										}
									`}
								>
									{name}
								</Link>
							);
						})}
					</div>
				</nav>
			</div>
		</aside>
	);
}

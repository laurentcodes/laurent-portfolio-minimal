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
				<nav className='p-2 overflow-x-auto'>
					<div className='flex flex-row justify-center space-x-1 min-w-full'>
						{Object.entries(navItems).map(([path, { name }]) => {
							const isActive =
								pathname === path ||
								(path === '/blog' && pathname.startsWith('/blog'));

							if (isActive) {
								return null;
							}

							return (
								<Link
									key={path}
									href={path}
									className={`
										transition-all duration-300 ease-out px-2 py-1.5 md:px-3 md:py-2 text-xs md:text-sm font-medium text-center whitespace-nowrap flex-1 transform hover:scale-105
										text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400
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

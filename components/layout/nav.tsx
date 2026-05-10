'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// components
import { ThemeToggle } from './theme-toggle';

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
                <>
                        {/* mobile navigation */}
                        <aside className='mb-8 md:mb-12 md:hidden'>
                                <div className='lg:sticky lg:top-20'>
                                        <nav className='p-2 overflow-x-auto'>
                                                <div className='flex flex-row items-center justify-center space-x-1 min-w-full'>
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
                                                                                        text-black [html.dark_&]:text-white hover:text-gray-600 [html.dark_&]:hover:text-gray-400
                                                                                `}
                                                                        >
                                                                                {name}
                                                                        </Link>
                                                                );
                                                        })}
                                                        <ThemeToggle className='ml-1' />
                                                </div>
                                        </nav>
                                </div>
                        </aside>

                        {/* desktop navigation */}
                        <nav className='hidden md:flex justify-center mb-12 space-x-4'>
                                {Object.entries(navItems).map(([path, { name }]) => (
                                        <Link
                                                key={path}
                                                href={path}
                                                className={`transition-all duration-300 ease-out px-3 py-2 text-sm font-medium text-center hover:scale-105
                                                        ${
                                                                pathname === path ||
                                                                (path === '/blog' && pathname.startsWith('/blog'))
                                                                        ? 'text-black [html.dark_&]:text-white underline'
                                                                        : 'text-black [html.dark_&]:text-white hover:text-gray-600 [html.dark_&]:hover:text-gray-400'
                                                        }`}
                                        >
                                                {name}
                                        </Link>
                                ))}
                        </nav>
                </>
        );
}

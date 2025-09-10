'use client';

import { useCallback, useEffect, useState } from 'react';

const MoonIcon = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='w-4 h-4'
	>
		<path
			d='M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const SunIcon = () => (
	<svg
		width='20'
		height='20'
		viewBox='0 0 24 24'
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		className='w-4 h-4'
	>
		<path
			d='M12 3v2m0 14v2M5.636 5.636l1.414 1.414M16.95 16.95l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414M16.95 7.05l1.414-1.414M12 8a4 4 0 100 8 4 4 0 000-8z'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
	if (typeof window === 'undefined') return 'light';
	
	const stored = window.localStorage.getItem('theme') as Theme | null;
	if (stored) return stored;
	
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (theme: Theme) => {
	const root = document.documentElement;
	if (theme === 'dark') {
		root.classList.add('dark');
	} else {
		root.classList.remove('dark');
	}
};

export default function ThemeToggle() {
	const [theme, setTheme] = useState<Theme>('light');
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const initialTheme = getInitialTheme();
		setTheme(initialTheme);
		applyTheme(initialTheme);
		setMounted(true);
	}, []);

	const toggle = useCallback(() => {
		const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
		setTheme(nextTheme);
		applyTheme(nextTheme);
		window.localStorage.setItem('theme', nextTheme);
	}, [theme]);

	if (!mounted) {
		return (
			<div className='p-2 w-8 h-8' aria-hidden='true' />
		);
	}

	return (
		<button
			aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
			onClick={toggle}
			className='p-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400'
		>
			{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</button>
	);
}


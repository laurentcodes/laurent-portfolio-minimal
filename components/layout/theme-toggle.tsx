'use client';

import { Moon as moon, Sun as sun } from 'lucide-react';

type Theme = 'light' | 'dark';

const MoonIcon = moon;
const SunIcon = sun;
const cx = (...classes: Array<string | undefined>) =>
	classes.filter(Boolean).join(' ');

function applyTheme(theme: Theme) {
	const root = document.documentElement;

	root.classList.toggle('dark', theme === 'dark');
	root.dataset.theme = theme;
	root.style.colorScheme = theme;
	localStorage.setItem('theme', theme);
}

export function ThemeToggle({ className }: { className?: string }) {
	const handleToggle = () => {
		const isDark = document.documentElement.classList.contains('dark');
		applyTheme(isDark ? 'light' : 'dark');
	};

	return (
		<button
			type='button'
			aria-label='Toggle theme'
			onClick={handleToggle}
			className={cx(
				'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black bg-white text-black shadow-sm transition-colors hover:bg-black hover:text-white [html.dark_&]:border-white [html.dark_&]:bg-black [html.dark_&]:text-white [html.dark_&]:hover:bg-white [html.dark_&]:hover:text-black',
				className
			)}
		>
			<SunIcon
				aria-hidden='true'
				className='hidden h-4 w-4 [html.dark_&]:block'
				strokeWidth={2}
			/>
			<MoonIcon
				aria-hidden='true'
				className='h-4 w-4 [html.dark_&]:hidden'
				strokeWidth={2}
			/>
		</button>
	);
}

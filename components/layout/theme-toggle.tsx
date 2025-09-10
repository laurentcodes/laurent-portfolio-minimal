'use client';

import { useEffect, useState } from 'react';

function MoonIcon() {
    return (
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
}

function SunIcon() {
    return (
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
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = window.localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = stored ? (stored as 'light' | 'dark') : prefersDark ? 'dark' : 'light';
        setTheme(initial);
        if (initial === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setMounted(true);
    }, []);

    const toggle = () => {
        const next = theme === 'dark' ? 'light' : 'dark';
        setTheme(next);
        if (next === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        window.localStorage.setItem('theme', next);
    };

    if (!mounted) return null;

    return (
        <button
            aria-label='Toggle dark mode'
            onClick={toggle}
            className='p-2 transition-colors hover:text-gray-600 dark:hover:text-gray-400'
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );
}


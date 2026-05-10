import './global.css';

import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// components
import { Navbar } from '../components/layout/nav';
import { ThemeToggle } from '../components/layout/theme-toggle';
import Footer from '../components/layout/footer';

const cx = (...classes) => classes.filter(Boolean).join(' ');

const themeScript = `
try {
	var storedTheme = localStorage.getItem('theme');
	var preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	var theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : preferredTheme;
	var root = document.documentElement;

	root.classList.toggle('dark', theme === 'dark');
	root.dataset.theme = theme;
	root.style.colorScheme = theme;
} catch (error) {}
`;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={cx(
				'text-black bg-white',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className='antialiased w-full max-w-2xl mx-auto px-4 mt-8'>
				<Script id='theme-init' strategy='beforeInteractive'>
					{themeScript}
				</Script>

				<ThemeToggle className='fixed right-4 top-4 z-50 hidden md:flex' />
				<main className='flex-auto min-w-0 mt-6 flex flex-col'>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>

			<GoogleAnalytics gaId='G-Q9PT73T357' />
		</html>
	);
}

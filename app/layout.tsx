import './global.css';

import { GoogleAnalytics } from '@next/third-parties/google';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

import { Navbar } from './components/nav';
import Footer from './components/footer';

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={cx(
				'text-black bg-white dark:text-white dark:bg-black',
				GeistSans.variable,
				GeistMono.variable
			)}
		>
			<body className='antialiased max-w-xl mx-4 mt-8 lg:mx-auto'>
				<main className='flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0'>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
			<GoogleAnalytics gaId='G-Q9PT73T357' />
		</html>
	);
}

function ArrowIcon() {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='text-blue-500 dark:text-blue-400'
		>
			<path
				d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
				fill='currentColor'
			/>
		</svg>
	);
}

export default function Footer() {
	return (
		<footer className='mb-6 mt-8 md:mb-8 md:mt-12'>
			<div className='rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm p-4'>
				<ul className='flex justify-center space-x-4 text-xs md:text-sm text-neutral-600 dark:text-neutral-400'>
					<li>
						<a
							className='flex items-center transition-all hover:text-blue-600 dark:hover:text-blue-400'
							rel='noopener noreferrer'
							target='_blank'
							href='/rss'
						>
							<ArrowIcon />
							<span className='ml-2'>RSS</span>
						</a>
					</li>

					<li>
						<a
							className='flex items-center transition-all hover:text-blue-600 dark:hover:text-blue-400'
							rel='noopener noreferrer'
							target='_blank'
							href='https://github.com/laurentcodes'
						>
							<ArrowIcon />
							<span className='ml-2'>GitHub</span>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

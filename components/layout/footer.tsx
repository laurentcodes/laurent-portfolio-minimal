function ArrowIcon() {
	return (
		<svg
			width='12'
			height='12'
			viewBox='0 0 12 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className='text-black dark:text-white'
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
		<footer className='mb-6 mt-8 md:mb-0 md:mt-4'>
			<div className='p-4'>
				<ul className='flex justify-center space-x-4 text-xs md:text-sm text-black dark:text-white'>
					<li>
						<a
							className='flex items-center transition-colors hover:text-gray-600 dark:hover:text-gray-400 px-2 py-1'
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
							className='flex items-center transition-colors hover:text-gray-600 dark:hover:text-gray-400 px-2 py-1'
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

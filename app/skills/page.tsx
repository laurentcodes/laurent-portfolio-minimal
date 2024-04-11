export default function Skills() {
	return (
		<section>
			<p className='mb-5'>Here is an overview of my skills and experience:</p>

			<div className='flex flex-col gap-1 md:gap-3'>
				<p>
					Mobile Development:{' '}
					<span className='text-blue-500'>Flutter, React Native</span>
				</p>

				<p>
					Frontend Development:{' '}
					<span className='text-blue-500'>
						HTML & CSS, Javascript, React.js, Next.js, Astro, Tailwind,
						Bootstrap
					</span>
				</p>

				<p>
					Backend Development:{' '}
					<span className='text-blue-500'>
						NestJS, Firebase, Express.js, Node.js, TypeScript
					</span>
				</p>

				<p>
					Databases:{' '}
					<span className='text-blue-500'>
						MongoDB, MySQL, PostgreSQL, SQLite
					</span>
				</p>

				<p>
					CMS:{' '}
					<span className='text-blue-500'>Wordpress, Sanity.io, TinaCMS</span>
				</p>

				<p>
					Version Control:{' '}
					<span className='text-blue-500'>Git, GitHub, Gitlab</span>
				</p>
			</div>
		</section>
	);
}

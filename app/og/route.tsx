import { ImageResponse } from 'next/og';

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';
	let description =
		url.searchParams.get('description') || "Laurent's Portfolio";

	return new ImageResponse(
		(
			<div className='flex flex-col w-full h-full justify-center bg-black'>
				<div className='flex flex-col w-full py-12 px-4 justify-between'>
					<h1 className='text-4xl font-bold tracking-tight text-white'>
						Laurent.{' '}
						<span role='img' aria-label='wave emoji'>
							👋
						</span>
					</h1>

					<h2 className='text-4xl font-bold tracking-tight text-white'>
						{title}
					</h2>

					<p className='text-lg text-white'>{description}</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

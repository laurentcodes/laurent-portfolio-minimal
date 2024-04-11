import { ImageResponse } from 'next/og';

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full items-center justify-center bg-black'>
				<div tw='flex flex-col w-full py-12 px-4 md:items-center justify-between p-8'>
					<h1 className='text-4xl font-bold tracking-tight text-white font-bold'>
						Laurent. 👋
					</h1>

					<h2 tw='flex flex-col text-4xl font-bold tracking-tight text-left text-white font-bold'>
						{title}
					</h2>

					<img src='../og-memoji.svg' alt="Laurent's Memoji" />
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

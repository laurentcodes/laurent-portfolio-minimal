import { ImageResponse } from 'next/og';

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';

	return new ImageResponse(
		(
			<div className='flex flex-col w-full h-full justify-center bg-black'>
				<div className='flex flex-col w-full py-12 px-4 justify-between p-8'>
					<h1 className='flex flex-col text-4xl font-bold tracking-tight text-left text-white font-bold'>
						Laurent.
					</h1>

					<h2 className='flex flex-col text-4xl font-bold tracking-tight text-left text-white font-bold'>
						{title}
					</h2>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

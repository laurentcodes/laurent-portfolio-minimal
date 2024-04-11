import { ImageResponse } from 'next/og';

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';
	let description =
		url.searchParams.get('description') || "Laurent's Portfolio";

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full justify-center bg-black'>
				<div tw='flex flex-col w-full h-full p-12 justify-between'>
					<h1 tw='text-4xl font-bold tracking-tight text-white'>
						Laurent.
						<span role='img' aria-label='wave' tw='ml-2'>
							👋
						</span>
					</h1>

					<h2 tw='text-4xl font-bold tracking-tight text-white'>{title}</h2>

					<p tw='text-lg text-white'>{description}</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

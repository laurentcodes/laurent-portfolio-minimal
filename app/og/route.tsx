import { ImageResponse } from 'next/og';

import OGMemoji from '../og-memoji.svg';

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';
	let description = url.searchParams.get('description') || '';

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full justify-center bg-black'>
				<div tw='flex flex-col w-full py-12 px-4 justify-between p-8'>
					<h1 tw='flex flex-col text-4xl font-bold tracking-tight text-left text-white font-bold'>
						Laurent.
					</h1>

					<h2 tw='flex flex-col text-4xl font-bold tracking-tight text-left text-white font-bold'>
						{title}
					</h2>

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

import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get('title') || 'Laurent. 👋';
	let description =
		url.searchParams.get('description') || "Laurent's Portfolio";

	return new ImageResponse(
		(
			<div tw='flex flex-col w-full h-full justify-center bg-black'>
				<div tw='flex flex-col w-full h-full px-[200px] justify-center'>
					<h1 tw='text-4xl font-bold tracking-tight text-white mb-12'>
						Laurent.
						<span role='img' aria-label='wave' tw='ml-2'>
							👋
						</span>
					</h1>

					<div tw='flex flex-col'>
						<h2 tw='text-5xl font-bold tracking-tight text-white'>{title}</h2>
						<p tw='text-lg text-white'>{description}</p>
					</div>

					<p tw='text-5xl'>💻</p>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}

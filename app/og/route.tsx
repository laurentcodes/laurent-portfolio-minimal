import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'Laurent.';
  let description =
    url.searchParams.get('description') || "Laurent's Portfolio";
  let imageSrc = `${url.origin}/notion-face.png`;

  return new ImageResponse(
    <div tw='flex flex-col w-full h-full justify-center bg-black'>
      <div tw='flex flex-col w-full h-full px-[200px] justify-center'>
        <div tw='flex items-center mb-12'>
          <img
            src={imageSrc}
            alt='Laurent'
            width={96}
            height={96}
            tw='rounded-full'
          />

          <h1 tw='text-4xl font-bold tracking-tight text-white ml-6'>
            Laurent.
          </h1>
        </div>

        <div tw='flex flex-col'>
          <h2 tw='text-5xl font-bold tracking-tight text-white'>{title}</h2>
          <p tw='text-lg text-white'>{description}</p>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}

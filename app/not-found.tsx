export default function NotFound() {
	return (
		<section>
			<div className='rounded-lg border border-neutral-200 [html.dark_&]:border-neutral-800 bg-white [html.dark_&]:bg-neutral-900 shadow-sm p-6'>
				<h1 className='mb-4 text-2xl font-semibold tracking-tighter'>
					404 - Page Not Found
				</h1>
				<p className='text-neutral-800 [html.dark_&]:text-neutral-200 mb-4'>
					The page you are looking for does not exist.
				</p>
			</div>
		</section>
	);
}

import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';
import React from 'react';

function Table({ data }) {
	let headers = data.headers.map((header, index) => (
		<th key={index}>{header}</th>
	));
	let rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	));

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}

function CustomLink(props) {
	let href = props.href;

	if (href.startsWith('/')) {
		return (
			<Link href={href} {...props}>
				{props.children}
			</Link>
		);
	}

	if (href.startsWith('#')) {
		return <a {...props} />;
	}

	return <a target='_blank' rel='noopener noreferrer' {...props} />;
}

function RoundedImage(props) {
	return <Image alt={props.alt} className='rounded-lg' {...props} />;
}

function Code({ children, className, ...props }) {
	// Check if this is a code block (className will contain the language)
	const isCodeBlock = className?.includes('language-');

	// Extract language name for display if this is a code block
	let language = '';
	if (isCodeBlock && className) {
		language = className.replace('language-', '');
	}

	let codeHTML = highlight(children);

	if (isCodeBlock) {
		return (
			<div className='relative my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 shadow-sm'>
				{language && (
					<div className='absolute right-0 top-0 px-4 py-1 rounded-bl-lg text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-l border-b border-gray-200 dark:border-gray-700'>
						{language}
					</div>
				)}
				<div className='px-4 pt-4 pb-2 flex items-center space-x-2'>
					<div className='w-3 h-3 rounded-full bg-red-500'></div>
					<div className='w-3 h-3 rounded-full bg-yellow-500'></div>
					<div className='w-3 h-3 rounded-full bg-green-500'></div>
				</div>

				<pre
					className='overflow-x-auto p-4 pt-2 text-sm border-t border-gray-200 dark:border-gray-800 dark:hidden'
					style={{
						backgroundImage:
							"linear-gradient(to bottom, rgba(249, 250, 251, 1) 0%, rgba(249, 250, 251, 0.8) 100%), url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.025' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E\")",
						backgroundSize: '30px 30px',
					}}
				>
					<code
						dangerouslySetInnerHTML={{ __html: codeHTML }}
						className='font-mono text-gray-800 block pl-4 border-l-4 border-blue-500/30 whitespace-pre'
						{...props}
					/>
				</pre>

				<pre
					className='overflow-x-auto p-4 pt-2 text-sm border-t border-gray-200 dark:border-gray-800 hidden dark:block'
					style={{
						backgroundImage:
							"linear-gradient(to bottom, rgba(17, 24, 39, 1) 0%, rgba(17, 24, 39, 0.8) 100%), url(\"data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.025' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 5v1H0V0h5z'/%3E%3C/g%3E%3C/svg%3E\")",
						backgroundSize: '30px 30px',
					}}
				>
					<code
						dangerouslySetInnerHTML={{ __html: codeHTML }}
						className='font-mono dark:text-gray-200 block pl-4 border-l-4 border-blue-400/30 whitespace-pre'
						{...props}
					/>
				</pre>
			</div>
		);
	}

	// If it's inline code
	return (
		<code
			dangerouslySetInnerHTML={{ __html: codeHTML }}
			className='font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-gray-800 dark:text-gray-200'
			{...props}
		/>
	);
}

function slugify(str) {
	return str
		.toString()
		.toLowerCase()
		.trim() // Remove whitespace from both ends of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-and-') // Replace & with 'and'
		.replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
		.replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level) {
	const Heading = ({ children }) => {
		let slug = slugify(children);
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement('a', {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: 'anchor',
				}),
			],
			children
		);
	};

	Heading.displayName = `Heading${level}`;

	return Heading;
}

let components = {
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Image: RoundedImage,
	a: CustomLink,
	code: Code,
	pre: (props) => <div {...props} />, // This allows our Code component to handle the styling
	Table,
};

export function CustomMDX(props) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}

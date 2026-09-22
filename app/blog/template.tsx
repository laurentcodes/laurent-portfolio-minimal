'use client';

import { motion, useReducedMotion } from 'framer-motion';

export default function BlogTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				duration: shouldReduceMotion ? 0.1 : 0.25,
				ease: [0.22, 1, 0.36, 1],
			}}
		>
			{children}
		</motion.div>
	);
}

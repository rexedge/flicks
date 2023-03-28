import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
	image?: string;
	header?: string;
	children?: React.ReactNode;
	footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ image, header, children, footer }) => {
	return (
		<motion.div
			className='bg-primary-light dark:bg-primary text-primary shadow-md w-full my-3 overflow-hidden rounded-xl'
			whileHover={{ scale: 1.05 }}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			{image && (
				<div className='relative h-72 w-full'>
					<Image
						src={image}
						alt='card'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			)}
			<div className='text-center'>
				{header && (
					<h2 className='p-2 text-lg font-bold'>{header}</h2>
				)}
				{children}
				{footer && <div className='p-2 mt-4 text-sm'>{footer}</div>}
			</div>
		</motion.div>
	);
};

export default Card;

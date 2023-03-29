import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from './button';

interface ImageObject {
	id: string;
	src: string;
	alt: string;
	title?: string;
	description?: string;
	buttonText?: string;
}

interface Props {
	images: ImageObject[];
	nav?: boolean;
	pagination?: boolean;
}

const slideVariants = {
	enter: (direction: number) => {
		return {
			x: direction > 0 ? '100%' : '-100%',
			opacity: 0,
		};
	},
	center: {
		x: 0,
		opacity: 1,
	},
	exit: (direction: number) => {
		return {
			x: direction > 0 ? '-100%' : '100%',
			opacity: 0,
		};
	},
};

const Carousel = ({ images, nav = false, pagination = true }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDirection(1);
			setCurrentIndex((currentIndex + 1) % images.length);
		}, 5000);

		return () => clearTimeout(timeoutId);
	}, [currentIndex, images.length]);

	const handleNext = () => {
		setDirection(1);
		setCurrentIndex((currentIndex + 1) % images.length);
	};
	const handlePrev = () => {
		setDirection(-1);
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const paginationItems = images.map((_, index) => (
		<div
			key={index}
			className={`h-1 md:h-2 lg:h3 w-5 md:w-8 lg:w-12 mx-1 z-20 cursor-pointer rounded-full transition duration-300 ${
				index === currentIndex
					? 'bg-primary dark:bg-primary-dark'
					: 'bg-primary-dark dark:bg-primary-light'
			}`}
			onClick={() => {
				setDirection(index > currentIndex ? 1 : -1);
				setCurrentIndex(index);
			}}
		></div>
	));

	return (
		<div className='relative md:aspect-desktop aspect-mobile'>
			{/* overlay */}
			{/* <div className='absolute z-10 left-0 right-0 top-0 bottom-0 bg-primary-dark opacity-40'></div> */}
			{nav && (
				<>
					<div
						className='absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-full text-primary-light dark:text-primary-dark transition duration-300 bg-primary-dark dark:bg-primary-light bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handlePrev}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M15 18l-6-6 6-6' />
						</svg>
					</div>
					<div
						className='absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-full text-primary-light dark:text-primary-dark transition duration-300 bg-primary-dark dark:bg-primary-light bg-opacity-70 hover:bg-opacity-90 cursor-pointer'
						onClick={handleNext}
					>
						<svg
							className='w-6 h-6'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<path d='M9 18l6-6-6-6' />
						</svg>
					</div>
				</>
			)}
			{pagination && (
				<div className='flex pb-4 md:pb-10 justify-center absolute bottom-0 left-0 right-0'>
					{paginationItems}
				</div>
			)}

			<motion.div
				className='relative w-full h-full'
				custom={direction}
				key={currentIndex}
				variants={slideVariants}
				initial='enter'
				animate='center'
				exit='exit'
				transition={{ duration: 0.4 }}
			>
				<Image
					src={images[currentIndex].src}
					alt={images[currentIndex].alt}
					className='w-full object-cover'
					style={{ height: '100%', maxWidth: '100%' }}
					height={900}
					width={1600}
				/>
				<div className='absolute flex items-center justify-center bottom-0 top-0 right-0 left-0 z-30 p-4 text-primary-light'>
					<div className='text-center'>
						{images[currentIndex].title && (
							<h1 className='font-bold text-3xl md:text-5xl lg:text-7xl mb-3 md:mb-6 lg:mb-9'>
								{images[currentIndex].title}
							</h1>
						)}
						{images[currentIndex].description && (
							<p className='mb-3 md:mb-6 lg:mb-9 text-xl md:text-2xl lg:text-4xl'>
								{images[currentIndex].description}
							</p>
						)}
						{images[currentIndex].buttonText && (
							<Button>
								{images[currentIndex].description}
							</Button>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default Carousel;

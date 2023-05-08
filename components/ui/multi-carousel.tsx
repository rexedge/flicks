import { ReactNode, useEffect, useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

interface MultiCarouselProps {
	spaceBetween?: number;
	slideNumber?: number;
	pagination?: boolean;
	navigation?: boolean;
	loop?: boolean;
	autoPlay?: number;
	children?: ReactNode;
}

const MultiCarousel = ({
	spaceBetween = 1,
	slideNumber = 1,
	pagination = true,
	navigation = true,
	loop = true,
	autoPlay = 3000,
	children,
}: MultiCarouselProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

	const slideCount = Array.isArray(children)
		? Math.ceil(children.length / slideNumber)
		: 0;
	const isLastSlide = currentIndex === slideCount - 1;
	const isFirstSlide = currentIndex === 0;

	const slideWidth = `calc((100% - ${spaceBetween}px * ${
		slideNumber - 1
	}) / ${slideNumber})`;

	const handleSlideClick = (index: number) => {
		setCurrentIndex(index);
	};

	const handlePrevClick = () => {
		setCurrentIndex(currentIndex - 1);
	};

	const handleNextClick = () => {
		setCurrentIndex(currentIndex + 1);
	};

	useEffect(() => {
		if (autoPlay && slideCount > 1) {
			const id = setInterval(() => {
				setCurrentIndex((prevIndex) =>
					isLastSlide ? 0 : prevIndex + 1
				);
			}, autoPlay * 1000);
			setIntervalId(id);
		}

		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	}, [autoPlay, slideCount, isLastSlide, intervalId]);

	return (
		<div className='relative'>
			<div className='flex overflow-hidden'>
				<motion.div
					className='flex'
					style={{
						transform: `translateX(-${
							currentIndex * (100 / slideCount)
						}%)`,
						transition: 'transform 0.5s ease',
					}}
				>
					{React.Children.map(children, (child, index) => (
						<div
							key={index}
							className={`w-${slideWidth} mr-${spaceBetween}`}
							onClick={() => handleSlideClick(index)}
						>
							{child}
						</div>
					))}
				</motion.div>
			</div>

			{pagination && (
				<div className='flex mt-4 justify-center'>
					{[...Array(slideCount)].map((_, index) => (
						<button
							key={index}
							className={`${
								index === currentIndex
									? 'bg-primary-light'
									: 'bg-primary-dark'
							} rounded-full h-3 w-10 mx-1`}
							onClick={() => handleSlideClick(index)}
						></button>
					))}
				</div>
			)}

			{navigation && (
				<>
					<div className='absolute top-1/2 left-0 transform -translate-y-2/4 -translate-x-2/4 flex'>
						{!isFirstSlide && (
							<button
								className='bg-primary-dark text-primary-light rounded-full p-2 mr-4'
								onClick={handlePrevClick}
							>
								{'<'}
							</button>
						)}
					</div>
					<div className='absolute top-1/2 right-0 transform -translate-y-2/4 -translate-x-2/4 flex'>
						{!isLastSlide && (
							<button
								className='bg-primary-dark text-primary-light rounded-full p-2 mr-4'
								onClick={handleNextClick}
							>
								{'>'}
							</button>
						)}
					</div>
				</>
			)}
		</div>
	);
};

export default MultiCarousel;

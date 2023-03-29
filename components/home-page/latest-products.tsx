import React from 'react';
import Container from '../layout/container';
import Section from '../layout/section';
import SwiperSlider from '../ui/swiper-slider';

export default function LatestProducts() {
	return (
		<Section className=' bg-primary-light px-5'>
			<Container
				maxWidth='max-w-7xl'
				className='my-4 md:my-8'
			>
				<h1 className='text-2xl md:text-3xl mb-3 md:mb-6 font-bold text-center'>
					Latest Products
				</h1>
				<SwiperSlider />
			</Container>
		</Section>
	);
}

import React from 'react';
import Container from '../layout/container';
import Section from '../layout/section';
import SwiperSlider from '../ui/swiper-slider';

export default function LatestProducts() {
	return (
		<Section color='primary'>
			<Container
				maxWidth='max-w-7xl'
				className='my-8'
			>
				<h1 className='text-2xl font-bold text-center text-primary-light'>
					Latest Products
				</h1>
				<SwiperSlider />
			</Container>
		</Section>
	);
}

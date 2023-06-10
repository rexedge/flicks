import { CAROUSEL_IMAGES } from '@/utils/data';
import React, { Fragment } from 'react';
import Carousel from '../ui/carousel';
import LoadingIndicator from '../ui/loading-indicator';
import About from './about';
import LatestProducts from './latest-products';

export default function Homepage() {
	return (
		<Fragment>
			<LoadingIndicator />
			<Carousel
				images={CAROUSEL_IMAGES}
				nav={true}
			/>
			<LatestProducts />
			<About />
		</Fragment>
	);
}

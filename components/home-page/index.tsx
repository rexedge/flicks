import { CAROUSEL_IMAGES } from '@/utils/data';
import React, { Fragment } from 'react';
import Carousel from '../ui/carousel';
import About from './about';
import LatestProducts from './latest-products';

export default function Homepage() {
	return (
		<Fragment>
			<Carousel images={CAROUSEL_IMAGES} />
			<LatestProducts />
			<About />
		</Fragment>
	);
}

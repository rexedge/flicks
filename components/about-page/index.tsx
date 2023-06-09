import React, { Fragment } from 'react';
import PageIntro from '../ui/page-intro';
import Breadcrumb from '../ui/breadcrumb';
import AboutFlick from './about-flick';
import LoadingIndicator from '../ui/loading-indicator';

export default function AboutPage() {
	return (
		<Fragment>
			<LoadingIndicator />
			<PageIntro
				src='/images/background/3.webp'
				alt=''
				width={1920}
				height={400}
			/>
			<Breadcrumb
				activeText='About'
				divider='/'
				prevPage='Home'
				prevPageLink='/'
			/>
			<AboutFlick />
		</Fragment>
	);
}

import React, { Fragment } from 'react';
import PageIntro from '../ui/page-intro';
import Breadcrumb from '../ui/breadcrumb';

export default function ProductPage() {
	return (
		<Fragment>
			<PageIntro
				src='/images/background/3.webp'
				alt=''
				width={1920}
				height={400}
			/>
			<Breadcrumb
				activeText='Products'
				divider='/'
				prevPage='Home'
				prevPageLink='/'
			/>
		</Fragment>
	);
}

import React, { Fragment } from 'react';
import PageIntro from '../ui/page-intro';
import Breadcrumb from '../ui/breadcrumb';
import LoadingIndicator from '../ui/loading-indicator';
import Head from 'next/head';
import ProductBody from './product-body';

export default function ProductList() {
	return (
		<Fragment>
			<Head>
				<title>Product List | Flick</title>
			</Head>
			<LoadingIndicator />
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
			<ProductBody />
		</Fragment>
	);
}

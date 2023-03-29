import React from 'react';
import Card from '../layout/card';
import Section from '../layout/section';

export default function About() {
	return (
		<Section>
			<div className='flex flex-col md:flex-row gap-10 justify-between w-full max-w-7xl py-10 px-5'>
				<Card image='/images/slides/img01.jpg'></Card>
				<div className='text-justify text-xl'>
					<p className='mb-3'>
						FLICK is a first-class phone accessories brand. We
						concentrate on providing quality products that
						would stand out in the Nigerian Market.{' '}
					</p>
					<p className='mb-3'>
						We have provided thousands of products in the past
						four years. We believe in the excellence of our
						products, and we are certain that we will dominate
						the market because of the quality and
						affordability of our products.
					</p>
					<p className='mb-3'>
						We are confident that you will stick with us after
						one try. We are driven to ensuring that we do our
						part in changing the mindset that Nigerian
						products are ‘fake’.
					</p>
				</div>
			</div>
		</Section>
	);
}

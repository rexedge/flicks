import Image from 'next/image';
import React, { Fragment } from 'react';
import Card from '../layout/card';
import Container from '../layout/container';
import Section from '../layout/section';

export default function AboutFlick() {
	return (
		<Fragment>
			<Section>
				<Container maxWidth='max-w-7xl'>
					<div className='flex-col py-10'>
						<div className='w-full text-center'>
							<div className='text-2xl font-bold md:text-4xl mb-5'>
								ABOUT FLICK
							</div>
						</div>
						<div className='md:flex flex-row'>
							<div className='text-xl text-justify px-5 md:w-1/2 w-full mb-5'>
								FLICK is a first-class phone accessories
								brand. We concentrate on providing
								quality products that would stand out in
								the Nigerian Market. We have provided
								thousands of products in the past four
								years. We believe in the excellence of
								our products, and we are certain that we
								will dominate the market because of the
								quality and affordability of our
								products.
							</div>
							<div className='text-xl text-justify px-5 md:w-1/2 w-full mb-5'>
								We are confident that you will stick
								with us after one try. We are driven to
								ensuring that we do our part in changing
								the mindset that Nigerian products are
								‘fake’. We deliver anywhere in Nigeria,
								and are located in Lagos, Abuja, Port
								Harcourt, Benin, Enugu, and other states
								across Nigeria.
							</div>
						</div>
						<div className='text-center font-bold px-5 mb-10 uppercase'>
							Think FLICK
							<br />
							Think: Durable, Classy, Affordable, Speedy,
							Innovative, Trustworthy.
						</div>
						<div className='col-span-12 text-center mb-5'>
							<div className='text-2xl font-bold md:text-4xl'>
								MEET OUR CEO
							</div>
						</div>
						<div className='md:flex flex-row'>
							<div className='text-xl text-justify px-5 md:w-1/2 mx-auto w-full mb-5'>
								<p className='pb-10'>
									My name is Obiajuru Chinedu, I have
									always wanted to own a business
									that solves a particular problem,
									or helps people find what they
									need.
								</p>
								<p className='pb-10'>
									The name Flick came to me when I
									was praying about a brand name. It
									connotes something fast, quick, a
									propeller, it literally means to
									spark something quickly, which is
									in line with what chargers and
									other accessories do.
								</p>
								<p className='pb-10'>
									I believe that is a fitting name
									considering that our products are
									strong, fast and give you results
									quick.
								</p>
								<p className='pb-10'>
									In the few years we have been
									operating, Flick has over 50 staff
									ready to meet your phone accessory
									needs.
								</p>
							</div>
							{/* <div className='text-xl text-justify px-5 md:w-1/2 w-full mb-5'>
								<Card>
									<Image
										src='/images/about/ceo.jpg'
										height={500}
										width={500}
										alt='CEO'
										style={{
											height: '100%',
											width: '100%',
										}}
									/>
								</Card>
							</div> */}
						</div>
					</div>
				</Container>
			</Section>
		</Fragment>
	);
}

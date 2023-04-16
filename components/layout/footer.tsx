import {
	Facebook,
	LinkedIn,
	LocationOn,
	Mail,
	Phone,
	Pinterest,
	Twitter,
	YouTube,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Container from './container';
import Section from './section';

interface FooterProps {
	fixed?: boolean;
}

export default function Footer({ fixed = false }: FooterProps): JSX.Element {
	const isFixed = fixed ? 'fixed bottom-0 left-0 right-0' : '';
	return (
		<Section className={`bg-primary-light pt-10 ${isFixed}`}>
			<div className='mx-auto'>
				<Container maxWidth='px-5 max-w-7xl'>
					<div>
						<div className='grid grid-cols-12 text-primary-dark'>
							<div className='col-span-12 lg:col-span-4 mb-8'>
								<div className='grid'>
									<Image
										src='/logo.png'
										className='foot-logo'
										alt='footer logo'
										height={70}
										width={70}
									/>

									<div className='mt-5'>
										<p className='mb-3 gap-10'>
											FLICK is a first-class
											phone accessories brand.
											We concentrate on
											providing quality
											products that would stand
											out in the Nigerian
											Market.
										</p>

										<p className='mb-3 flex flex-row gap-10'>
											<Phone />
											<span>
												+ 234 806 0972 989
												<br />+ 234 803 3481
												446
												<br />+ 234 703 665
												2105
											</span>
										</p>

										<p className='mb-3 flex flex-row gap-10'>
											<Mail />
											<span>
												info@flickaccessories.ng
												<br />
												flicksmartaccessories@gmail.com
											</span>
										</p>

										<p className='mb-3 flex flex-row gap-10'>
											<LocationOn />
											<span>
												Shop 1 & 2, VIP
												Plaza, Chinese Line,
												Alaba International
												Market, Ojo, Lagos
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className='col-span-6 lg:col-span-2 mb-8'>
								<div className=''>
									<h3 className='text-xl font-bold '>
										PRODUCTS
									</h3>
									<ul className='mt-5'>
										<li className='mb-3'>
											<a href='#'>
												Power Banks
											</a>
										</li>
										<li className='mb-3'>
											<a href='#'>Chargers</a>
										</li>
										<li className='mb-3'>
											<a href='#'>
												Ear Phones
											</a>
										</li>
										<li className='mb-3'>
											<a href='#'>
												Car Charger
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className='col-span-6 lg:col-span-2 mb-8'>
								<div className=''>
									<h3 className='text-xl font-bold '>
										USEFUL LINKS
									</h3>
									<ul className='mt-5'>
										<li className='mb-3'>
											<a href='#'>Home</a>
										</li>
										<li className='mb-3'>
											<a href='#'>About</a>
										</li>
										<li className='mb-3'>
											<a href='#'>Contact</a>
										</li>
										<li className='mb-3'>
											Products
										</li>
									</ul>
								</div>
							</div>

							<div className='col-span-12 lg:col-span-4 mb-8'>
								<div className=''>
									<h3 className='text-xl font-bold '>
										Subscribe Newsletter
									</h3>
									<p className='mt-5 '>
										By subscribing to our mailing
										list you will always be
										updated
									</p>
									<form className='w-full flex flex-wrap mt-5 rounded overflow-hidden'>
										<input
											className='flex-1 px-2 bg-primary placeholder:text-primary-light py-2 font-medium bg-'
											type='text'
											name='email'
											placeholder='Enter Your Email'
										/>

										<button
											className='flex-2 px-3 bg-primary-dark text-primary-light font-semibold'
											type='submit'
										>
											Subscribe
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</Container>

				<div
					className='w-screen border-t mt-4 py-10 text-center text-primary-light bg-primary-dark bg-opacity-80
				 '
				>
					<p className='mb-5'>
						Copyright @ 2023{' '}
						<Link
							href='#'
							className='font-bold'
						>
							ISCE
						</Link>{' '}
						all right reserved.
					</p>
					<ul className='flex flex-row justify-center gap-3'>
						<li className=''>
							<Link href='#'>
								<Facebook />
							</Link>
						</li>
						<li className=''>
							<Link href='#'>
								<Twitter />
							</Link>
						</li>
						<li className=''>
							<Link href='#'>
								<Pinterest />
							</Link>
						</li>
						<li className=''>
							<Link href='#'>
								<LinkedIn />
							</Link>
						</li>
						<li className=''>
							<Link href='#'>
								<YouTube />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</Section>
	);
}

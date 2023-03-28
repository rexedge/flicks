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

export default function Footer() {
	return (
		<Section color='bg-primary-light'>
			<div className='mx-auto'>
				<div className='py-10'>
					<Container maxWidth='max-w-7xl'>
						<div className='grid grid-cols-12 text-primary-dark'>
							<div className='col-span-12 lg:col-span-4'>
								<div className='flex flex-col justify-center'>
									<Image
										src='/logo.png'
										className='foot-logo'
										alt='footer logo'
										height={70}
										width={70}
									/>

									<div className='mt-5'>
										<p className='mb-3 flex flex-row gap-10'>
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
												+ 234 812 345 678
											</span>
										</p>

										<p className='mb-3 flex flex-row gap-10'>
											<Mail />
											<span>
												info@flick.com
											</span>
										</p>

										<p className='mb-3 flex flex-row gap-10'>
											<LocationOn />
											<span>
												Marwa, Lekki, Lagos,
												Nigeria
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className='col-spam-6 lg:col-span-2'>
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

							<div className='col-spam-6 lg:col-span-2'>
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

							<div className='col-span-12 lg:col-span-4'>
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
											className='flex-1 px-2 bg-primary  placeholder:text-primary-light py-2 font-medium bg-'
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
					</Container>
				</div>

				<div
					className='border-t mt-4 py-10 text-center text-primary-dark dark:text-primary
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

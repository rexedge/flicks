import { LocationOn, Mail, Phone, Send } from '@mui/icons-material';
import Container from '../layout/container';
import Section from '../layout/section';

export default function ContactForm() {
	return (
		<Section className=''>
			<Container maxWidth='max-w-7xl w-full py-10 px-5'>
				<div className='w-full grid grid-cols-3 gap-10 mb-5'>
					<div className='md:col-span-1 col-span-3'>
						<div className='border-b-primary text-2xl font-bold'>
							Contact Infomation
						</div>
						<div className='flex mt-5 gap-x-3'>
							<LocationOn sx={{ fontSize: 40 }} />
							<div className=''>
								<div className='font-bold'>
									Head Office
								</div>
								<div className=''>
									Polystar Building, Marwa Lekki,
									<br />
									Lagos, Nigeria
								</div>
							</div>
						</div>
						<div className='flex mt-5 gap-x-3'>
							<Phone sx={{ fontSize: 40 }} />
							<div className=''>
								<div className='font-bold'>Phone</div>
								<div className=''>
									+234 812 345 678
									<br />
									+234 812 345 678
								</div>
							</div>
						</div>
						<div className='flex mt-5 gap-x-3'>
							<Mail sx={{ fontSize: 40 }} />
							<div className=''>
								<div className='font-bold'>
									Head Office
								</div>
								<div className=''>
									info@flick.com
									<br />
									www.flick.com
								</div>
							</div>
						</div>
					</div>
					<div className='md:col-span-2 col-span-3'>
						<div className='border-b-primary text-2xl font-bold'>
							Contact Us
						</div>
						<form className=''>
							<div className=''>
								<div className='mt-5 grid grid-cols-2 gap-5'>
									<div className='col-span-2 md:col-span-1'>
										<label
											htmlFor='first-name'
											className='text-lg uppercase font-semibold'
										>
											Your Name
										</label>
										<div className='mt-2'>
											<input
												type='text'
												name=''
												placeholder='Name'
												className='w-full bg-primary-light border-spacing-1 rounded-lg p-2'
											/>
										</div>
									</div>

									<div className='col-span-2 md:col-span-1'>
										<label
											htmlFor='email'
											className='text-lg uppercase font-semibold'
										>
											Email Address
										</label>
										<div className='mt-2'>
											<input
												id='email'
												name='email'
												type='email'
												placeholder='Enter Email'
												autoComplete='email'
												className='w-full bg-primary-light border-spacing-1 rounded-lg p-2'
											/>
										</div>
									</div>
								</div>
								<div className='mt-5'>
									<label
										htmlFor='subject'
										className='text-lg uppercase font-semibold'
									>
										Subject
									</label>
									<div className='mt-2'>
										<input
											id='subject'
											name='subject'
											type='subject'
											placeholder='Enter subject'
											autoComplete='subject'
											className='w-full bg-primary-light border-spacing-1 rounded-lg p-2'
										/>
									</div>
								</div>
								<div className='mt-5'>
									<label
										htmlFor='message'
										className='text-lg uppercase font-semibold'
									>
										Message
									</label>
									<div className='mt-2'>
										<textarea
											id='message'
											name='message'
											rows={3}
											className='w-full bg-primary-light border-spacing-1 rounded-lg p-2'
											placeholder='Write a few sentences.'
											defaultValue={''}
										/>
									</div>
								</div>
							</div>

							<div className='mt-6 flex items-center justify-start gap-x-6'>
								<button
									type='submit'
									className='rounded-md bg-primary-dark px-10 py-2 uppercase font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
								>
									<Send /> Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</Container>
		</Section>
	);
}

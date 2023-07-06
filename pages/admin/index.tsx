import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/layout/container';
import Section from '@/components/layout/section';
import Navbar from '@/components/layout/navigation-bar';
import Footer from '@/components/layout/footer';
import Head from 'next/head';
// import { signIn } from 'next-auth/client';

export default function AdminPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	// Perform authentication
	// 	const result = await signIn('credentials', {
	// 		redirect: false,
	// 		username,
	// 		password,
	// 	});

	// 	if (result.error) {
	// 		setError(result.error);
	// 	} else {
	// 		router.push('/admin/dashboard'); // Redirect to admin dashboard
	// 	}
	// };

	return (
		<Fragment>
			<Head>
				<title>Admin - Sign In</title>
			</Head>
			<Navbar />
			<Section className='px-5 min-h-[calc(100vh-400px)]'>
				<Container
					maxWidth='max-w-7xl'
					className='my-4 md:my-8'
				>
					<div className='bg-primary-light rounded-lg p-5 border border-primary'>
						<h1 className='mb-12 font-bold text-2xl uppercase text-center'>
							Login
						</h1>
						{error && <p>{error}</p>}
						<form
							className='flex flex-col gap-12'
							// onSubmit={handleSubmit}
						>
							<div className='flex flex-col gap-5'>
								<label className='w-full'>
									<div className=''>Username:</div>
									<input
										className='min-w-[300px] p-2 rounded-lg border border-primary focus:border-primary-dark focus:outline-primary-dark'
										type='text'
										value={username}
										onChange={(e) =>
											setUsername(
												e.target.value
											)
										}
									/>
								</label>
								<label>
									<div className=''>Password:</div>
									<input
										className='min-w-[300px] p-2 rounded-lg border border-primary focus:border-primary-dark focus:outline-primary-dark'
										type='password'
										value={password}
										onChange={(e) =>
											setPassword(
												e.target.value
											)
										}
									/>
								</label>
							</div>
							<button
								className='px-5 py-2 bg-primary-dark text-primary-light uppercase rounded-lg hover:scale-105'
								type='submit'
								onClick={(e) => {
									e.preventDefault();
									router.push('/admin/dashboard'); // Redirect to admin dashboard
								}}
							>
								Login
							</button>
						</form>
					</div>
				</Container>
			</Section>
			<Footer />
		</Fragment>
	);
}

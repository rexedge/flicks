import AboutPage from '@/components/about-page';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>About - Flick Electronics</title>
				<meta
					name='description'
					content='About Page'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/logo.png'
				/>
			</Head>
			<Navbar />
			<main>
				<AboutPage />
			</main>
			<Footer />
		</>
	);
}

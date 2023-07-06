import ContactPage from '@/components/contact-page';
import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import Head from 'next/head';

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact - Flick Electronics</title>
				<meta
					name='description'
					content='Contact Page'
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
				<ContactPage />
			</main>
			<Footer />
		</>
	);
}

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import ProductPage from '@/components/product-page';
import Head from 'next/head';

export default function About() {
	return (
		<>
			<Head>
				<title>Product - Flick Electronics</title>
				<meta
					name='description'
					content='Product Page'
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
				<ProductPage />
			</main>
			<Footer />
		</>
	);
}

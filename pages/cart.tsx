import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import CartItemListComponent from '@/components/products-page/cart-item-list';
import Breadcrumb from '@/components/ui/breadcrumb';
import LoadingIndicator from '@/components/ui/loading-indicator';
import PageIntro from '@/components/ui/page-intro';
import { Product } from '@/types/types';
import Head from 'next/head';

interface CartPageProps {
	items: Product[];
}

const CartPage: React.FC<CartPageProps> = ({ items }) => {
	return (
		<>
			<Head>
				<title>Cart | Flick Electronics</title>
				<meta
					name='description'
					content='Cart Page'
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
			<Navbar fixed={true} />
			<main>
				<LoadingIndicator />
				<PageIntro
					src='/images/background/2.webp'
					alt=''
					width={1920}
					height={400}
				/>
				<Breadcrumb
					activeText='Cart'
					divider='/'
					prevPage='Home'
					prevPageLink='/'
				/>
				<div className='container mx-auto'>
					<h2 className='text-lg font-bold mb-4'>Cart</h2>
					{items.length === 0 ? (
						<p>Your cart is empty.</p>
					) : (
						<CartItemListComponent items={items} />
					)}
				</div>
			</main>
			<Footer />
		</>
	);
};
export default CartPage;

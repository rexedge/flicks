import { Product } from '@/types/types';
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import CartModal from './cart-modal';
import CartPage from '@/pages/cart';
import { useRouter } from 'next/router';

interface CartButtonProps {
	cartItems: Product[]; // Assuming an array of Product objects
}

const CartButton: React.FC<CartButtonProps> = ({ cartItems }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });
	const router = useRouter();

	const handleButtonClicked = () => {
		if (isMobileOrTablet) {
			// Navigate to the cart page on mobile and tablet screens
			// Implement the navigation logic here (e.g., using Next.js Link or router)
			router.push('/cart');
		} else {
			// Toggle the cart modal visibility on large screens
			setModalOpen(!isModalOpen);
		}
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<>
			<div>
				<div
					className='rounded-full h-12 w-12 p-2 hover:bg-gray-50 flex items-center justify-center relative'
					onClick={handleButtonClicked}
				>
					<div className='rounded-full bg-primary-dark text-primary-light p-1 text-xs absolute top-0 right-0 h-5 w-5 flex items-center justify-center'>
						{cartItems.length}
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
				</div>
			</div>
			{isMobileOrTablet ? (
				<CartPage items={cartItems} />
			) : (
				<CartModal
					isOpen={isModalOpen}
					items={cartItems}
					onClose={handleCloseModal}
				/>
			)}
		</>
	);
};

export default CartButton;

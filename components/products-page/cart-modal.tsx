import React from 'react';
import { Product } from '@/types/types';
import CartItemListComponent from './cart-item-list';

interface CartModalProps {
	isOpen: boolean;
	items: Product[]; // Assuming an array of Product objects
	onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, items, onClose }) => {
	return (
		<div
			className={`z-[3000] absolute h-screen left-0 w-screen top-0 inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
				isOpen ? 'visible' : 'invisible'
			}`}
		>
			<div className='bg-white p-4 rounded shadow-lg'>
				<h2 className='text-lg font-bold mb-4'>Cart</h2>
				<CartItemListComponent items={items} />
				<button
					className='bg-blue-500 text-white rounded px-4 py-2 mt-4'
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default CartModal;

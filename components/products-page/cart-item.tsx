import { Product } from '@/types/types';
import React from 'react';

interface CartItemProps {
	item: Product; // Assuming you have a Product type defined
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	return (
		<div className='flex items-center justify-between py-2 border-b'>
			<img
				src={item.image}
				alt={item.name}
				className='w-16 h-16 mr-4'
			/>
			<div>
				<h3 className='font-bold'>{item.name}</h3>
				<p>${item.price}</p>
			</div>
		</div>
	);
};

export default CartItem;

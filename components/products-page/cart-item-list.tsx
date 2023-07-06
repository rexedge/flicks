import { Product } from '@/types/types';
import React from 'react';
import CartItem from './cart-item';

interface CartItemListComponentProps {
	items: Product[]; // Assuming an array of Product objects
}

const CartItemListComponent: React.FC<CartItemListComponentProps> = ({
	items,
}) => {
	return (
		<div>
			<h2 className='text-lg font-bold mb-4'>Cart Items</h2>
			{items.map((item) => (
				<CartItem
					key={item.id}
					item={item}
				/>
			))}
		</div>
	);
};

export default CartItemListComponent;

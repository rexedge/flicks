import React, { useEffect, useState } from 'react';
import { Product } from '../../types/types';
import { fetchProductListData } from '@/utils/fetch-product-list-data';
import ProductCard from './product-card';
import ProductFilters from './product-filters';
import Container from '../layout/container';

export default function ProductBody() {
	const [products, setProducts] = useState<Product[]>([]);
	const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	useEffect(() => {
		async function fetchData() {
			const productList = await fetchProductListData();
			setProducts(productList);
			setFilteredProducts(productList);
		}
		fetchData();
	}, []);

	useEffect(() => {
		const filteredList = products.filter((product) =>
			selectedFilters.every((filter) =>
				product.categories.includes(filter)
			)
		);
		setFilteredProducts(filteredList);
	}, [selectedFilters, products]);
	const handleFilterChange = (filters: string[]) => {
		setSelectedFilters(filters);
	};
	return (
		<Container maxWidth='max-w-7xl py-3 px-5 transition-all duration-500'>
			<div className='grid grid-cols-12 text-primary-dark gap-5 relative'>
				<div className='col-span-12 lg:col-span-2 my-5 sticky top-0 z-10'>
					<ProductFilters
						products={products}
						selectedFilters={selectedFilters}
						onFilterChange={handleFilterChange}
					/>
				</div>
				<div className='col-span-12 lg:col-span-10 my-5'>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 transition-all duration-500'>
						{filteredProducts.length > 0 &&
							filteredProducts.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						{filteredProducts.length < 1 && (
							<div>No products Found </div>
						)}
					</div>
				</div>
			</div>
		</Container>
	);
}

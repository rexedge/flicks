import { Product } from '@/types/types';
import { useState, useEffect } from 'react';

interface Props {
	products: Product[];
	selectedFilters: string[];
	onFilterChange: (filters: string[]) => void;
}

export default function ProductFilters({
	products,
	selectedFilters,
	onFilterChange,
}: Props) {
	const [categories, setCategories] = useState<string[]>([]);

	useEffect(() => {
		const categorySet = new Set<string>();
		products.forEach((product) => {
			product.categories.forEach((category) => {
				categorySet.add(category);
			});
		});
		setCategories(Array.from(categorySet));
	}, [products]);

	const handleFilterChange = (category: string) => {
		onFilterChange([category]);
	};

	const handleFilterRemove = (filter: string) => {
		onFilterChange(selectedFilters.filter((f) => f !== filter));
	};

	return (
		<div className=' bg-primary-light rounded-lg text-sm border border-primary'>
			<h2 className='px-3 py-3 border-b border-primary'>FILTER</h2>
			<div className={'filterList mx-1 pb-3'}>
				{categories.map((category) => (
					<div
						key={category}
						className={`${'filter px-2 my-2 rounded cursor-pointer uppercase'} ${
							selectedFilters.includes(category)
								? 'bg-primary-dark text-primary-light'
								: ''
						}`}
						onClick={() => handleFilterChange(category)}
					>
						{category}
					</div>
				))}
			</div>
			<div className='my-3'>
				{selectedFilters.map((filter) => (
					<span
						key={filter}
						className=' cursor-pointer border border-primary-dark rounded px-2 py-1 mx-1 my-1'
						onClick={() => handleFilterRemove(filter)}
					>
						RESET
					</span>
				))}
			</div>
		</div>
	);
}

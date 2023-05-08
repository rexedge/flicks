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
		if (selectedFilters.includes(category)) {
			onFilterChange(
				selectedFilters.filter((filter) => filter !== category)
			);
		} else {
			onFilterChange([...selectedFilters, category]);
		}
	};

	// const handleFilterRemove = (filter: string) => {
	// 	onFilterChange(selectedFilters.filter((f) => f !== filter));
	// };

	return (
		<div className=' bg-primary-light rounded-lg text-sm border border-primary'>
			<h2 className='px-3 py-3 border-b border-primary'>Filter</h2>
			<div className={'filterList mx-1 pb-3'}>
				{categories.map((category) => (
					<div
						key={category}
						className={`${'filter px-2 my-2 rounded-md'} ${
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
			{/* <div className=''>
				{selectedFilters.map((filter) => (
					<span
						key={filter}
						className=' cursor-pointer'
						onClick={() => handleFilterRemove(filter)}
					>
						<span>x</span> {`${filter}, `}
					</span>
				))}
			</div> */}
		</div>
	);
}

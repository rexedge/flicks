import { Product } from '@/types/types';
import productListData from '../utils/data/product-list-data.json';

export async function fetchProductListData(): Promise<Product[]> {
	try {
		return productListData.products;
	} catch (error) {
		console.error(error);
		return [];
	}
}

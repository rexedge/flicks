export interface Product {
	id: string;
	name: string;
	image: string;
	price: number;
	description: string;
	categories: string[];
}

export type Filter = string[];

export type ProductFilter = 'category1' | 'category2' | 'category3';

export type ProductListData = {
	productList: Product[];
	filterOptions: Filter[];
};

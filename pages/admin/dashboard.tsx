import { useState, useEffect, Fragment } from 'react';
// import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import Footer from '@/components/layout/footer';
import Head from 'next/head';
import Navbar from '@/components/layout/navigation-bar';
import Section from '@/components/layout/section';
import Container from '@/components/layout/container';
// import { getProductList, createProduct, deleteProduct } from '../../utils/api';

export default function AdminDashboard() {
	// const [session, loading] = useSession();
	const session = {
		user: {
			name: 'Paul',
		},
	};
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [products, setProducts] = useState([
		{
			id: '0',
			name: 'FC01 Car Charger',
			image: '/images/products/fc/01.jpeg',
			price: 10.99,
			description:
				'Model: FC01; Input: 12-24v; Output: 5v=2.4A; USB: 2; Cable: Micro; Length: 1m; Speed: Fast charging; PE2.0 & Qc3.0: compatible; Safe and strong',
			categories: ['Charger', 'Car charger'],
		},
		{
			id: '1',
			name: 'FC02 Car Charger',
			image: '/images/products/fc/02.jpeg',
			price: 10.99,
			description:
				'Model: FC02; Input: 12-24v; Output: 5v=2.4A; USB: 2; Cable: Micro, iOS and Type C; Length: 1m; Speed: Fast charging; PE2.0 & Qc3.0: compatible; Safe and strong',
			categories: ['Charger', 'Car charger'],
		},
	]);
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const router = useRouter();

	useEffect(() => {
		fetchProductList();
	}, []);

	// Redirect to login if not authenticated
	// if (loading) {
	// 	return <div>Loading...</div>;
	// }
	// if (!session) {
	// 	router.push('/admin');
	// 	return null;
	// }

	const fetchProductList = async () => {
		try {
			// const productList = await getProductList();
			const productList = products;
			setProducts(productList);
		} catch (error) {
			setErrorMessage('Failed to fetch product list.');
		}
	};

	// const handleCreateProduct = async (e) => {
	const handleCreateProduct = async () => {
		// e.preventDefault();
		try {
			// await createProduct({ name: productName, price: productPrice });
			setSuccessMessage('Product created successfully!');
			setProductName('');
			setProductPrice('');
			fetchProductList(); // Refresh the product list after creating a new product
		} catch (error) {
			setErrorMessage('Failed to create product.');
		}
	};

	// const handleDeleteProduct = async (productId) => {
	const handleDeleteProduct = async () => {
		try {
			// await deleteProduct(productId);
			setSuccessMessage('Product deleted successfully!');
			fetchProductList(); // Refresh the product list after deleting a product
		} catch (error) {
			setErrorMessage('Failed to delete product.');
		}
	};

	return (
		<Fragment>
			<Head>
				<title>Admin - Dashboard</title>
			</Head>
			<Navbar />
			<Section className='px-5 min-h-[calc(100vh-400px)]'>
				<Container
					maxWidth='w-[1080px]'
					className='my-4 md:my-8 flex-col'
				>
					<h1>Welcome, {session.user.name}!</h1>
					<h2>Create a New Product</h2>
					{successMessage && <p>{successMessage}</p>}
					{errorMessage && <p>{errorMessage}</p>}
					<form onSubmit={handleCreateProduct}>
						<label>
							Product Name:
							<input
								type='text'
								value={productName}
								onChange={(e) =>
									setProductName(e.target.value)
								}
							/>
						</label>
						<label>
							Product Price:
							<input
								type='text'
								value={productPrice}
								onChange={(e) =>
									setProductPrice(e.target.value)
								}
							/>
						</label>
						<button type='submit'>Create Product</button>
					</form>

					<h2>Available Products</h2>
					{products.length > 0 ? (
						<ul>
							{products.map((product) => (
								<li key={product.id}>
									{product.name} - {product.price}
									<button
										onClick={() =>
											// handleDeleteProduct(product.id)
											handleDeleteProduct()
										}
									>
										Delete
									</button>
								</li>
							))}
						</ul>
					) : (
						<p>No products available.</p>
					)}
				</Container>
			</Section>
			<Footer />
		</Fragment>
	);
}

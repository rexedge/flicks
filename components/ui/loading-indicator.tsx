import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import 'tailwindcss/tailwind.css';

const styles = {
	loadingBar: `fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500`,
	loadingBarContainer: `relative h-1`,
	loadingBarProgress: `absolute top-0 left-0 h-full bg-white rounded-full`,
	loadingBarAnimation: `animate-loading-bar-progress`,
};

const LoadingIndicator: React.FC = () => {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	return (
		<div className={`${styles.loadingBarContainer}`}>
			<div
				className={`${styles.loadingBar} ${
					loading ? '' : 'opacity-0'
				}`}
			>
				<div
					className={`${styles.loadingBarProgress} ${styles.loadingBarAnimation}`}
				/>
			</div>
		</div>
	);
};

export default LoadingIndicator;

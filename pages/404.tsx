import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import Section from '@/components/layout/section';
import Link from 'next/link';
import React from 'react';

export default function Error404() {
	return (
		<div>
			<Navbar fixed />
			<Section className='min-h-screen gap-4'>
				Page Not Found
				<br />
				<Link href={'/'}>
					<span className='underline'>Go Home</span>
				</Link>
			</Section>
			<Footer />
		</div>
	);
}

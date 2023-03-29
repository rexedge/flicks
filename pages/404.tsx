import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navigation-bar';
import Section from '@/components/layout/section';
import Link from 'next/link';
import React from 'react';

export default function Error404() {
	return (
		<div>
			<Navbar fixed />
			<Section className='min-h-[400px] gap-4'>
				<div className='text-center justify-center items-center'>
					<div className=''>Page Not Found</div>
					<Link href={'/'}>
						<span className='underline italic'>Go Home</span>
					</Link>
				</div>
			</Section>
			<Footer />
		</div>
	);
}

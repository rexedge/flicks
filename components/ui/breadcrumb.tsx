import Link from 'next/link';
import React from 'react';
import Container from '../layout/container';

type BreadcrumbProps = {
	prevPage: string;
	prevPageLink: string;
	divider: string;
	activeText: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({
	prevPage,
	prevPageLink,
	divider,
	activeText,
}) => {
	return (
		<div className='bg-primary-light border-y border-primary'>
			<Container maxWidth='max-w-7xl py-3 px-5'>
				<Link href={prevPageLink}>
					<span className='text-primary'>{prevPage}</span>
				</Link>
				<span className='text-primary-dark font-bold'>
					{` ${divider} `}
					{activeText}
				</span>
			</Container>
		</div>
	);
};

export default Breadcrumb;

import React, { Fragment } from 'react';
import PageIntro from '../ui/page-intro';
import Breadcrumb from '../ui/breadcrumb';
import ContactMap from './contact-map';
import ContactForm from './contact-form';

export default function ContactPage() {
	return (
		<Fragment>
			<PageIntro
				src='/images/background/3.webp'
				alt=''
				width={1920}
				height={400}
			/>
			<Breadcrumb
				activeText='Contact Us'
				divider='/'
				prevPage='Home'
				prevPageLink='/'
			/>
			<ContactForm />
			<ContactMap />
		</Fragment>
	);
}

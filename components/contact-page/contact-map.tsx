import React from 'react';

export default function ContactMap() {
	return (
		<div className='md:aspect-desktop aspect-mobile'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.485944790619!2d3.3304803752606107!3d6.4599489238980325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8960b4b24371%3A0xc744b51fd5ba3460!2sOjo%20Rd%2C%20Alaba%20102103%2C%20Lagos!5e0!3m2!1sen!2sng!4v1681647752257!5m2!1sen!2sng'
				className='w-full h-full'
			></iframe>
		</div>
	);
}

import React from 'react';

export default function ContactMap() {
	return (
		<div className='md:aspect-desktop aspect-mobile'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.720024228!2d3.466191915231356!3d6.430002126025987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b917993a95193%3A0x21bdfe095d86ad6d!2sISCE%20DIGITAL%20CONCEPT!5e0!3m2!1sen!2sng!4v1661100183650!5m2!1sen!2sng'
				className='w-full h-full'
			></iframe>
		</div>
	);
}

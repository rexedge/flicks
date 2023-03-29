import Image from 'next/image';
import React from 'react';

type PageIntroProps = {
	height: number;
	width: number;
	src: string;
	alt: string;
};

const PageIntro: React.FC<PageIntroProps> = ({ height, width, src, alt }) => {
	return (
		<div className='text-center h-92 md:h-80 overflow-hidden object-cover'>
			<Image
				height={height}
				width={width}
				src={src}
				alt={alt}
			/>
		</div>
	);
};

export default PageIntro;

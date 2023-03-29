import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { LATEST_PRODUCTS } from '@/utils/data';
import Card from '../layout/card';

export default function SwiperSlider() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 20,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 50,
					},
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
					type: 'bullets',
				}}
				loop={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'
			>
				<div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
					{LATEST_PRODUCTS.map((card) => (
						<SwiperSlide
							key={card.id}
							className={'mb-8'}
						>
							<Card
								image={card.image}
								header={card.header}
							></Card>
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</>
	);
}

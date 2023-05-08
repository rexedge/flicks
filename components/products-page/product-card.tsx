import { Product } from '@/types/types';
import SplitText from '@/utils/split-texts';
import { Description, Star } from '@mui/icons-material';
import Image from 'next/image';

interface Props {
	product: Product;
}

export default function ProductCard({ product }: Props) {
	const { name, image, price, description } = product;

	return (
		<div
			className={
				'card grid-col-1 rounded overflow-hidden text-sm bg-primary-light border border-primary'
			}
		>
			<div className={'card-image'}>
				<Image
					src={image}
					alt={name}
					height={300}
					width={400}
				/>
			</div>
			<div className={'card-details p-2'}>
				<div className='flex justify-between'>
					<div className=' font-bold'>{name}</div>
					<div className={'text-primary'}>
						<Star /> {'4.5'}
					</div>
				</div>
				<div
					className={
						'mt-3 text-sm border-b border-primary mb-2 pb-1'
					}
				>
					<Description /> SPECIFICATION
				</div>
				<div className={'card-description'}>
					<SplitText text={description} />
				</div>
			</div>
		</div>
	);
}

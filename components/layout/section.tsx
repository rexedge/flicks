import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
	children: React.ReactNode;
	className?: string;
};

const Section: React.FC<Props> = ({ children, className = '' }) => {
	return (
		<section
			className={`text-primary-dark min-h-[200px] flex justify-center items-center ${className}`}
		>
			{children}
		</section>
	);
};

export default Section;

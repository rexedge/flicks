import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
	color?: string;
	children: React.ReactNode;
	className?: string;
};

const Section: React.FC<Props> = ({
	children,
	color = 'primary',
	className = '',
}) => {
	const variants: Variants = {
		inView: { opacity: 1, y: 0 },
		outOfView: { opacity: 0, y: 50 },
	};

	const [ref, inView] = useInView({ threshold: 0.5 });

	return (
		<motion.section
			ref={ref}
			whileHover={{ scale: 1.05 }}
			initial='outOfView'
			animate={inView ? 'inView' : 'outOfView'}
			variants={variants}
			transition={{ duration: 0.3 }}
			className={`text-primary dark:text-primary-light p-5 min-h-[200px] flex justify-center items-center bg-${color}-light dark:bg-${color}-primary ${className}`}
		>
			{children}
		</motion.section>
	);
};

export default Section;

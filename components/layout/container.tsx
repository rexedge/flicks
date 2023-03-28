import { motion } from 'framer-motion';

interface ContainerProps {
	children: React.ReactNode;
	maxWidth: string;
	className?: string;
}

const Container: React.FC<ContainerProps> = ({
	children,
	maxWidth,
	className,
}) => {
	const containerClasses = `mx-auto overflow-hidden ${maxWidth} ${
		className ?? ''
	}`;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
			className={containerClasses}
		>
			{children}
		</motion.div>
	);
};

export default Container;

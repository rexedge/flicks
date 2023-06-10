import NextLink from 'next/link';

type ButtonProps = {
	children: React.ReactNode;
	href?: string;
	onClick?: () => void;
	className?: string;
};

const Button = ({ children, href, onClick, className }: ButtonProps) => {
	const buttonClasses =
		'px-4 py-2 rounded-md font-medium transition duration-900 bg-primary text-primary-light hover:opacity-80 text-capitalized';

	if (href) {
		return (
			<NextLink href={href}>
				<span className={`${buttonClasses} ${className}`}>
					{children}
				</span>
			</NextLink>
		);
	}

	return (
		<button
			className={`${buttonClasses} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;

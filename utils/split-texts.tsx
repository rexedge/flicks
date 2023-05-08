import React from 'react';

interface Props {
	text: string;
}

const SplitText: React.FC<Props> = ({ text }) => {
	const parts = text.split(';');
	return (
		<>
			{parts.map((part, index) => {
				const [key, value] = part.split(':');
				return (
					<p key={index}>
						<b>{key.trim()}</b>: {value}
					</p>
				);
			})}
		</>
	);
};

export default SplitText;

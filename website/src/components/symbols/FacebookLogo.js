/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const FacebookLogo = ({ width, height = 'auto', color, ...rest }) => {
	const { COLORS } = useBrand();

	color = color || COLORS.neutral;

	return (
		<Svg
			viewBox="0 0 39 39"
			width={39}
			height={39}
			assistiveText="Facebook"
			css={{ width, height }}
			{...rest}
		>
			<title>Facebook logo</title>
			<path
				d="M38.726 19.51C38.726 8.736 30.056 0 19.363 0 8.669 0 0 8.735 0 19.51c0 9.74 7.08 17.81 16.337 19.274V25.151h-4.916v-5.64h4.916v-4.299c0-4.89 2.891-7.59 7.314-7.59 2.119 0 4.334.38 4.334.38v4.802h-2.441c-2.406 0-3.156 1.504-3.156 3.047v3.66h5.37l-.858 5.64h-4.512v13.633c9.257-1.463 16.338-9.535 16.338-19.273"
				fill={color}
				fillRule="evenodd"
				opacity={0.7}
			/>
		</Svg>
	);
};

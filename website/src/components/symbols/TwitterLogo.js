/** @jsx jsx */
import { jsx, useBrand } from '@westpac/core';
import { Svg } from './Svg';

export const TwitterLogo = ({ width, height = 'auto', color, ...rest }) => {
	const { COLORS } = useBrand();

	color = color || COLORS.neutral;

	return (
		<Svg
			viewBox="0 0 50 40"
			width={50}
			height={40}
			assistiveText="Twitter"
			css={{ width, height }}
			{...rest}
		>
			<title>Twitter logo</title>
			<g opacity={0.7}>
				<path
					d="M15.713 40c18.855 0 29.168-15.39 29.168-28.737 0-.437 0-.872-.03-1.305a20.69 20.69 0 005.115-5.228 20.702 20.702 0 01-5.888 1.589A10.163 10.163 0 0048.584.732a20.732 20.732 0 01-6.509 2.452C38.897-.145 33.848-.96 29.759 1.197c-4.09 2.156-6.203 6.747-5.154 11.198-8.243-.407-15.922-4.242-21.127-10.552C.757 6.458 2.146 12.362 6.65 15.325A10.292 10.292 0 012 14.061v.128c.001 4.808 3.44 8.949 8.224 9.9-1.51.406-3.093.466-4.629.174 1.343 4.114 5.192 6.933 9.578 7.014A20.767 20.767 0 010 35.463a29.34 29.34 0 0015.713 4.53"
					opacity={0.95}
					fill={color}
					fillRule="evenodd"
				/>
			</g>
		</Svg>
	);
};

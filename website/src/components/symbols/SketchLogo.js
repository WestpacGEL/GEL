/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const SketchLogo = ({ width, height, ...rest }) => {
	return (
		<Svg viewBox="0 0 160 144" width={width} height={height} {...rest}>
			<title>Sketch logo</title>
			<g fillRule="nonzero" fill="none">
				<path fill="#FDB300" d="M34.839 4.72l45-4.72 45 4.72 34.838 46.39-79.838 92.223L0 51.11z" />
				<path
					fill="#EA6C00"
					d="M32.338 51.11l47.5 92.224L0 51.11zM127.34 51.11l-47.5 92.224 79.838-92.224z"
				/>
				<path fill="#FDAD00" d="M32.338 51.11h95l-47.5 92.224z" />
				<path fill="#FDD231" d="M79.838 0l-45 4.718-2.5 46.392zM79.84 0l45 4.718 2.5 46.392z" />
				<path
					fill="#FDAD00"
					d="M159.678 51.11L124.839 4.718l2.5 46.392zM0 51.11L34.838 4.718l-2.5 46.392z"
				/>
				<path fill="#FEEEB7" d="M79.838 0l-47.5 51.11h95z" />
			</g>
		</Svg>
	);
};

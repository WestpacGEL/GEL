/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const SketchLogo = ({ width, height = 'auto', ...rest }) => {
	return (
		<Svg
			viewBox="0 0 180 180"
			width={180}
			height={180}
			assistiveText="Sketch"
			css={{ width, height }}
			{...rest}
		>
			<title>Sketch logo</title>
			<g>
				<path
					fill="#FDB300"
					d="M44.839 28.719l45-4.719 45 4.719 34.838 46.391-79.838 92.223L10 75.11z"
				/>
				<path
					fill="#EA6C00"
					d="M42.338 75.11l47.5 92.223L10 75.11zM137.339 75.11l-47.5 92.223 79.839-92.223z"
				/>
				<path fill="#FDAD00" d="M42.338 75.11h95l-47.5 92.223z" />
				<path fill="#FDD231" d="M89.838 24l-45 4.718-2.5 46.392zM89.839 24l45 4.718 2.5 46.392z" />
				<path
					fill="#FDAD00"
					d="M169.678 75.11l-34.839-46.392 2.5 46.392zM10 75.11l34.838-46.392-2.5 46.392z"
				/>
				<path fill="#FEEEB7" d="M89.838 24l-47.5 51.11h95z" />
			</g>
		</Svg>
	);
};

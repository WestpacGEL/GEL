/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Svg } from './Svg';

export const BsaBackgroundSvg = ({ width, height, ...rest }) => {
	return (
		<Svg viewBox="0 0 300 400" width={width} height={height} {...rest}>
			<title>BankSA background image</title>
			<path
				fill="#ABE2EC"
				d="M651.4 0C546.6 1.4 442 40.8 360.1 118.8S233.8 299.3 227.3 403.9c104.8-1.4 209.4-40.7 291.3-118.7 81.8-78 126.3-180.5 132.8-285.2"
				opacity={0.05}
			/>
			<path
				fill="#ABE2EC"
				d="M421.3 354.5c-1.2-87.6-34.1-175-99.3-243.5A358.41 358.41 0 0083.8 0c1.1 87.6 34.1 175 99.2 243.4a358.31 358.31 0 00238.3 111.1m-194.7 50.4c-.8-58.8-22.9-117.5-66.6-163.4A240.5 240.5 0 000 167c.8 58.8 22.9 117.5 66.6 163.4a241.38 241.38 0 00160 74.5"
				opacity={0.05}
			/>
			<path
				fill="#ABE2EC"
				d="M401.4 447.3c73.4-1 146.6-28.5 203.9-83.1a300.68 300.68 0 0093-199.5c-73.4.9-146.5 28.5-203.8 83.1-57.5 54.5-88.6 126.2-93.1 199.5"
				opacity={0.05}
			/>
		</Svg>
	);
};

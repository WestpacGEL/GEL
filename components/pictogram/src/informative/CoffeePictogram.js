import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const CoffeePictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="CoffeePictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="52.827 52 20.163 52 19 39 54 39" />
				<path
					fill={outline}
					d="M13.594 22.366h45.8v-3.908h-45.8v3.908zm37.41 49.058h-29.02L17.92 24.942h37.148l-4.063 46.482zM18.512 9.007l36.09 3.675 1.189 3.2H16.877l1.634-6.875zm43.49 6.876l-3.26-4.793a1.294 1.294 0 0 0-.959-.554l.004-.004-2.116-.275-38.026-3.872a1.285 1.285 0 0 0-1.395.985l-2.026 8.513h-1.926c-.716 0-1.297.576-1.297 1.288v6.483c0 .711.581 1.288 1.297 1.288h3.018L19.5 72.823c.058.666.62 1.177 1.293 1.177h31.399c2.751 0 5.352-2.802 5.58-5.588l3.822-43.47h3.02c.716 0 1.297-.577 1.297-1.288v-6.483c0-.712-.581-1.288-1.297-1.288H62z"
				/>
			</g>
		</Pictogram>
	);
};

CoffeePictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Coffee',
	copyrightYear: '2021',
};
CoffeePictogram.propTypes = Pictogram.propTypes;

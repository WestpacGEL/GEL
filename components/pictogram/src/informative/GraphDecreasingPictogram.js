import React from 'react';
import { getColors } from '../_utils';
import { propTypes, defaultProps, Pictogram } from '../Pictogram';

export const GraphDecreasingPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="GraphDecreasingPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M8 7.456l18.612 18.528a2.009 2.009 0 0 0 2.787.046l10.786-10.057a.84.84 0 0 1 1.159.015l21.924 21.444H50.443l-.045 3.691H67.75c.955 0 1.728-.773 1.728-1.727V22.224h-3.64l.038 12.912-23.865-23.343a1.732 1.732 0 0 0-2.394-.029L28.496 22.132a.615.615 0 0 1-.855-.015L10.446 5 8 7.456z"
				/>
				<path
					fill={outline}
					d="M51.614 68.985h11.055V58.86H51.614v10.124zm-13.554 0h11.055V51.01H38.06v17.975zm-13.555 0H35.56V42.603H24.505v26.382zm-13.554 0h11.054V34.754H10.951v34.23zm52.52-12.624H51.615v-6.152a1.7 1.7 0 0 0-1.699-1.7H38.06v-6.708a1.7 1.7 0 0 0-1.698-1.698H24.505v-6.151a1.7 1.7 0 0 0-1.697-1.698H10.149a1.7 1.7 0 0 0-1.698 1.698v37.533c.002.163.151.261.358.388 1.08.663 4.482 1.383 5.14 1.383h55.483V61.688c0-1.828-3.117-4.855-5.245-5.258a4.242 4.242 0 0 0-.716-.07z"
				/>
			</g>
		</Pictogram>
	);
};

GraphDecreasingPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Graph showing decreasing trend',
	copyrightYear: '2021',
};
GraphDecreasingPictogram.propTypes = propTypes;

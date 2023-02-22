import React from 'react';
import { getColors } from '../_utils';
import { defaultProps, Pictogram } from '../Pictogram';

export const GraphIncreasingPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="GraphIncreasingPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M8 37.667L26.612 19.14a2.009 2.009 0 0 1 2.787-.046L40.185 29.15a.84.84 0 0 0 1.159-.015L63.268 7.691H50.443l-.045-3.69H67.75c.955 0 1.728.772 1.728 1.726V22.9h-3.64l.038-12.912L42.012 33.33a1.732 1.732 0 0 1-2.394.03L28.496 22.99a.615.615 0 0 0-.855.015L10.446 40.123 8 37.667z"
				/>
				<path
					fill={outline}
					d="M51.614 68.901h11.055v-34.23H51.614V68.9zm-13.554 0h11.055V42.52H38.06v26.382zm-13.554 0H35.56V50.926H24.506v17.975zm-13.555 0h11.055V58.777H10.951v10.124zm52.46-36.73c-.369-.008-4.568-.008-12.598 0-.938 0-1.698.76-1.698 1.697v6.151H37.258c-.938 0-1.698.76-1.698 1.698v6.71H23.703c-.937 0-1.697.76-1.697 1.697v6.153H10.149c-.938 0-1.698.76-1.698 1.698-.007 8.761-.007 13.229 0 13.403.01.262.196.333.52.493 1.19.585 4.026 1.132 4.593 1.132h55.411V35.47c0-.734-2.742-2.367-4.376-3.037-.448-.184-.635-.252-1.188-.263z"
				/>
			</g>
		</Pictogram>
	);
};

GraphIncreasingPictogram.defaultProps = {
	...defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Graph showing increasing trend',
	copyrightYear: '2021',
};
GraphIncreasingPictogram.propTypes = Pictogram.propTypes;

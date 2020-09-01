import React from 'react';
import { propTypes, defaultProps, Pictogram, colorMap } from '../Pictogram';
import { useBrand } from '@westpac/core';

export const ChatPictogram = ({ type, ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, highlight } = colorMap(COLORS)[type];

	return (
		<Pictogram pictogram="ChatPictogram" type={type} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M75 20v54c-5.718-9.173-13.328-13.76-22.83-13.76H20V41.926c1.851-.458 3.798-.686 5.842-.686H57v-21.24L75 20z"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M57 2v39.239H25.842c-8.64 0-15.539 4.068-20.87 12.385l-.275.434L1 59.987V2h56zm-4 4H5v40.907l.27-.307c5.314-5.96 11.874-9.104 19.6-9.346l.494-.011.478-.004L53 37.238V6zM24 29.5v4H10.5v-4H24zm6.758-10v4H10.5v-4h20.258zm7.742-10v4h-28v-4h28z"
				/>
			</g>
		</Pictogram>
	);
};

ChatPictogram.defaultProps = {
	...defaultProps,
	assistiveText: 'Chat',
};
ChatPictogram.propTypes = propTypes;

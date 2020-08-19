import React from 'react';
import { propTypes, defaultProps, Pictogram, useBrand, colorMap } from '../Pictogram';

export const ChatPictogram = ({ mode = 'color', ...rest }) => {
	const { COLORS } = useBrand();
	const { outline, background, highlight } = colorMap(COLORS)[mode];

	return (
		<Pictogram pictogram="ChatPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<path
					fill={highlight}
					d="M75 20v54c-5.718-9.173-13.328-13.76-22.83-13.76H20V41.926c1.851-.458 3.798-.686 5.842-.686H57v-21.24L75 20z"
				/>
				<path
					fill={background}
					fillRule="nonzero"
					d="M53 6v31.238H25.842l-.478.005c-7.94.12-14.667 3.27-20.094 9.357l-.27.307V6h48z"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M57 2v39.239H25.842c-8.788 0-15.776 4.21-21.145 12.82L1 59.986V2h56zm-4 4H5v40.907l.27-.307c5.427-6.087 12.153-9.236 20.094-9.357l.478-.004L53 37.238V6z"
				/>
				<path
					fill={outline}
					fillRule="nonzero"
					d="M38.5 9.5v4h-28v-4zM30.758 19.5v4H10.5v-4zM24 29.5v4H10.5v-4z"
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

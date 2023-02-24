import React from 'react';
import { getColors } from '../_utils';
import { Pictogram } from '../Pictogram';

export const BankPictogram = ({ mode, ...rest }) => {
	const { outline, highlight } = getColors(mode);

	return (
		<Pictogram pictogram="BankPictogram" mode={mode} {...rest}>
			<g fill="none" fillRule="evenodd">
				<polygon fill={highlight} points="10.122 51 23.244 51 23.244 30.332 10.122 30.332" />
				<path
					fill={outline}
					d="M46.719 46.979a1.248 1.248 0 0 0 1.768 0l5.769-5.769a1.25 1.25 0 0 0-1.767-1.768l-5.77 5.769a1.25 1.25 0 0 0 0 1.768m5.955-1.616l-3.122 3.123a1.25 1.25 0 1 0 1.768 1.767l3.122-3.122a1.25 1.25 0 0 0-1.768-1.768"
				/>
				<path
					fill={outline}
					d="M72.205 14c.691 0 1.25.56 1.25 1.25v40.051a6.907 6.907 0 0 1-6.898 6.898H5.25c-.69 0-1.25-.56-1.25-1.25V24.437c0-.037.018-.068.021-.105-.003-.036-.021-.068-.021-.105V15.25c0-.69.56-1.25 1.25-1.25zm-7.494 11.687H6.5V59.7h20.401V31.544c0-.69.56-1.25 1.25-1.25h30.245c.69 0 1.25.56 1.25 1.25V59.7h5.065V25.687zm-7.565 7.107H44.587V59.7h12.559V32.794zm-15.059 0H29.401V59.7h12.686V32.794zM64.711 16.5H6.5v6.478h58.211V16.5z"
				/>
			</g>
		</Pictogram>
	);
};

BankPictogram.defaultProps = {
	...Pictogram?.defaultProps,
	viewBoxWidth: 78,
	viewBoxHeight: 78,
	assistiveText: 'Bank',
	copyrightYear: '2021',
};
BankPictogram.propTypes = Pictogram.propTypes;

/** @jsx jsx */

import { jsx, useBrand, useMediaQuery, asArray, getLabel } from '@westpac/core';

const Pictogram = ({ state: _, ...rest }) => <span {...rest} />;

const pictogramStyles = () => {
	const mq = useMediaQuery();

	return mq({
		label: getLabel('pictogram'),
		display: 'inline-block',
		flexShrink: 0,
		lineHeight: 1,
		verticalAlign: 'middle',
		width: 78,
		height: 78,
	})[0];
};

const pictogramAttributes = () => null;

export const defaultPictogram = {
	component: Pictogram,
	styles: pictogramStyles,
	attributes: pictogramAttributes,
};

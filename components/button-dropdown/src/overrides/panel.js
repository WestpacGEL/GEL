/** @jsx jsx */

import { jsx, useMediaQuery, asArray, useBrand, getLabel } from '@westpac/core';
import { forwardRef } from 'react';

const Panel = forwardRef(({ state, ...rest }, ref) => <div ref={ref} {...rest} />);

const panelStyles = (_, { open, dropdownSize }) => {
	const mq = useMediaQuery();
	const { COLORS } = useBrand();

	const sizeMap = {
		small: {
			minWidth: '8.125rem',
		},
		medium: {
			minWidth: '11.875rem',
		},
		large: {
			minWidth: '15.625rem',
		},
	};

	const dropdownSizeArr = asArray(dropdownSize);

	return mq({
		label: getLabel('buttonDropdown-panel', { open, dropdownSize }),
		visibility: open ? 'visible' : 'hidden',
		height: open ? null : '0px',
		overflow: 'hidden',
		position: 'absolute',
		left: 0,
		right: 0,
		margin: '0.1875rem 0 0 0',
		boxShadow: '0 0.375rem 0.75rem rgba(0, 0, 0, 0.175)',
		border: `1px solid ${COLORS.border}`,
		borderRadius: '0.1875rem',
		padding: '0.75rem',
		minWidth: dropdownSizeArr.map((s) => s && sizeMap[s].minWidth),
		backgroundColor: '#fff',
		zIndex: 100,
	})[0];
};

const panelAttributes = (_, { instanceId }) => ({
	id: instanceId,
	'data-js': 'buttonDropdown-panel__version__',
});

export const defaultPanel = {
	component: Panel,
	styles: panelStyles,
	attributes: panelAttributes,
};

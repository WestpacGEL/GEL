/** @jsx jsx */

import { forwardRef } from 'react';
import { jsx } from '@westpac/core';

export const Wrapper = forwardRef(
	({ justify, initialTabIndex, instanceIdPrefix, ...props }, ref) => <div ref={ref} {...props} />
);

export const wrapperStyles = (_, {}) => {
	return {};
};

/** @jsx jsx */

import { jsx } from '@westpac/core';

export const Group = ({ text, active, overrides, ...props }) => <li {...props} />;

export const groupStyles = (_, {}) => {
	return {};
};

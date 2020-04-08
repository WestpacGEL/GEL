/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';

const Label = ({ state, children, ...rest }) => (
	<VisuallyHidden tag="label" {...rest}>
		{children}
	</VisuallyHidden>
);

const labelStyles = () => {};

const labelAttributes = (_, { instanceId }) => ({ htmlFor: instanceId });

export const defaultLabel = {
	component: Label,
	styles: labelStyles,
	attributes: labelAttributes,
};

/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

export const Trigger = ({
	open,
	heading,
	headingTag,
	content,
	dismissible,
	position,
	instanceId,
	...rest
}) => <Button {...rest} />;

export const triggerStyles = (_, {}) => {
	return {};
};

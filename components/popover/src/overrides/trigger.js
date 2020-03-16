/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';

const Trigger = ({ state, ...rest }) => <Button {...rest} />;

const triggerStyles = () => ({});

const triggerAtttributes = (_, { instanceId, open }) => ({
	'aria-controls': instanceId,
	'aria-expanded': open,
});

export const defaultTrigger = {
	component: Trigger,
	styles: triggerStyles,
	attributes: triggerAtttributes,
};

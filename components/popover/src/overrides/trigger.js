/** @jsx jsx */

import { jsx } from '@westpac/core';
import { Button } from '@westpac/button';
import { forwardRef } from 'react';

const Trigger = forwardRef(({ state, ...rest }, ref) => <Button ref={ref} {...rest} />);

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

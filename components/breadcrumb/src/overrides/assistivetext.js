/** @jsx jsx */

import { jsx } from '@westpac/core';
import { VisuallyHidden } from '@westpac/a11y';
import React from 'react';

export const AssistiveText = ({
	assistiveText,
	currentAssistiveText,
	current,
	insideCrumb,
	icon,
	...props
}) => <VisuallyHidden {...props} />;

export const assistiveTextStyles = () => ({});

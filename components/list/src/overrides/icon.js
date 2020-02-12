/** @jsx jsx */

import { jsx } from '@westpac/core';
import React from 'react';

export const Icon = ({ look, type, nested, spacing, icon: Icon, ...rest }) => <Icon {...rest} />;

export const iconStyles = () => ({
	position: 'absolute',
	top: 0,
	left: 0,
});

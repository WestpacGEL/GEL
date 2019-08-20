/** @jsx jsx */

import React from 'react';
import { jsx, useTheme } from '@westpac/core';

export const ModalBody = props => {
	const { modal } = useTheme();
	return <div css={{ padding: modal.body.padding }} {...props} />;
};

/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { useModalContext } from './Modal';
import pkg from '../package.json';

export const ModalBody = props => {
	const { bodyId } = useModalContext();
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		bodyCSS: {},
	};

	merge(overrides, overridesWithTokens);

	return <div id={bodyId} css={{ padding: '1.125rem 1.5rem', ...overrides.bodyCSS }} {...props} />;
};

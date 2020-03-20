/** @jsx jsx */

import { jsx } from '@westpac/core';

const PageList = ({ state, ...rest }) => <ul {...rest} />;

const pageListStyles = () => ({
	listStyle: 'none',
	display: 'flex',
	paddingLeft: 0,
	margin: '1.3125rem 0',
	borderRadius: '0.1875rem',
	alignItems: 'center',
});

const pageListAttributes = () => null;

export const defaultPageList = {
	component: PageList,
	styles: pageListStyles,
	attributes: pageListAttributes,
};

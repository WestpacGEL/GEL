/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Fragment } from 'react';
import { PadlockIcon } from '@westpac/icon';

export const Wrapper = (props) => (
	<div css={{ backgroundColor: '#f3f4f6', height: '80vh', padding: '1rem' }} {...props} />
);

const FooterText = (props) => <div css={{ fontSize: '0.875rem', color: '#595767' }} {...props} />;

const Link = (props) => {
	const { COLORS } = useBrand();
	return <a href="#" css={{ color: COLORS.primary }} {...props} />;
};

export const Content = () => {
	const mq = useMediaQuery();
	return (
		<Fragment>
			<PadlockIcon css={mq({ float: 'left', marginRight: ['0.375rem', null, '0.75rem'] })} />
			<FooterText>
				Our site and your transactions are secure. You can read our{' '}
				<Link>security information</Link>. © 2020 Westpac Banking Corporation ABN 33 007 457 141
				AFSL and Australian credit licence 233714.
			</FooterText>
		</Fragment>
	);
};

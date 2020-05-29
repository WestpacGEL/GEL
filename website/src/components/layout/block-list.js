/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@westpac/icon';

// ==============================
// Component
// ==============================

export const BlockList = (props) => (
	<ul role="list" css={{ listStyle: 'none', margin: 0, padding: 0 }} {...props} />
);

export const BlockListItem = ({ href, target, logo: Logo, children, ...rest }) => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	return (
		<li css={mq({ display: 'block', borderBottom: `1px solid ${COLORS.border}` })} {...rest}>
			<a
				href={href}
				target={target}
				css={mq({
					boxSizing: 'border-box',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					padding: ['15px 0 16px', null, `9px ${Logo ? '9px' : 0} 9px 0`],
					minHeight: [55, null, 72],
					color: COLORS.text,
					textDecoration: 'none',
					':hover, :focus': {
						color: COLORS.primary,
						textDecoration: 'underline',
					},
				})}
			>
				{children}
				<div css={{ ...(Logo && { width: 54, height: 54 }), marginLeft: SPACING(4) }}>
					{Logo ? (
						<Logo width="auto" height="100%" aria-hidden={true} />
					) : (
						<ArrowRightIcon
							size="medium"
							color={COLORS.primary}
							assistiveText={null}
							aria-hidden={true}
						/>
					)}
				</div>
			</a>
		</li>
	);
};

// ==============================
// Types
// ==============================

BlockList.propTypes = {};

BlockListItem.propTypes = {
	href: PropTypes.string,
	target: PropTypes.string,
	logo: PropTypes.func,
};
BlockListItem.defaultProps = {
	href: '#0',
	target: null,
};

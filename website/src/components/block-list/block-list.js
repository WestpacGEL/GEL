/** @jsx jsx */
import { jsx, useMediaQuery, useBrand } from '@westpac/core';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@westpac/icon';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { BASE_PAGE } from '../../config';

// ==============================
// Component
// ==============================

export const BlockList = (props) => {
	const { PACKS } = useBrand();
	return (
		<ul
			role="list"
			css={{ listStyle: 'none', paddingLeft: 0, margin: 0, ...PACKS.typeScale.bodyFont[10] }}
			{...props}
		/>
	);
};

const BlockListLink = ({ link, children }) => {
	const brandName = useRouter().query.b || '';
	return link ? (
		<Link href={`${BASE_PAGE}?b=${brandName}`} as={link} passHref>
			{children}
		</Link>
	) : (
		children
	);
};

export const BlockListItem = ({ href, link, target, logo: Logo, children, ...rest }) => {
	const mq = useMediaQuery();
	const { COLORS, SPACING } = useBrand();

	const itemPadding = ['0.9375rem 0 1rem', null, `0.5625rem ${Logo ? '9px' : 0} 0.5625rem 0`];

	return (
		<li
			css={mq({
				display: 'block',
				borderBottom: `1px solid ${COLORS.border}`,
				padding: !(href || link) && itemPadding,
			})}
			{...rest}
		>
			{href || link ? (
				<BlockListLink href={href} link={link}>
					<a
						href={!link ? href : null}
						target={target}
						css={mq({
							boxSizing: 'border-box',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
							padding: itemPadding,
							minHeight: [55, null, Logo ? 72 : 55],
							color: COLORS.text,
							textDecoration: 'none',
							':hover, :focus': {
								color: COLORS.primary,
								textDecoration: 'underline',
							},
						})}
					>
						<span>{children}</span>
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
				</BlockListLink>
			) : (
				children
			)}
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

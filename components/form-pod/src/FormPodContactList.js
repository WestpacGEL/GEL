/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

// ==============================
// Utils
// ==============================

// ==============================
// Component
// ==============================

const FormPodContactListItem = ({ item, ...props }) => {
	const { breakpoints, colors } = useTheme();
	const mq = paint(breakpoints);

	const Icon = item.icon;

	// Set default icon color
	const iconColor = item.iconColor === undefined ? colors.primary.default : item.color;

	const styleLink = {
		display: 'inline-block',
		color: 'inherit',
		textDecoration: 'none',
		verticalAlign: 'middle',
	};
	const styleIcon = {
		// marginRight: [null, '1.2rem'], //TODO: multiple contact items?
		marginRight: '1.2rem',
	};
	const styleText = {
		// display: ['none', 'inline'], //TODO: multiple contact items?
		verticalAlign: 'middle',
	};

	return (
		<li css={{ display: 'inline-block' }} {...props}>
			<a href={item.url} css={styleLink} onClick={item.onClick}>
				<Icon size="medium" css={mq(styleIcon)} color={iconColor} />
				<span css={mq(styleText)}>{item.text}</span>
			</a>
		</li>
	);
};

export const FormPodContactList = ({ items, ...props }) => {
	const style = {
		listStyle: 'none',
		paddingLeft: 0,
		margin: 0,

		'li + li': {
			marginLeft: '1.8rem',
		},
	};

	return (
		<ul css={style}>
			{(items || []).map((item, i) => (
				<FormPodContactListItem key={i} item={item} />
			))}
		</ul>
	);
};

// ==============================
// Types™
// ==============================

FormPodContactList.propTypes = {
	/**
	 * An array of contact detail data (objects).
	 */
	items: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.func.isRequired,
			iconColor: PropTypes.string,
			text: PropTypes.string.isRequired,
			url: PropTypes.string.isRequired,
			onClick: PropTypes.func,
		})
	),
};

FormPodContactList.defaultProps = {};

/** @jsx jsx */

import React from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

/**
 * FormPodHeader
 */
export const FormPodHeader = ({ align, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				position: 'relative',
				textAlign: align,
				...formPod.header,
			})}
			{...props}
		/>
	);
};

/**
 * FormPodHeaderIcon
 */
export const FormPodHeaderIcon = ({ icon: Icon, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const style = {
		position: [null, 'absolute'],
		right: [null, 0],
		bottom: [null, 0],
		display: 'inline-block',
		border: `${formPod.icon.borderWidth}px solid ${formPod.icon.borderColor}`,
		backgroundColor: formPod.icon.backgroundColor,
		borderRadius: '50%',
		width: formPod.icon.width, //6.6rem
		height: formPod.icon.width, //6.6rem
		padding: formPod.icon.padding, //1.4rem, assuming a 3.6rem icon
		textAlign: 'center',
		marginBottom: formPod.icon.marginBottom,
	};

	return <Icon css={mq(style)} size="large" {...props} />;
};

/**
 * FormPodPreheading
 */
export const FormPodPreheading = ({ tag: Tag, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	return (
		<Tag
			css={mq({
				display: [null, null, 'none'],
				...formPod.preheading,
			})}
			{...props}
		/>
	);
};

/**
 * FormPodHeading
 */
export const FormPodHeading = ({ tag: Tag, ...props }) => {
	const { formPod } = useTheme();

	return <Tag css={{ ...formPod.heading }} {...props} />;
};

/**
 * FormPodActionsPrimary
 */
export const FormPodActionsPrimary = props => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				display: ['flex', 'block'],
				flex: '0 0 auto',
				justifyContent: 'space-between',
				marginLeft: [null, 'auto'], //flex auto-position right
			})}
			{...props}
		/>
	);
};

/**
 * FormPodActionsSecondary
 */
export const FormPodActionsSecondary = props => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	return (
		<div
			css={mq({
				flex: 1,
				marginTop: ['1.2rem', 0],
				marginRight: [null, '2.4rem'],
			})}
			{...props}
		/>
	);
};

/**
 * FormPodContactListItem
 */
export const FormPodContactListItem = ({ item, ...props }) => {
	const { breakpoints, colors } = useTheme();
	const mq = paint(breakpoints);

	const Icon = item.icon;

	// Set default icon color
	const iconColor = item.iconColor === undefined ? colors.primary.default : item.color;

	const style = {
		link: {
			display: 'inline-block',
			color: 'inherit',
			textDecoration: 'none',
			verticalAlign: 'middle',
		},
		icon: {
			// marginRight: [null, '1.2rem'], //TODO: multiple contact items?
			marginRight: '1.2rem',
		},
		text: {
			// display: ['none', 'inline'], //TODO: multiple contact items?
			verticalAlign: 'middle',
		},
	};

	return (
		<li css={{ display: 'inline-block' }} {...props}>
			<a href={item.url} css={style.link} onClick={item.onClick}>
				{Icon && <Icon size="medium" css={mq(style.icon)} color={iconColor} />}
				<span css={mq(style.text)}>{item.text}</span>
			</a>
		</li>
	);
};

// ==============================
// Types
// ==============================

/**
 * FormPodHeader
 */
const formPodHeaderOptions = { align: ['left', 'right', 'center'] };
FormPodHeader.propTypes = {
	/**
	 * Header content alignment.
	 */
	align: PropTypes.oneOfType([
		PropTypes.oneOf(formPodHeaderOptions.align),
		PropTypes.arrayOf(PropTypes.oneOf(formPodHeaderOptions.align)),
	]),
};
FormPodHeader.defaultProps = {
	align: 'left',
};

/**
 * FormPodHeaderIcon
 */
FormPodHeaderIcon.propTypes = {
	/**
	 * Header icon
	 */
	icon: PropTypes.func,
};
FormPodHeaderIcon.defaultProps = {};

/**
 * FormPodPreheading
 */
FormPodPreheading.propTypes = {
	/**
	 * The pre-heading tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
FormPodPreheading.defaultProps = {
	tag: 'p',
};

/**
 * FormPodHeading
 */
FormPodHeading.propTypes = {
	/**
	 * The heading tag
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
FormPodHeading.defaultProps = {
	tag: 'h1',
};

/**
 * FormPodContactListItem
 */
FormPodContactListItem.propTypes = {
	/**
	 * The contact list item data
	 */
	item: PropTypes.shape({
		icon: PropTypes.func.isRequired,
		iconColor: PropTypes.string,
		text: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		onClick: PropTypes.func,
	}),
};
FormPodContactListItem.defaultProps = {};

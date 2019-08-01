/** @jsx jsx */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { jsx, useTheme, paint } from '@westpac/core';

export const FormPodHeader = ({ align, ...props }) => {
	const { breakpoints } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		position: 'relative',
		marginBottom: [24, 24, 30],
		textAlign: align,
	};

	return <div css={mq(common)} {...props} />;
};

export const FormPodIcon = ({ icon: Icon, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		position: [null, 'absolute'],
		right: [null, 0],
		bottom: [null, 0],
		display: 'inline-block',
		border: `${formPod.icon.borderWidth} solid ${formPod.icon.borderColor}`,
		backgroundColor: formPod.icon.backgroundColor,
		borderRadius: '50%',
		width: formPod.icon.width, //6.6rem
		height: formPod.icon.width, //6.6rem
		padding: formPod.icon.padding, //1.4rem, assuming a 3.6rem icon
		textAlign: 'center',
		marginBottom: formPod.icon.marginBottom,
	};

	return <Icon css={mq(common)} size="large" {...props} />;
};

export const FormPodPreheading = ({ tag: Tag, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		display: [null, null, 'none'],
		...formPod.preheading,
	};

	return <Tag css={mq(common)} {...props} />;
};

export const FormPodHeading = ({ tag: Tag, ...props }) => {
	const { formPod } = useTheme();

	const common = {
		...formPod.heading,
	};

	return <Tag css={common} {...props} />;
};

export const FormPodPanelInner = ({ expanded, ...props }) => {
	const { breakpoints, formPod } = useTheme();
	const mq = paint(breakpoints);

	const common = {
		...formPod.panelInner[expanded ? 'expanded' : 'default'],
	};

	return <div css={mq(common)} {...props} />;
};

// ==============================
// Types
// ==============================

const formPodHeaderOptions = {
	align: ['left', 'right', 'center'],
};
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

FormPodPreheading.propTypes = {
	/**
	 * The pre-heading tag.
	 *
	 * Defaults to "p"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
FormPodPreheading.defaultProps = {
	tag: 'p',
};

FormPodHeading.propTypes = {
	/**
	 * The heading tag.
	 *
	 * Defaults to "h1"
	 */
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};
FormPodHeading.defaultProps = {
	tag: 'h1',
};

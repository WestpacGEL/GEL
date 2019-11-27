/** @jsx jsx */

import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { useModalContext } from './Modal';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ModalHeader = ({ overrides: overridesComponent, children, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const { titleId, handleClose } = useModalContext();

	const overrides = {
		Header: props => <div {...props} />,
		Title: props => <span {...props} />,
		CloseBtn,
	};

	merge(overrides, overridesWithTokens, overridesComponent);

	return (
		<overrides.Header
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				overflow: 'hidden',
				borderBottom: `1px solid ${COLORS.border}`,
				padding: '1rem 1.5rem 0.75rem',
			}}
			{...props}
		>
			<overrides.Title
				id={titleId}
				css={{
					fontSize: '1.125rem',
					fontWeight: 700,
					color: COLORS.text,
				}}
			>
				{children}
			</overrides.Title>
			<overrides.CloseBtn
				onClick={handleClose}
				icon={CloseIcon}
				css={{
					marginTop: '-0.3125rem',
					marginRight: '-0.625rem',
					color: COLORS.text,
					':hover svg': {
						opacity: 0.5,
					},
				}}
			/>
		</overrides.Header>
	);
};

// ==============================
// Types
// ==============================
ModalHeader.propTypes = {
	/**
	 * ModalHeader overrides
	 */
	overrides: PropTypes.shape({
		Header: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
		Title: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
		CloseBtn: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
	}),

	/**
	 * Children
	 */
	children: PropTypes.node,
};

// ==============================
// Styled Components
// ==============================
const CloseBtn = ({ onClose, icon, ...props }) => (
	<Button iconAfter={icon} look="link" {...props} />
);

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
	const { dismissible, titleId, handleClose } = useModalContext();

	const overrides = {
		Header: props => <div {...props} />,
		Title: props => <span {...props} />,
		CloseBtn,
	};

	merge(overrides, overridesWithTokens, overridesComponent);

	return (
		<overrides.Header
			css={{
				borderBottom: `1px solid ${COLORS.hero}`,
				padding: '1.5rem 2.25rem 1.125rem 1.5rem',
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
			{dismissible && (
				<overrides.CloseBtn
					onClick={handleClose}
					icon={CloseIcon}
					css={{
						position: 'absolute',
						top: '0.375rem',
						right: '0.75rem',
						color: COLORS.text,
						':hover svg': {
							opacity: 0.5,
						},
					}}
				/>
			)}
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
	<Button look="link" iconAfter={icon} {...props} />
);

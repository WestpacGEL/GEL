/** @jsx jsx */

import { jsx, useBrand, merge } from '@westpac/core';
import { CloseIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { useModalContext } from './Modal';
import pkg from '../package.json';

// ==============================
// Component
// ==============================
export const ModalHeader = ({ children, ...props }) => {
	const { COLORS, [pkg.name]: overridesWithTokens } = useBrand();
	const { titleId, handleClose } = useModalContext();

	const overrides = {
		Header,
		Title,
		CloseBtn,
	};

	merge(overrides, overridesWithTokens);

	return (
		<overrides.Header>
			<overrides.Title id={titleId}>{children}</overrides.Title>
			<overrides.CloseBtn
				onClose={handleClose}
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
// Styled Components
// ==============================
const Header = props => {
	const { COLORS } = useBrand();
	return (
		<div
			css={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				overflow: 'hidden',
				borderBottom: `1px solid ${COLORS.border}`,
				padding: '1rem 1.5rem 0.75rem',
			}}
			{...props}
		/>
	);
};

const Title = props => {
	const { COLORS } = useBrand();
	return (
		<span
			css={{
				fontSize: '1.125rem',
				fontWeight: 700,
				color: COLORS.text,
			}}
			{...props}
		/>
	);
};

const CloseBtn = ({ onClose, icon, ...props }) => (
	<Button onClick={() => onClose()} iconAfter={icon} look="link" {...props} />
);

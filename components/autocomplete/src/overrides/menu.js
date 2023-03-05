import { useBrand } from '@westpac/core';

// ==============================
// Component
// ==============================

const Menu = (props) => {
	const { children, className, cx, getStyles, innerRef, innerProps, selectProps } = props;
	const { footer } = selectProps;
	return (
		<div
			css={getStyles('menu', props)}
			className={cx({ menu: true }, className)}
			ref={innerRef}
			{...innerProps}
		>
			{children}
			{footer.content && (
				<footer.component css={footer.styles()}>
					<footer.content />
				</footer.component>
			)}
		</div>
	);
};

// ==============================
// Styles
// ==============================

const menuStyles = () => {
	const { COLORS } = useBrand();
	return {
		marginTop: '-1px',
		border: `1px solid ${COLORS.hero}`,
		borderRadius: '0 0 3px 3px',
		background: '#fff',
		boxShadow: '0 6px 12px rgb(0 0 0 / 18%)',
		position: 'absolute',
		top: '100%',
		left: 0,
		right: 0,
		zIndex: 1,
	};
};

// ==============================
// Attributes
// ==============================

const menuAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultMenu = {
	component: Menu,
	styles: menuStyles,
	attributes: menuAttributes,
};

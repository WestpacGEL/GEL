// ==============================
// Component
// ==============================

const ValueContainer = (props) => {
	const { children, className, cx, innerProps, isMulti, getStyles, hasValue } = props;

	return (
		<div
			css={getStyles('valueContainer', props)}
			className={cx(
				{
					'value-container': true,
					'value-container--is-multi': isMulti,
					'value-container--has-value': hasValue,
				},
				className
			)}
			{...innerProps}
		>
			{children}
		</div>
	);
};

// ==============================
// Styles
// ==============================

const valueContainerStyles = (_, { provided }) => {
	const styles = { ...provided };
	delete styles.padding;

	return styles;
};

// ==============================
// Attributes
// ==============================

const valueContainerAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultValueContainer = {
	component: ValueContainer,
	styles: valueContainerStyles,
	attributes: valueContainerAttributes,
};

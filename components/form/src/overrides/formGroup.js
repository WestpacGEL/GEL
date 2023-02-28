import { jsx, useMediaQuery, getLabel } from '@westpac/core';

// ==============================
// Component
// ==============================

const FormGroup = ({ state: _, ...rest }) => <div {...rest} />;

// ==============================
// Styles
// ==============================

const formGroupStyles = (_, { primary, inline, spacing }) => {
	const mq = useMediaQuery();

	const mapSpacing = {
		medium: {
			marginBottom: '1.125rem',
		},
		large: {
			marginBottom: ['1.5rem', '1.875rem'],
		},
	};

	return mq({
		label: getLabel('form-group'),
		display: inline && [null, 'inline-block'],
		verticalAlign: inline && [null, 'middle'],
		marginBottom: inline
			? [((mb) => (Array.isArray(mb) ? mb[0] : mb))(mapSpacing[spacing].marginBottom), 0]
			: mapSpacing[spacing].marginBottom,
		textAlign: primary && 'center',

		'& + &': {
			marginLeft: inline && [null, '0.375rem'],
		},
	})[0];
};

// ==============================
// Attributes
// ==============================

const formGroupAttributes = () => null;

// ==============================
// Exports
// ==============================

export const defaultFormGroup = {
	component: FormGroup,
	styles: formGroupStyles,
	attributes: formGroupAttributes,
};

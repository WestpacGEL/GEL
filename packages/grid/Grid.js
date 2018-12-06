import { styled } from '@westpac/core/theme';

const Element = styled.button(({ brand, theme }) => ({
	appearance: 'none',
	color: 'white',
	display: 'inline-flex',
	fontSize: 'inherit',
	position: 'relative',
	textDecoration: 'none',
	textAlign: 'center',

	'&:hover': {
		background: theme.link,
	},
}));

export const Button = ({ ...props }) => {
	const as = props.href ? 'a' : 'button';
	return <Element as={as} {...props} />;
};

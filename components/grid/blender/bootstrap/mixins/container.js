// Container mixins

export const makeContainer = (paddingX) => ({
	boxSizing: 'border-box',
	width: '100%',
	paddingLeft: paddingX,
	paddingRight: paddingX,
	marginLeft: 'auto',
	marginRight: 'auto',
});

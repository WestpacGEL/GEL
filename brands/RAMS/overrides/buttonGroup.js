export const buttonGroup = () => ({
	Button: {
		styles: (styles, {}) => ({
			...styles,

			borderWidth: '1px', //reapply border width (removed for RAMS)
			backgroundImage: 'none', //remove RAMS bottom bar
		}),
	},
});

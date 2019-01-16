import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// TODO: is there a useful "default" value we should add here?
export const ThemeContext = createContext();

export const useTheme = () => {
	const themeObj = useContext(ThemeContext);

	if (!themeObj) {
		throw new Error(
			`It looks like you're trying to use a GEL component without wrapping your application with the theme provider.`
		);
	}

	return themeObj;
};

export const GEL = ({ brand, ...props }) => <ThemeContext.Provider value={brand} {...props} />;

GEL.propTypes = {
	// TODO `object` --> `shape`
	brand: PropTypes.oneOfType([
		PropTypes.shape({
			breakpoints: PropTypes.shape({
				xs: PropTypes.number,
				sm: PropTypes.number,
				md: PropTypes.number,
				lg: PropTypes.number,
			}),
			colors: PropTypes.shape({
				background: PropTypes.string,
				border: PropTypes.string,
				heading: PropTypes.string,
				light: PropTypes.string,
				muted: PropTypes.string,
				neutral: PropTypes.string,
				text: PropTypes.string,

				// reserved
				success: PropTypes.string,
				information: PropTypes.string,
				warning: PropTypes.string,
				danger: PropTypes.string,

				// nested
				hero: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				primary: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
			}),
			type: PropTypes.object, // TODO
			spacing: PropTypes.object, // TODO
		}),
		PropTypes.func,
	]),
};

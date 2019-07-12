import React, { createContext, useContext } from 'react';
import PropTypes from 'prop-types';

// TODO: is there a useful "default" value we should add here?
export const ThemeContext = createContext();

export const useTheme = () => {
	const themeObject = useContext(ThemeContext);
	const errorMessage = `GEL components require that you wrap your application with the <GEL /> theme provider from @westpac/core.`;

	if (!themeObject) {
		throw new Error(errorMessage);
	}

	return themeObject;
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
				borderDark: PropTypes.string,
				focus: PropTypes.string,
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

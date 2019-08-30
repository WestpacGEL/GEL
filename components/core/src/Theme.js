/** @jsx jsx */

import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { jsx } from '@emotion/core';
import { Core } from './Core';

// TODO: is there a useful "default" value we should add here?
export const ThemeContext = createContext();

export const UserModeContext = createContext(false);

export const useTheme = () => {
	const themeObject = useContext(ThemeContext);
	const errorMessage = `GEL components require that you wrap your application with the <GEL /> theme provider from @westpac/core.`;

	if (!themeObject) {
		throw new Error(errorMessage);
	}

	return themeObject;
};

export const useIsKeyboardUser = () => {
	const [isKeyboardUser, setIsKeyboardUser] = useState(false);

	// Handle keys
	const keyHandler = event => {
		if (event.key === 'Tab') {
			setIsKeyboardUser(true);
			document.removeEventListener('keydown', keyHandler);
		}
	};

	// Bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	}, []);

	return isKeyboardUser;
};

// ==============================
// Component
// ==============================

export const GEL = ({ brand, children, ...props }) => {
	const isKeyboardUser = useIsKeyboardUser();

	return (
		<UserModeContext.Provider value={isKeyboardUser} {...props}>
			<ThemeContext.Provider value={brand} {...props}>
				<Core>{children}</Core>
			</ThemeContext.Provider>
		</UserModeContext.Provider>
	);
};

// ==============================
// Component
// ==============================

export const GEL = ({ brand, children, ...props }) => {
	return (
		<ThemeContext.Provider value={brand} {...props}>
			<Brand>{children}</Brand>
		</ThemeContext.Provider>
	);
};

GEL.propTypes = {
	// TODO `object` --> `shape`
	brand: PropTypes.oneOfType([
		PropTypes.shape({
			breakpoints: PropTypes.shape({
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
				primary: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				hero: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				neutral: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				faint: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				success: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				information: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				warning: PropTypes.shape({
					default: PropTypes.string,
					foreground: PropTypes.string,
				}),
				danger: PropTypes.shape({
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

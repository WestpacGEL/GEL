/** @jsx jsx */

import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { WBCLogo, WBGLogo, STGLogo, BOMLogo, BSALogo, RAMSLogo } from '@westpac/symbol';
import PropTypes from 'prop-types';

// ==============================
// Utils
// ==============================

const Inner = (props) => {
	const mq = useMediaQuery();
	return (
		<div
			css={mq({
				position: 'relative',
				flex: 1,
				backgroundColor: '#fff',
				textAlign: 'left',
				marginLeft: 'auto',
				marginRight: 'auto',
				marginBottom: '1px',
				display: 'flex',
				height: ['3.375rem', null, '4.0625rem'],
				padding: ['0 0.75rem', null, '0 1.5rem'],
				width: '100%',
				'::before': {
					content: '""',
					display: 'block',
					position: 'absolute',
					zIndex: '1',
					left: 0,
					right: 0,
					top: '100%',
					overflow: 'hidden',
					borderTop: '1px solid #e8e8ed', // where is this color from
					transition: 'opacity .2s',
					willChange: 'opacity',
				},
			})}
			{...props}
		/>
	);
};

const LogoLink = (props) => {
	return <a href="#" css={{ display: 'inline-flex', alignItems: 'center' }} {...props} />;
};

// ==============================
// Component
// ==============================

export const Header = ({ logo, logoLink, arrow, hamburger, right, ...rest }) => {
	const { BRAND } = useBrand();

	const logoMap = {
		WBC: WBCLogo,
		WBG: WBGLogo,
		STG: STGLogo,
		BOM: BOMLogo,
		BSA: BSALogo,
		RAMS: RAMSLogo,
	};

	const Logo = logoMap[BRAND.code];

	// need to add in skiplinks at some point

	return (
		<header css={{ display: 'flex', flex: 'none' }} {...rest}>
			<Inner>
				<LogoLink>
					<Logo />
				</LogoLink>
			</Inner>
		</header>
	);
};

// ==============================
// Types
// ==============================

Header.propTypes = {
	/**
	 * Describe `someProperty` here
	 */
	someProperty: PropTypes.string,
};

Header.defaultProps = {};

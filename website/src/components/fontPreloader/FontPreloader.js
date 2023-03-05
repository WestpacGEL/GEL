import { jsx, Global, css } from '@westpac/core';
import { Fragment } from 'react';
import NextHead from 'next/head';

import { BASE_URL } from '../../config.js';

// Note from Dom:
// I entirely object to the code below.
// I feel it's not great that we force all visitors to download all fonts.
// This is a huge anti pattern and goes against anything that is accessibility.

export const FontPreloader = ({ title = '', ...rest }) => {
	return (
		<Fragment>
			<NextHead {...rest}>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/Aller_Bd.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/Aller_Lt.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/dragonbold-bold-webfont.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/lineto-brown-pro-bold.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/lineto-brown-pro-light.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/lineto-brown-pro-regular.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/montserrat-v14-latin-300.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/montserrat-v14-latin-700.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/montserrat-v14-latin-regular.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/source-sans-pro-v14-latin-600.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/source-sans-pro-v14-latin-700.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/source-sans-pro-v14-latin-regular.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
				<link
					rel="preload"
					href={`${BASE_URL}/fonts/Westpac-Bold-v2.007.woff2`}
					as="font"
					type="font/woff2"
					crossOrigin=""
				/>
			</NextHead>
			<Global
				styles={[
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/lineto-brown-pro-light.woff2') format('woff2'), url('${BASE_URL}/fonts/lineto-brown-pro-light.woff') format('woff')`,
							fontFamily: "'brandFontBOM'",
							fontWeight: '300',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/lineto-brown-pro-regular.woff2') format('woff2'), url('${BASE_URL}/fonts/lineto-brown-pro-regular.woff') format('woff')`,
							fontFamily: "'brandFontBOM'",
							fontWeight: '400',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/lineto-brown-pro-bold.woff2') format('woff2'), url('${BASE_URL}/fonts/lineto-brown-pro-bold.woff') format('woff')`,
							fontFamily: "'brandFontBOM'",
							fontWeight: '700',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/Aller_Lt.woff2') format('woff2'), url('${BASE_URL}/fonts/Aller_Lt.woff') format('woff')`,
							fontFamily: "'brandFontBSA'",
							fontWeight: '300',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/Aller_Bd.woff2') format('woff2'), url('${BASE_URL}/fonts/Aller_Bd.woff') format('woff')`,
							fontFamily: "'brandFontBSA'",
							fontWeight: '700',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/source-sans-pro-v14-latin-regular.woff2') format('woff2'), url('${BASE_URL}/fonts/source-sans-pro-v14-latin-regular.woff') format('woff')`,
							fontFamily: "'brandFontRAMS'",
							fontWeight: '400',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/source-sans-pro-v14-latin-600.woff2') format('woff2'), url('${BASE_URL}/fonts/source-sans-pro-v14-latin-600.woff') format('woff')`,
							fontFamily: "'brandFontRAMS'",
							fontWeight: '600',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/source-sans-pro-v14-latin-700.woff2') format('woff2'), url('${BASE_URL}/fonts/source-sans-pro-v14-latin-700.woff') format('woff')`,
							fontFamily: "'brandFontRAMS'",
							fontWeight: '700',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/dragonbold-bold-webfont.woff2') format('woff2'), url('${BASE_URL}/fonts/dragonbold-bold-webfont.woff') format('woff')`,
							fontFamily: "'brandFontSTG'",
							fontWeight: '400',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/Westpac-Bold-v2.007.woff2') format('woff2'), url('${BASE_URL}/fonts/Westpac-Bold-v2.007.woff') format('woff')`,
							fontFamily: "'brandFontWBC'",
							fontWeight: '400',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/montserrat-v14-latin-300.woff2') format('woff2'), url('${BASE_URL}/fonts/montserrat-v14-latin-300.woff') format('woff')`,
							fontFamily: "'brandFontWBG'",
							fontWeight: '300',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/montserrat-v14-latin-regular.woff2') format('woff2'), url('${BASE_URL}/fonts/montserrat-v14-latin-regular.woff') format('woff')`,
							fontFamily: "'brandFontWBG'",
							fontWeight: '400',
							fontStyle: 'normal',
						},
					},
					{
						'@font-face': {
							src: `url('${BASE_URL}/fonts/montserrat-v14-latin-700.woff2') format('woff2'), url('${BASE_URL}/fonts/montserrat-v14-latin-700.woff') format('woff')`,
							fontFamily: "'brandFontWBG'",
							fontWeight: '700',
							fontStyle: 'normal',
						},
					},
				]}
			/>
			<div
				aria-hidden="true"
				css={{
					position: 'absolute !important',
					width: '1px !important',
					height: '1px !important',
					padding: '0 !important',
					margin: '-1px !important',
					overflow: 'hidden !important',
					clip: 'rect(0,0,0,0) !important',
					whiteSpace: 'nowrap !important',
					border: '0 !important',
					color: '#fff !important',
				}}
			>
				<span css={{ fontFamily: 'brandFontBOM', fontWeight: 300 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontBOM', fontWeight: 400 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontBOM', fontWeight: 700 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontBSA', fontWeight: 300 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontBSA', fontWeight: 700 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontRAMS', fontWeight: 400 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontRAMS', fontWeight: 600 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontRAMS', fontWeight: 700 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontSTG', fontWeight: 400 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontWBC', fontWeight: 400 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontWBG', fontWeight: 300 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontWBG', fontWeight: 400 }}>Font loading</span>
				<span css={{ fontFamily: 'brandFontWBG', fontWeight: 700 }}>Font loading</span>
			</div>
		</Fragment>
	);
};

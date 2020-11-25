import React, { Fragment } from 'react';

const fontTextWBC = () => (
	<Fragment>
		<p>
			Check the <a href="#0">Masterbrand Guidelines</a> to understand how to use brand fonts
			effectively. Never use a font without confirmation that you have the correct licence in place.
		</p>
		<p>
			Designers using Sketch can access brand font files within the <a href="#0">Sketch UI Kit</a>.
		</p>
		<p>
			Designers using other software can send a request for approval to{' '}
			<a href="mailto:brand@westpac.com.au">brand@westpac.com.au</a>.
		</p>
	</Fragment>
);
const fontTextSTG = () => (
	<Fragment>
		<p>
			Check the <a href="#0">Masterbrand Guidelines</a> to understand how to use brand fonts
			effectively. Never use a font without confirmation that you have the correct licence in place.
		</p>
		<p>
			Designers using Sketch can access brand font files within the <a href="#0">Sketch UI Kit</a>.
		</p>
		<p>
			Designers using other software can send a request for approval to{' '}
			<a href="http://stgeorge.mybrandmachine.com" target="_blank">
				Brand Central
			</a>
			.
		</p>
	</Fragment>
);
const fontTextBOM = () => (
	<Fragment>
		<p>
			Check the <a href="#0">Masterbrand Guidelines</a> to understand how to use brand fonts
			effectively. Never use a font without confirmation that you have the correct licence in place.
		</p>
		<p>
			Send a request for approval to{' '}
			<a href="mailto:bombrand@bankofmelbourne.com.au">bombrand@bankofmelbourne.com.au</a>.
		</p>
	</Fragment>
);
const fontTextBSA = () => (
	<Fragment>
		<p>
			Check the <a href="#0">Masterbrand Guidelines</a> to understand how to use brand fonts
			effectively. Never use a font without confirmation that you have the correct licence in place.
		</p>
		<p>
			Send a request for approval to{' '}
			<a href="mailto:banksabrandandmarketing@banksa.com.au">
				banksabrandandmarketing@banksa.com.au
			</a>
			.
		</p>
	</Fragment>
);
const fontTextWBG = () => (
	<Fragment>
		<p>
			Check the <a href="#0">Masterbrand Guidelines</a> to understand how to use brand fonts
			effectively.
		</p>
		<p>
			<a href="https://fonts.google.com/specimen/Montserrat" target="_blank">
				Download Montserrat
			</a>
			.
		</p>
	</Fragment>
);

export const getBrandContent = () => ({
	WBC: {
		guidelinesURL: '#0',
		fontText: fontTextWBC,
	},
	STG: {
		guidelinesURL: '#0',
		fontText: fontTextSTG,
	},
	BOM: {
		guidelinesURL: '#0',
		fontText: fontTextBOM,
	},
	BSA: {
		guidelinesURL: '#0',
		fontText: fontTextBSA,
	},
	WBG: {
		guidelinesURL: '#0',
		fontText: fontTextWBG,
	},
});

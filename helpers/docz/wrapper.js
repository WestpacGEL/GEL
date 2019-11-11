import React from 'react';
import { GEL } from '@westpac/core';
import defaultBrand from '@westpac/wbc';
import { BrowserRouter as Router } from 'react-router-dom';

export default function({ children }) {
	return (
		<Router>
			<GEL brand={defaultBrand}>
				<style>{`
				.react-live-preview {
					height: 100%;
				}
			`}</style>
				{children}
			</GEL>
		</Router>
	);
}

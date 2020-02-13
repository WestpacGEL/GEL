/** @jsx jsx */
import { jsx, GEL } from '@westpac/core';
import bom from '@westpac/bom';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = ({
	brand = bom,
	context = null,
	code,
	children,
	scope,
	inline,
	theme = {},
}) => {
	if (!code && children.length > 1) {
		console.warn(
			'Playground code has not been compiled by the babel plugin. Please check configuration.'
		);
	}
	if (!context) {
		return (
			<GEL brand={brand}>
				<LiveProvider code={code} scope={scope} noInline={inline}>
					<LiveError css={theme.errors} />
					<LivePreview />
				</LiveProvider>
			</GEL>
		);
	}
	if (context === 'editor') {
		return (
			<LiveProvider code={code} scope={scope} noInline={inline}>
				<LivePreview css={theme.preview} />
				<div>
					<LiveError css={theme.errors} />
				</div>
				<LiveEditor css={theme.editor} />
			</LiveProvider>
		);
	}
	if (context === 'admin') {
		return <p>Code example</p>;
	}
};

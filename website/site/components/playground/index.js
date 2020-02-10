/** @jsx jsx */
import { jsx, GEL } from '@westpac/core';
import bom from '@westpac/bom';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = ({
	brand = bom,
	editor = false,
	code,
	children,
	scope,
	inline,
	theme = {},
}) => {
	console.log({ editor, inline });
	console.log(code);
	if (!code && children.length > 1) {
		console.warning(
			'Playground code has not been compiled by the babel plugin. Please check configuration.'
		);
	}
	if (editor) {
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
	return (
		<GEL brand={brand}>
			<LiveProvider code={code} scope={scope} noInline={inline}>
				<LiveError css={theme.errors} />
				<LivePreview />
			</LiveProvider>
		</GEL>
	);
};

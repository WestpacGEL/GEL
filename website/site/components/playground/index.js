/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const Playground = ({ editor = false, code, children, scope, inline, theme = {} }) => {
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
		<LiveProvider code={code} scope={scope} noInline={inline}>
			<LivePreview />
		</LiveProvider>
	);
};

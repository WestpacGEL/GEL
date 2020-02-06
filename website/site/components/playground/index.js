/** @jsx jsx */
import { jsx } from '@westpac/core';
import { Fragment } from 'react';
import jsxString from 'react-element-to-jsx-string';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

function renderCode(code) {
	return jsxString(code, { maxInlineAttributesLineLength: 100, showFunctions: true });
}

export const Playground = ({ editor = false, children, scope, theme = {} }) => {
	let code = '';
	let inline = false;

	if (typeof children === 'string') {
		code = children;
		inline = true;
	} else {
		if (children.length > 1) {
			code = renderCode(<Fragment>{children}</Fragment>);
		} else {
			code = renderCode(children);
		}
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

/** @jsx jsx */
import { jsx } from '@westpac/core';
// import jsxString from 'react-element-to-jsx-string';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

// function renderCode(code) {
// 	return jsxString(code, { maxInlineAttributesLineLength: 100, showFunctions: true });
// }
// renderCode(children)
const Playground = ({ children, scope, theme = {} }) => (
	<LiveProvider code={'<Test/>'} scope={scope}>
		<LivePreview css={theme.preview} />
		<div>
			<LiveError css={theme.errors} />
		</div>
		<LiveEditor css={theme.editor} />
	</LiveProvider>
);

export { Playground };

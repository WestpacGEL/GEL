import React from 'react';
import isHotkey from 'is-hotkey';

import { BoldIcon, CodeIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from './toolbar-icons';

function markPlugin(type, options) {
	return {
		onKeyDown(event, editor, next) {
			// If it doesn't match our `key`, let other plugins handle it.
			if (!options.test(event)) return next();
			// Prevent the default characters from being inserted.
			event.preventDefault();
			// Toggle the mark `type`.
			editor.toggleMark(type);
		},
		renderMark: (props, editor, next) => {
			if (props.mark.type === type) {
				return options.render(props);
			}
			return next();
		},
	};
}

// NOTE: `level` determines whether the mark should be displayed at all times in
// the toolbar or be pushed into a dropdown menu

export let marks = {
	bold: {
		test: isHotkey('mod+b'),
		keyboard: keyComboText('b'),
		label: 'Bold',
		icon: BoldIcon,
		level: 'primary',
		render: (props) => <strong {...props.attributes}>{props.children}</strong>,
	},
	italic: {
		test: isHotkey('mod+i'),
		keyboard: keyComboText('i'),
		label: 'Italic',
		icon: ItalicIcon,
		level: 'primary',
		render: (props) => <em {...props.attributes}>{props.children}</em>,
	},
	strikethrough: {
		test: isHotkey('mod+~'),
		keyboard: keyComboText('~'),
		label: 'Strikethrough',
		icon: StrikethroughIcon,
		level: 'secondary',
		render: (props) => <s {...props.attributes}>{props.children}</s>,
	},
	underline: {
		test: isHotkey('mod+u'),
		keyboard: keyComboText('u'),
		label: 'Underline',
		icon: UnderlineIcon,
		level: 'secondary',
		render: (props) => <u {...props.attributes}>{props.children}</u>,
	},
	code: {
		test: noop,
		keyboard: noop,
		label: 'Code',
		icon: CodeIcon,
		level: 'secondary',
		render: (props) => <code {...props.attributes}>{props.children}</code>,
	},
};

export let markTypes = Object.keys(marks);

export let plugins = Object.entries(marks).map(([type, options]) => {
	return markPlugin(type, options);
});

// Utils
// ------------------------------

function noop() {}

const IS_MAC =
	typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

function keyComboText(key) {
	return function getKbdKey() {
		if (IS_MAC) {
			return `⌘${key.toUpperCase()}`;
		}

		return `Ctrl+${key.toUpperCase()}`;
	};
}

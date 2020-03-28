/** @jsx jsx */

import { jsx } from '@emotion/core';
import { Fragment } from 'react';
import { marks, markTypes } from './marks';
import { ToolbarButton } from './toolbar-components';
import { CircleSlashIcon } from '@arch-ui/icons';
import { colors, gridSize } from '@arch-ui/theme';

export default function Toolbar({ blocks, editor, editorState }) {
	return (
		<div
			css={{
				backgroundColor: 'white',
				boxShadow: '0px 2px 0px rgba(23,43,77,0.1)',
				color: colors.N90,
				display: 'flex',
				marginBottom: gridSize * 2,
				padding: `${gridSize * 2}px 0`,
				position: 'sticky',
				top: 0,
				zIndex: 1,
			}}
		>
			{Object.keys(blocks)
				.map(x => blocks[x].withChrome && blocks[x].Toolbar)
				.filter(x => x)
				.reduce(
					(children, Toolbar) => {
						return (
							<Toolbar editor={editor} editorState={editorState}>
								{children}
							</Toolbar>
						);
					},
					<Fragment>
						{Object.keys(marks).map(name => {
							let Icon = marks[name].icon;
							return (
								<ToolbarButton
									label={marks[name].label}
									icon={<Icon />}
									isActive={editorState.activeMarks.some(mark => mark.type === name)}
									onClick={() => {
										editor.toggleMark(name);
										editor.focus();
									}}
									key={name}
								/>
							);
						})}
						<ToolbarButton
							label="Remove Formatting"
							icon={<CircleSlashIcon />}
							onClick={() => {
								markTypes.forEach(mark => {
									editor.removeMark(mark);
								});
								editor.focus();
							}}
						/>

						{Object.keys(blocks).map(type => {
							let ToolbarElement = blocks[type].ToolbarElement;
							if (!blocks[type].withChrome || ToolbarElement === undefined) {
								return null;
							}
							return <ToolbarElement key={type} editor={editor} editorState={editorState} />;
						})}
					</Fragment>
				)}
		</div>
	);
}

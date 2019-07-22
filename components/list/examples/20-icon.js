import React from 'react';
import { List, ListItem } from '../src';
import { listGenerator } from './_utils';
import { AndroidIcon, GithubIcon } from '../../icon/src';

export default () => {
	return (
		<>
			<h3>Icon</h3>
			<List appearance="icon" icon={AndroidIcon}>
				{listGenerator('Styled icon list', 3)}
				<ListItem>
					Style icon list
					<List>{listGenerator('Styled icon list', 3)}</List>
				</ListItem>
			</List>
			<hr />
			<List appearance="icon" icon={AndroidIcon}>
				{listGenerator('Styled icon list', 3)}
				<ListItem appearance="icon" icon={GithubIcon}>
					Styled icon list
					<List>{listGenerator('Styled icon list', 3)}</List>
				</ListItem>
			</List>
		</>
	);
};

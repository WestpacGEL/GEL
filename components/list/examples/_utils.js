import React from 'react';
import { ListItem } from '../src/ListItem';

export const listGenerator = (text, num) => {
	let list = [];
	for (let i = 0; i < num; i++) {
		list.push(<ListItem>{text}</ListItem>);
	}
	return list;
};

import React from 'react';
import { ListItem } from '../src/ListItem';

export const listGenerator = (text, num) => {
	let list = [];

	for (let i = 0; i < num; i++) {
		list.push(<ListItem key={Math.round((i + 10000) * Math.random())}>{text}</ListItem>);
	}
	return list;
};

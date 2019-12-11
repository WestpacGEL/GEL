/** @jsx jsx */

import { forwardRef } from 'react';
import { GEL, jsx } from '@westpac/core';
import { Tab, Tabcordion } from '@westpac/tabcordion';
import { data } from './_data';

const Panel = forwardRef(({ isLast, isSelected, ...props }, ref) => {
	return (
		<div ref={ref} css={{ backgroundColor: 'black', color: 'white', padding: '1rem' }} {...props} />
	);
});

const TabItem = ({ isSelected, isJustified, isLast, ...props }) => {
	return (
		<button
			css={{
				flex: isJustified ? 1 : 0,
				fontSize: '1rem',
				marginRight: '0.125rem',
				outline: 0,
				padding: '0.875rem 1.125rem',
				textAlign: 'left',
				textDecoration: 'none',
				transition: 'background .3s ease',
				width: '100%',
				border: `1px solid black`,
				backgroundColor: isSelected ? 'black' : 'white',
				borderTopLeftRadius: 3,
				borderTopRightRadius: 3,
				borderBottom: 0,
				color: isSelected ? 'white' : 'black',
				cursor: 'pointer',

				'&:last-child': {
					marginRight: 0,
				},
			}}
			{...props}
		/>
	);
};

const AccordionLabel = ({ isLast, isSelected, ...props }) => {
	return (
		<button
			css={{
				alignItems: 'center',
				backgroundColor: 'white',
				border: 0,
				borderTop: `1px solid black`,
				borderLeft: `1px solid black`,
				borderRight: `1px solid black`,
				cursor: 'pointer',
				display: 'flex',
				fontSize: '1rem',
				justifyContent: 'space-between',
				outline: 0,
				padding: '0.75rem 1.125rem',
				position: 'relative',
				textAlign: 'left',
				width: '100%',
				...(isLast &&
					!isSelected && {
						borderBottom: `1px solid black`,
						borderBottomLeftRadius: 3,
						borderBottomRightRadius: 3,
					}),
			}}
			{...props}
		/>
	);
};

function Example({ brand }) {
	const overridesWithTokens = { ...brand };

	overridesWithTokens['@westpac/tabcordion'] = {
		Panel,
		TabItem,
		AccordionLabel,
	};

	return (
		<GEL brand={overridesWithTokens}>
			<h3>Responsive</h3>
			<Tabcordion>
				{data.map(t => (
					<Tab key={t.text} text={t.text}>
						{t.content}
					</Tab>
				))}
			</Tabcordion>

			<h3>Always accordion</h3>
			<Tabcordion mode="accordion" instanceId="always-accordion">
				{data.map(t => (
					<Tab key={t.text} text={t.text}>
						{t.content}
					</Tab>
				))}
			</Tabcordion>

			<h3>Always tabs</h3>
			<Tabcordion mode="tabs" instanceId="always-tabs">
				{data.map(t => (
					<Tab key={t.text} text={t.text}>
						{t.content}
					</Tab>
				))}
			</Tabcordion>
		</GEL>
	);
}

export default Example;

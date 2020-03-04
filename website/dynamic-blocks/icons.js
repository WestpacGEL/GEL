/** @jsx jsx */
import React, { useState } from 'react'; // Needed for within Keystone
import { jsx } from '@westpac/core';
import * as icons from '@westpac/icon';
import { FieldContainer, FieldInput } from '@arch-ui/fields';
import { inputStyles } from '@arch-ui/input';

const renderIcons = search => {
	const iconDetails = [];
	for (let key in icons) {
		iconDetails.push({ name: key, icon: icons[key] });
	}

	return iconDetails
		.filter(icon =>
			search.trim() === '' ? true : icon.name.toLowerCase().includes(search.toLowerCase())
		)
		.map(icon => {
			const Icon = icon.icon;
			return (
				<div
					css={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
					}}
				>
					<Icon
						css={{
							width: 60,
							height: 60,
							padding: 15,
							background: 'white',
							border: 'solid 1px #eaeaea',
							borderRadius: 5,
						}}
					/>
					<code css={{ fontSize: '0.75rem', marginTop: 5 }}>{`<${icon.name}/>`}</code>
				</div>
			);
		});
};
// ToDo: Elevate the brand in the AdminUI so it doesn't override website
const Icon = () => {
	const [search, setSearch] = useState('');
	return (
		<div>
			<FieldContainer>
				<FieldInput>
					<label htmlFor={'filter-icons'}>Filter by name</label>
					<input
						css={inputStyles}
						type="text"
						id="filter-icons"
						value={search}
						onChange={e => {
							setSearch(e.target.value);
						}}
					/>
				</FieldInput>
			</FieldContainer>
			<div
				css={{
					display: 'grid',
					gridAutoFlow: 'row dense',
					gridTemplateColumns: 'repeat( auto-fit, minmax(130px, 1fr))',
					gridGap: 10,
				}}
			>
				{renderIcons(search)}
			</div>
		</div>
	);
};

export const Icons = {
	component: Icon,
};

import React from 'react';

export default {
	TestComponent: {
		editor: ({ value, onChange }) => {
			return (
				<input
					value={value.value}
					onChange={event => {
						onChange({ value: event.target.value });
					}}
				/>
			);
		},
		component: ({ value }) => value,
	},
};

import React from 'react';
export default function({ children }) {
	return (
		<>
			<style>
				{`
				.PropsTable tr > td:nth-child(3),
				.PropsTable tr > th:nth-child(3) {
					display:none;
				}
			`}
			</style>
			{children}
		</>
	);
}

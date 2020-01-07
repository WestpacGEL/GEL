import React from 'react';

const Homepage = () => {
	return (
		<div>
			<h1
				css={`
					color: red;
					font-size: 30px;
				`}
			>
				This is the landing page, welcome! 👋
			</h1>

			<p>Please select a component from the sidebar!</p>
		</div>
	);
};

export default Homepage;

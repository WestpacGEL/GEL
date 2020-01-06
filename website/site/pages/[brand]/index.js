import React from 'react';
import { useBrandSwitcher } from '../../components/providers/brand-switcher';

const Homepage = () => {
	const { brand } = useBrandSwitcher();
	return (
		<div>
			<h1
				css={`
					color: red;
					font-size: 30px;
				`}
			>
				This is the landing page for {brand}, welcome! 👋
			</h1>
		</div>
	);
};

export default Homepage;

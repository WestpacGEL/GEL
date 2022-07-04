/** @jsx jsx */
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { useRouter } from 'next/router';

const Article = (props) => {
	const router = useRouter();
	const path = router.query.page.join('/');

	return <div>path: {path} yo</div>;
};

export default Article;

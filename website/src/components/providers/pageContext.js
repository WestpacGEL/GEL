import React, { createContext, useContext, useRef, useLayoutEffect, useState } from 'react';
import { Gridly } from '../../components/layout';
import { useRouter } from 'next/router';

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
	const router = useRouter();
	const [showGrid, setShowGrid] = useState(false);
	const pageHeadingRef = useRef();

	// Focus page heading when route changes
	useLayoutEffect(() => {
		pageHeadingRef.current.focus();
	}, [router.asPath]);

	return (
		<PageContext.Provider value={{ showGrid, setShowGrid, pageHeadingRef }}>
			<Gridly show={showGrid} />
			{children}
		</PageContext.Provider>
	);
};

const usePageContext = () => {
	const context = useContext(PageContext);

	if (!context) {
		throw new Error('Cannot call usePageContext from outside of PageContextProvider');
	}

	return context;
};

export { PageContextProvider, usePageContext };

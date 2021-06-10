import React, { createContext, useContext, useState, useRef } from 'react';
import { Gridly } from '../../components/layout';

const PageContext = createContext();

const PageContextProvider = ({ children }) => {
	const [showGrid, setShowGrid] = useState(false);
	const pageHeadingRef = useRef();

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

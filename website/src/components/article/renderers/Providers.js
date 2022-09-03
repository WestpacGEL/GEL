import React, { createContext, useContext } from 'react';

// ============================================================
// Layout Context
// - helper for items to determine what layout they are in i.e. [1,1], [2,1], [1,1,1]
// ============================================================
const LayoutContext = createContext();

export const LayoutContextProvider = (props) => <LayoutContext.Provider {...props} />;

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	return context;
};

// ============================================================
// Layout Context
// - Since layout children are not the direct content child, have to pass index this way...
// ============================================================
const IndexContext = createContext();

export const IndexContextProvider = (props) => <IndexContext.Provider {...props} />;

export const useIndexContext = () => {
	const context = useContext(IndexContext);
	return context;
};

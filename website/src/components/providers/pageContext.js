import { createContext, useContext } from 'react';

export const PageContext = createContext();

export const usePageContext = () => {
	const context = useContext(PageContext);

	return context;
};

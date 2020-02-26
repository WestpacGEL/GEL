import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen }}>{children}</SidebarContext.Provider>
	);
};

const useSidebar = () => {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error('Cannot call useSidebar from outside of SidebarProvider');
	}

	return context;
};

export { SidebarProvider, useSidebar };

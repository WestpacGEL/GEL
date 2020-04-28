import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	return (
		<SidebarContext.Provider value={{ isOpen, setIsOpen, isScrolled, setIsScrolled }}>
			{children}
		</SidebarContext.Provider>
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

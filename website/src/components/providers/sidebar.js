import React, { createContext, useContext, useState, useRef } from 'react';

const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const closeBtnRef = useRef();
	const menuBtnRef = useRef();

	return (
		<SidebarContext.Provider
			value={{ isOpen, setIsOpen, isScrolled, setIsScrolled, closeBtnRef, menuBtnRef }}
		>
			{children}
		</SidebarContext.Provider>
	);
};

const useSidebarContext = () => {
	const context = useContext(SidebarContext);

	if (!context) {
		throw new Error('Cannot call useSidebarContext from outside of SidebarContextProvider');
	}

	return context;
};

export { SidebarContextProvider, useSidebarContext };

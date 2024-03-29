import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { usePageContext } from './pageContext';

const SidebarContext = createContext();

const SidebarContextProvider = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [focusOnCloseRef, setFocusOnCloseRef] = useState({});
	const router = useRouter();

	// Close sidebar when route changes
	useEffect(() => {
		const handleRouteChange = () => {
			if (isOpen) {
				setIsOpen(false);
				setFocusOnCloseRef({});
			}
		};
		router.events.on('routeChangeStart', handleRouteChange);

		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [isOpen, router.events]);

	const open = (ref) => {
		setFocusOnCloseRef(ref);
		setIsOpen(true);
	};

	const close = () => {
		if (isOpen) {
			if (focusOnCloseRef?.current) {
				focusOnCloseRef.current.focus();
			}
			setIsOpen(false);
			setFocusOnCloseRef({});
		}
	};

	return (
		<SidebarContext.Provider
			value={{
				isOpen,
				open,
				close,
				isScrolled,
				setIsScrolled,
				setFocusOnCloseRef,
			}}
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

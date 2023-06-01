import PropTypes from 'prop-types';
import { jsx, useBrand, overrideReconciler } from '@westpac/core';
import { FocusOn, AutoFocusInside } from 'react-focus-on';
import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useWindowSize } from '@westpac/hooks';
import { SkipLink } from '@westpac/a11y';
import throttle from 'lodash.throttle';

import { defaultSidebarHeading } from './overrides/sidebarHeading';
import { defaultContentHeader } from './overrides/contentHeader';
import { defaultContentInner } from './overrides/contentInner';
import { defaultHeaderRight } from './overrides/headerRight';
import { defaultHeaderLeft } from './overrides/headerLeft';
import { defaultHeaderBtn } from './overrides/headerBtn';
import { defaultCloseBtn } from './overrides/closeBtn';
import { defaultBackdrop } from './overrides/backdrop';
import { defaultContent } from './overrides/content';
import { defaultSidebar } from './overrides/sidebar';
import { defaultHeader } from './overrides/header';
import pkg from '../package.json';

export interface SidebarProps {
	/**
	 * State of whether the sidebar is open
	 */
	open?: boolean;
	/**
	 * Sidebar header text (only visible < md breakpoint)
	 */
	heading?: string;
	/**
	 * Sidebar content header text (only visible < md breakpoint)
	 */
	contentHeading?: string;
	/**
	 * Top margin offset (default offset for use with GEL header component)
	 */
	offsetTop?: string | number | unknown[];
	/**
	 * The id to the pages main content
	 */
	skipToContentId?: string;
	/**
	 * Text content for skip link
	 */
	skipLinkContent?: string;
	/**
	 * Sidebar content
	 */
	children?: React.ReactNode;
	/**
	 * The override API
	 */
	overrides?: {
		Sidebar?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		CloseBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Content?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ContentHeader?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		ContentInner?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Header?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		HeaderRight?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		HeaderLeft?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		HeaderBtn?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
		Backdrop?: {
			styles?: (...args: unknown[]) => unknown;
			component?: React.ElementType;
			attributes?: (...args: unknown[]) => unknown;
		};
	};
}

// ==============================
// Component
// ==============================

export const Sidebar = ({
	open: isOpen = false,
	heading,
	contentHeading,
	offsetTop,
	skipToContentId,
	skipLinkContent,
	children,
	overrides: componentOverrides,
	...rest
}: SidebarProps) => {
	const {
		OVERRIDES: { [pkg.name]: tokenOverrides },
		[pkg.name]: brandOverrides,
		LAYOUT,
	} = useBrand();

	const defaultOverrides = {
		Sidebar: defaultSidebar,
		SidebarHeading: defaultSidebarHeading,
		CloseBtn: defaultCloseBtn,
		Content: defaultContent,
		ContentHeader: defaultContentHeader,
		ContentInner: defaultContentInner,
		Header: defaultHeader,
		HeaderRight: defaultHeaderRight,
		HeaderLeft: defaultHeaderLeft,
		HeaderBtn: defaultHeaderBtn,
		Backdrop: defaultBackdrop,
	};

	const [open, setOpen] = useState(isOpen);
	const handleOpen = () => setOpen((open) => !open);

	useEffect(() => {
		setOpen(isOpen);
	}, [isOpen]);

	const { width } = useWindowSize();

	useEffect(() => {
		if (open && width > LAYOUT.breakpoints.md) {
			setOpen(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [width]);

	const keyHandler = (event: KeyboardEvent) => {
		if (open && event.code === 'Escape') handleOpen();
	};

	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const [scrolled, setScrolled] = useState(false);
	const ref = useRef<HTMLDivElement>();

	const handleScroll = throttle(() => {
		const scroll = ref.current?.scrollTop || 0;
		setScrolled(scroll > 0);
	}, 10);

	const state = {
		open,
		scrolled,
		heading,
		contentHeading,
		offsetTop,
		skipToContentId,
		skipLinkContent,
		overrides: componentOverrides,
		...rest,
	};

	const {
		Sidebar: { component: Sidebar, styles: sidebarStyles, attributes: sidebarAttributes },
		SidebarHeading: {
			component: SidebarHeading,
			styles: sidebarHeadingStyles,
			attributes: sidebarHeadingAttributes,
		},
		CloseBtn: { component: CloseBtn, styles: closeBtnStyles, attributes: closeBtnAttributes },
		Content: { component: Content, styles: contentStyles, attributes: contentAttributes },
		ContentHeader: {
			component: ContentHeader,
			styles: contentHeaderStyles,
			attributes: contentHeaderAttributes,
		},
		ContentInner: {
			component: ContentInner,
			styles: contentInnerStyles,
			attributes: contentInnerAttributes,
		},
		Header: { component: Header, styles: headerStyles, attributes: headerAttributes },
		HeaderLeft: {
			component: HeaderLeft,
			styles: headerLeftStyles,
			attributes: headerLeftAttributes,
		},
		HeaderRight: {
			component: HeaderRight,
			styles: headerRightStyles,
			attributes: headerRightAttributes,
		},
		HeaderBtn: { component: HeaderBtn, styles: headerBtnStyles, attributes: headerBtnAttributes },
		Backdrop: { component: Backdrop, styles: backdropStyles, attributes: backdropAttributes },
	} = overrideReconciler(defaultOverrides, tokenOverrides, brandOverrides, componentOverrides);

	return (
		<Fragment>
			<Sidebar {...rest} state={state} {...sidebarAttributes(state)} css={sidebarStyles(state)}>
				{skipToContentId && (
					<SkipLink href={skipToContentId} overrides={componentOverrides}>
						{skipLinkContent}
					</SkipLink>
				)}
				<Header state={state} {...headerAttributes(state)} css={headerStyles(state)}>
					<HeaderLeft state={state} {...headerLeftAttributes(state)} css={headerLeftStyles(state)}>
						<SidebarHeading
							state={state}
							{...sidebarHeadingAttributes(state)}
							css={sidebarHeadingStyles(state)}
						>
							{heading}
						</SidebarHeading>
					</HeaderLeft>
					<HeaderRight
						state={state}
						{...headerRightAttributes(state)}
						css={headerRightStyles(state)}
					>
						<HeaderBtn
							state={state}
							{...headerBtnAttributes(state)}
							css={headerBtnStyles(state)}
							onClick={handleOpen}
						>
							Show sidebar
						</HeaderBtn>
					</HeaderRight>
				</Header>
				<FocusOn enabled={open} onClickOutside={handleOpen}>
					<Content state={state} {...contentAttributes(state)} css={contentStyles(state)}>
						<ContentHeader
							state={state}
							{...contentHeaderAttributes(state)}
							css={contentHeaderStyles(state)}
						>
							<AutoFocusInside>
								<SidebarHeading
									tabIndex="-1"
									state={state}
									{...sidebarHeadingAttributes(state)}
									css={sidebarHeadingStyles(state)}
								>
									{contentHeading}
								</SidebarHeading>
							</AutoFocusInside>
							<CloseBtn
								onClick={handleOpen}
								state={state}
								{...closeBtnAttributes(state)}
								css={closeBtnStyles(state)}
							/>
						</ContentHeader>
						<ContentInner
							ref={ref}
							onScroll={handleScroll}
							state={state}
							{...contentInnerAttributes(state)}
							css={contentInnerStyles(state)}
						>
							{children}
						</ContentInner>
					</Content>
				</FocusOn>
				<Backdrop
					onClick={handleOpen}
					state={state}
					{...backdropAttributes(state)}
					css={backdropStyles(state)}
				/>
			</Sidebar>
		</Fragment>
	);
};

Sidebar.propTypes = {
	// ----------------------------- Warning --------------------------------
	// | These PropTypes are generated from the TypeScript type definitions |
	// |     To update them edit TypeScript types and run "yarn prop-types"  |
	// ----------------------------------------------------------------------
	/**
	 * Sidebar content
	 */
	children: PropTypes.node,
	/**
	 * Sidebar content header text (only visible < md breakpoint)
	 */
	contentHeading: PropTypes.string,
	/**
	 * Sidebar header text (only visible < md breakpoint)
	 */
	heading: PropTypes.string,
	/**
	 * Top margin offset (default offset for use with GEL header component)
	 */
	offsetTop: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.string]),
	/**
	 * State of whether the sidebar is open
	 */
	open: PropTypes.bool,
	/**
	 * The override API
	 */
	overrides: PropTypes.shape({
		Backdrop: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		CloseBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Content: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ContentHeader: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		ContentInner: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Header: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		HeaderBtn: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		HeaderLeft: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		HeaderRight: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
		Sidebar: PropTypes.shape({
			attributes: PropTypes.func,
			component: PropTypes.elementType,
			styles: PropTypes.func,
		}),
	}),
	/**
	 * Text content for skip link
	 */
	skipLinkContent: PropTypes.string,
	/**
	 * The id to the pages main content
	 */
	skipToContentId: PropTypes.string,
};

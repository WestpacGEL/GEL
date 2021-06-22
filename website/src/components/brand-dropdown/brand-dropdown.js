/** @jsx jsx */

import { jsx, useBrand } from '@westpac/core';
import { forwardRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useSpring, animated } from 'react-spring';
import useMeasure from 'react-use-measure';
import { ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Button } from '@westpac/button';
import { BrandLogo } from './brand-logo';
import { BrandList } from './brand-list';
import { BrandDropdownContext } from './brand-dropdown-context';
import { ButtonDropdown, useButtonDropdownContext } from '@westpac/button-dropdown';

import { useSidebarContext } from '../providers/sidebar';

const ButtonIconOverride = ({ icon: Icon, left, right, color, state: _, ...rest }) => {
	const { COLORS } = useBrand();
	return (
		<span
			css={{
				borderLeft: `1px solid ${COLORS.border}`,
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				marginLeft: '0.4em',
			}}
		>
			<Icon color="primary" {...rest} />
		</span>
	);
};

const ButtonOverride = forwardRef(({ closed, setClosed, state: _, ...rest }, ref) => {
	const {
		state: { open },
	} = useButtonDropdownContext();

	return (
		<Button
			ref={ref}
			look="unstyled"
			size="large"
			iconAfter={open ? ExpandLessIcon : ExpandMoreIcon}
			block
			justify
			overrides={{
				Icon: {
					component: ButtonIconOverride,
					styles: (styles) => ({
						...styles,
						marginLeft: '1.5rem',
					}),
				},
			}}
			{...rest}
		/>
	);
});

const PanelOverride = forwardRef(({ state: { open, setClosed }, children, ...rest }, ref) => {
	const [measureRef, { height }] = useMeasure({ polyfill: ResizeObserver });

	const animate = useSpring({
		to: {
			height: !open ? 0 : height,
		},
		onStart: () => {
			setClosed(false);
		},
		onRest: () => {
			setClosed(!open);
		},
	});

	return (
		<animated.div ref={ref} style={animate} aria-hidden={!open} {...rest}>
			<div ref={measureRef}>{children}</div>
		</animated.div>
	);
});

export const BrandDropdown = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [closed, setClosed] = useState(true);
	const { isScrolled } = useSidebarContext();
	const { COLORS, PACKS } = useBrand();

	const close = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	const handleClick = () => {
		setIsOpen((currentState) => !currentState);
	};

	return (
		<BrandDropdownContext.Provider value={{ isOpen, close }}>
			<div
				css={{
					borderBottom: !isScrolled && `1px solid ${COLORS.border}`,
					boxShadow: isScrolled && '0 2px 5px rgba(0,0,0,0.26)',
					position: 'relative',
					zIndex: 1, //ensure shadow is above nav list item with :hover bg effect
					transition: 'box-shadow 0.2s',
				}}
			>
				<BrandLogo />
				<ButtonDropdown
					open={isOpen}
					block
					text="Change brand"
					dropdown={false}
					onClick={handleClick}
					closed={closed}
					setClosed={setClosed}
					overrides={{
						Button: {
							component: ButtonOverride,
							styles: () => ({
								position: 'relative',
								zIndex: 2,
								padding: '0 1.5rem 0 1.125rem',
								height: '4.125rem',
								fontSize: '0.875rem',
								backgroundColor: '#fff',

								':focus': {
									outlineOffset: `-${PACKS.focus.outlineWidth} !important`,
								},
							}),
						},
						Panel: {
							component: PanelOverride,
							styles: (_, { closed }) => ({
								visibility: closed ? 'hidden' : 'visible',
								position: 'absolute',
								zIndex: 1,
								top: '100%',
								left: 0,
								right: 0,
								overflow: 'hidden',
								backgroundColor: '#fff',
								boxShadow: '0 2px 5px rgba(0,0,0,0.26)',
							}),
						},
					}}
				>
					<BrandList />
				</ButtonDropdown>
			</div>
		</BrandDropdownContext.Provider>
	);
};

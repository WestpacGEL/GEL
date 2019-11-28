/** @jsx jsx */

import { Children, forwardRef, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';
import { Tab } from './Tab';
import pkg from '../package.json';

let instanceId = 0;
const VALID_KEYS = ['ArrowLeft', 'ArrowRight', 'Enter', 'PageDown', 'PageUp', 'End', 'Home'];

// ==============================
// Component
// ==============================
export const Tabcordion = props => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		css: {},
		Panel,
		TabItem,
		AccordionLabel,
	};

	merge(overrides, overridesWithTokens);

	const [activeTabIndex, setActiveTabIndex] = useState(props.initialTabIndex);
	const [instancePrefix, setInstancePrefix] = useState(props.instanceId);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();
	const { width } = useContainerQuery(containerRef);
	const mode = props.mode !== 'responsive' ? props.mode : width < 768 ? 'accordion' : 'tabs';
	const setActive = idx => () => setActiveTabIndex(idx);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-tabcordion-${++instanceId}`);
		}
	}, [instancePrefix]);

	// handle keys
	const keyHandler = event => {
		// bail unless a tab belonging to this tablist is focused
		if (!tablistRef.current || !tablistRef.current.contains(document.activeElement)) return;

		// bail on unknown keys
		if (VALID_KEYS.indexOf(event.key) === -1) return;

		// prevent scrolling when user navigates using keys that would influence
		// page scroll
		if (['PageDown', 'End', 'PageUp', 'Home'].indexOf(event.key) > -1) {
			event.preventDefault();
		}

		let nextIndex;
		let lastIndex = Children.count(props.children) - 1;

		switch (event.key) {
			case 'Enter':
				panelRef.current.focus(); // select the active panel
				break;
			case 'ArrowLeft':
				nextIndex = activeTabIndex === 0 ? lastIndex : activeTabIndex - 1;
				break;
			case 'ArrowRight':
				nextIndex = activeTabIndex === lastIndex ? 0 : activeTabIndex + 1;
				break;
			case 'PageDown':
			case 'End':
				nextIndex = lastIndex;
				break;
			case 'PageUp':
			case 'Home':
				nextIndex = 0;
				break;
			default:
				nextIndex = activeTabIndex;
		}

		// only update to valid index
		if (typeof nextIndex === 'number') {
			setActiveTabIndex(nextIndex);
		}
	};

	// bind key events
	useEffect(() => {
		window.document.addEventListener('keydown', keyHandler);
		return () => {
			window.document.removeEventListener('keydown', keyHandler);
		};
	});

	const getId = (type, index) => `${instancePrefix}-${type}-${index + 1}`;
	const tabCount = Children.count(props.children);

	return (
		<div ref={containerRef} css={{ ...overrides.css }}>
			{mode === 'tabs' ? (
				<TabRow role="tablist" aria-label={props.ariaLabel} ref={tablistRef}>
					{Children.map(props.children, (child, idx) => {
						const selected = activeTabIndex === idx;
						return (
							<overrides.TabItem
								look={props.look}
								aria-controls={getId('panel', idx)}
								aria-selected={selected}
								id={getId('tab', idx)}
								justify={props.justify}
								last={idx + 1 === tabCount}
								selected={selected}
								key={child.props.label}
								onClick={setActive(idx)}
								role="tab"
							>
								{child.props.label}
							</overrides.TabItem>
						);
					})}
				</TabRow>
			) : null}

			{Children.map(props.children, (child, idx) => {
				const selected = activeTabIndex === idx;
				return (
					<Tab
						{...child.props}
						activeTabIndex={activeTabIndex}
						look={props.look}
						selected={selected}
						last={idx + 1 === tabCount}
						key={child.props.label}
						mode={mode}
						onClick={setActive(idx)}
						panelId={getId('panel', idx)}
						ref={selected ? panelRef : null}
						tabId={getId('tab', idx)}
						Panel={overrides.Panel}
						AccordionLabel={overrides.AccordionLabel}
					/>
				);
			})}
		</div>
	);
};

// ==============================
// Types
// ==============================
Tabcordion.propTypes = {
	/** The look of the tabs */
	look: PropTypes.oneOf(['soft', 'lego']),
	/** Provide a label that describes the purpose of the set of tabs. */
	ariaLabel: PropTypes.string,
	/** An array of Tab components that can be navigated through */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,
	/** The tab index to mount this component with */
	initialTabIndex: PropTypes.number,
	/** Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc. */
	instanceId: PropTypes.string,
	/** Whether or not tabs should stretch full width */
	justify: PropTypes.bool,
	/** Lock the mode to either "accordion" or "tabs". The default is responsive. */
	mode: PropTypes.oneOf(['accordion', 'responsive', 'tabs']),
};
Tabcordion.defaultProps = {
	look: 'soft',
	initialTabIndex: 0,
	justify: false,
	mode: 'responsive',
};

// ==============================
// Overrides & Styled Components
// ==============================
const TabRow = forwardRef((props, ref) => (
	<div
		ref={ref}
		css={{
			display: 'flex',
			whiteSpace: 'nowrap',
			position: 'relative',
		}}
		{...props}
	/>
));

const TabItem = ({ look, justify, selected, last, ...props }) => {
	// last prop instead of last child??
	const { COLORS: colors } = useBrand();
	const tabRef = useRef();

	const styles = {
		soft: {
			backgroundColor: selected ? '#fff' : colors.background,
			borderTopLeftRadius: '0.1875rem',
			borderTopRightRadius: '0.1875rem',
			border: `1px solid ${colors.border}`,
			borderBottom: 0,
			color: colors.neutral,
			marginBottom: selected && '-1px',
		},
		lego: {
			backgroundColor: selected ? '#fff' : colors.hero,
			border: `1px solid ${selected ? colors.border : 'transparent'}`,
			borderBottom: 0,
			color: selected ? colors.text : '#fff',
			marginBottom: selected ? '-1px' : '0.125rem',
		},
	};

	// might be able to move this
	useEffect(() => {
		if (selected) {
			tabRef.current.focus();
		}
	}, [selected]);

	return (
		<button
			ref={tabRef}
			css={{
				flex: justify ? 1 : 0,
				fontSize: '1rem',
				marginRight: '0.125rem',
				padding: '0.875rem 1.125rem',
				textAlign: 'left',
				textDecoration: 'none',
				transition: 'background .3s ease',
				width: '100%',
				cursor: 'pointer',
				':last-child': {
					marginRight: 0,
				},
				...styles[look],
			}}
			{...props}
		/>
	);
};

const AccordionLabel = ({ look, last, selected, ...props }) => {
	const { COLORS: colors } = useBrand();
	const styles = {
		soft: {
			borderBottom: selected && `1px solid ${colors.border}`,
			...(last &&
				!selected && {
					borderBottom: `1px solid ${colors.border}`,
					borderBottomLeftRadius: '0.1875rem',
					borderBottomRightRadius: '0.1875rem',
				}),
			':first-of-type': {
				borderTopLeftRadius: '0.1875rem',
				borderTopRightRadius: '0.1875rem',
			},
		},
		lego: {
			borderBottom: selected && `1px solid ${colors.border}`,
			borderLeftWidth: '6px',
			borderLeftColor: selected ? colors.border : colors.hero.default,
			':last-of-type': {
				borderBottom: `1px solid ${colors.border}`,
			},
		},
	};
	return (
		<button
			css={{
				alignItems: 'center',
				backgroundColor: colors.background,
				border: 0,
				borderTop: `1px solid ${colors.border}`,
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				cursor: 'pointer',
				display: 'flex',
				fontSize: '1rem',
				justifyContent: 'space-between',
				padding: '0.75rem 1.125rem',
				position: 'relative',
				textAlign: 'left',
				width: '100%',
				...styles[look],
			}}
			{...props}
		/>
	);
};

const Panel = forwardRef(({ look, last, selected, mode, ...props }, ref) => {
	const { COLORS: colors, PACKS: packs } = useBrand();
	const styles =
		mode === 'accordion'
			? {
					lego: {
						borderLeftWidth: '0.375rem',
						borderLeftColor: colors.border,
					},
					soft: last
						? {
								borderBottomLeftRadius: '0.1875rem',
								borderBottomRightRadius: '0.1875rem',
						  }
						: {},
			  }
			: {};
	return (
		<div
			ref={ref}
			css={{
				borderLeft: `1px solid ${colors.border}`,
				borderRight: `1px solid ${colors.border}`,
				borderBottom: (mode === 'tabs' || last) && `1px solid ${colors.border}`,
				borderTop: mode === 'tabs' && `1px solid ${colors.border}`,
				padding: '1.5rem 3.22%',
				':focus': {
					// color: packs.link.color,
				},
				...styles[look],
			}}
			{...props}
		/>
	);
});

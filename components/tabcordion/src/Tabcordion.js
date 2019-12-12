/** @jsx jsx */

import { Children, forwardRef, useEffect, useRef, useState, createRef } from 'react';
import PropTypes from 'prop-types';
import { jsx, useBrand, merge, useInstanceId } from '@westpac/core';
import { useContainerQuery } from '@westpac/hooks';
import { Tab } from './Tab';
import pkg from '../package.json';

const VALID_KEYS = ['ArrowLeft', 'ArrowRight', 'PageDown', 'PageUp', 'Enter', 'End', 'Home'];

// ==============================
// Component
// ==============================
export const Tabcordion = ({
	mode: tabcordionMode,
	look,
	justify,
	initialTabIndex,
	instanceIdPrefix,
	children,
	...props
}) => {
	const { [pkg.name]: overridesWithTokens } = useBrand();

	const overrides = {
		css: {},
		TabItem,
	};

	merge(overrides, overridesWithTokens);

	const [activeTabIndex, setActiveTabIndex] = useState(initialTabIndex);
	const [instancePrefix, setInstancePrefix] = useState(instanceIdPrefix);

	const containerRef = useRef();
	const panelRef = useRef();
	const tablistRef = useRef();
	const tabRefs = useRef([...Array(Children.count(children))].map(() => createRef()));
	const { width } = useContainerQuery(containerRef);
	const mode =
		tabcordionMode !== 'responsive' ? tabcordionMode : width < 768 ? 'accordion' : 'tabs';
	const setActive = idx => () => setActiveTabIndex(idx);

	// create the prefix for internal IDs
	useEffect(() => {
		if (!instancePrefix) {
			setInstancePrefix(`gel-tabcordion-${useInstanceId()}`);
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
		let lastIndex = Children.count(children) - 1;

		switch (event.key) {
			case 'Enter':
				document.activeElement.click();
				panelRef.current.focus();
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
			tabRefs.current[nextIndex].current.focus();
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
	const tabCount = Children.count(children);

	return (
		<div ref={containerRef} css={{ ...overrides.css }} {...props}>
			{mode === 'tabs' ? (
				<TabRow role="tablist" ref={tablistRef}>
					{Children.map(children, (child, idx) => {
						const selected = activeTabIndex === idx;
						return (
							<overrides.TabItem
								look={look}
								aria-controls={getId('panel', idx)}
								aria-selected={selected}
								id={getId('tab', idx)}
								justify={justify}
								last={idx + 1 === tabCount}
								selected={selected}
								key={child.props.text}
								onClick={setActive(idx)}
								role="tab"
								ref={tabRefs.current[idx]}
							>
								{child.props.text}
							</overrides.TabItem>
						);
					})}
				</TabRow>
			) : null}

			{Children.map(children, (child, idx) => {
				const selected = activeTabIndex === idx;
				return (
					<Tab
						{...child.props}
						activeTabIndex={activeTabIndex}
						look={look}
						selected={selected}
						last={idx + 1 === tabCount}
						key={child.props.text}
						mode={mode}
						onClick={setActive(idx)}
						panelId={getId('panel', idx)}
						ref={selected ? panelRef : null}
						tabId={getId('tab', idx)}
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
	/** An array of Tab components that can be navigated through */
	children: PropTypes.arrayOf(
		PropTypes.shape({
			type: PropTypes.oneOf([Tab]),
		})
	).isRequired,
	/** The tab index to mount this component with */
	initialTabIndex: PropTypes.number,
	/** Define an id prefix for the elements e.g. for a prefix of "sidebar-tabs" --> "sidebar-tabs-panel-1" etc. */
	instanceIdPrefix: PropTypes.string,
	/** Whether or not tabs should stretch full width */
	justify: PropTypes.bool,
	/** Lock the mode to either "accordion" or "tabs". The default is responsive. */
	mode: PropTypes.oneOf(['responsive', 'accordion', 'tabs']),
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

const TabItem = forwardRef(({ look, justify, selected, last, ...props }, ref) => {
	const { COLORS: colors } = useBrand();

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

	return (
		<button
			ref={ref}
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
				...(last && { marginRight: 0 }),
				...styles[look],
			}}
			{...props}
		/>
	);
});

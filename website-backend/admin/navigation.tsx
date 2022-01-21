/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { FieldProps } from '@keystone-6/core/types';
import { Box, Stack } from '@keystone-ui/core';
import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';
import { Button } from '@keystone-ui/button';
// @ts-ignore
import { DragIcon } from '@westpac/icon/DragIcon';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { memo, ReactElement, useCallback, useEffect, useRef } from 'react';

type NavigationLeaf = {
	path: string;
	title: string;
};

type NavigationGroup = {
	title: string;
	children: NavigationItem[];
};

type NavigationItem = NavigationGroup | NavigationLeaf;

function NavigationGroup(props: {
	value: NavigationGroup;
	onChange: (cb: (value: NavigationGroup) => NavigationGroup) => void;
}) {
	return (
		<Stack gap="medium">
			<FieldLabel>
				Title
				<TextInput
					value={props.value.title}
					onChange={(event) => {
						props.onChange(({ children }) => ({ children, title: event.target.value }));
					}}
				/>
			</FieldLabel>
			<Box marginLeft="xxlarge">
				<NavigationItems
					onChange={useCallback(
						(children) => {
							props.onChange((prev) => ({ children: children(prev.children), title: prev.title }));
						},
						[props.onChange]
					)}
					value={props.value.children}
				/>
			</Box>
		</Stack>
	);
}

function NavigationLeaf(props: {
	value: NavigationLeaf;
	onChange: (cb: (value: NavigationLeaf) => NavigationLeaf) => void;
}) {
	return (
		<Stack gap="medium">
			<FieldLabel>
				Title
				<TextInput
					value={props.value.title}
					onChange={(event) => {
						props.onChange(({ path }) => ({ path, title: event.target.value }));
					}}
				/>
			</FieldLabel>
			<FieldLabel>
				Path
				<TextInput
					value={props.value.path}
					onChange={(event) => {
						props.onChange(({ title }) => ({ path: event.target.value, title }));
					}}
				/>
			</FieldLabel>
		</Stack>
	);
}

function reorder<T>(arr: readonly T[], startIndex: number, endIndex: number): T[] {
	const result = arr.slice(0);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
}

function Render({ children }: { children: () => ReactElement }) {
	return children();
}

const NavigationItem = memo(function NavigationItem(props: {
	value: NavigationItem;
	onChange: (cb: (val: NavigationItem) => NavigationItem) => void;
	onRemove: () => void;
	index: number;
}) {
	let inner: ReactElement;
	if ('children' in props.value) {
		inner = (
			<NavigationGroup
				value={props.value}
				onChange={props.onChange as (cb: (val: NavigationGroup) => NavigationGroup) => void}
			/>
		);
	} else {
		inner = (
			<NavigationLeaf
				value={props.value}
				onChange={props.onChange as (cb: (val: NavigationLeaf) => NavigationLeaf) => void}
			/>
		);
	}
	return (
		<Draggable draggableId={props.index.toString()} index={props.index}>
			{(provided) => {
				return (
					<Stack
						gap="medium"
						ref={provided.innerRef}
						style={provided.draggableProps.style}
						{...provided.draggableProps}
					>
						<div css={{ display: 'flex', justifyContent: 'space-between' }}>
							<DragIcon {...provided.dragHandleProps} />
							<Button onClick={props.onRemove}>Remove</Button>
						</div>
						<div>{inner}</div>
					</Stack>
				);
			}}
		</Draggable>
	);
});

function NavigationItems(props: {
	value: NavigationItem[];
	onChange: (cb: (items: NavigationItem[]) => NavigationItem[]) => void;
}) {
	return (
		<Stack gap="medium">
			<DragDropContext
				onDragEnd={(result, provided) => {
					if (!result.destination) {
						return;
					}
					const destinationIndex = result.destination.index;
					props.onChange((val) => reorder(val, result.source.index, destinationIndex));
				}}
			>
				<Droppable droppableId="droppable">
					{(provided) => (
						<Stack
							{...provided.droppableProps}
							ref={provided.innerRef}
							as="ul"
							css={{ listStyle: 'none' }}
							gap="medium"
							padding="none"
						>
							{props.value.map((item, i) => {
								return (
									<Render key={i}>
										{() => {
											const onChange = useCallback(
												(
													value: (
														val: NavigationGroup | NavigationItem
													) => NavigationGroup | NavigationItem
												) => {
													props.onChange((all) => {
														const newValues = [...all];
														newValues[i] = value(newValues[i]);
														return newValues;
													});
												},
												[props.onChange, i]
											);
											const onRemove = useCallback(() => {
												props.onChange((all) => {
													const newValues = [...all];
													newValues.splice(i, 1);
													return newValues;
												});
											}, [props.onChange, i]);

											return (
												<NavigationItem
													index={i}
													onChange={onChange}
													onRemove={onRemove}
													value={item}
													key={i}
												></NavigationItem>
											);
										}}
									</Render>
								);
							})}
							{provided.placeholder}
						</Stack>
					)}
				</Droppable>
			</DragDropContext>
			<Button
				onClick={useCallback(() => {
					props.onChange((prev) => [...prev, { title: '', path: '/design-system/' }]);
				}, [props.onChange])}
			>
				Add Item
			</Button>
			<Button
				onClick={useCallback(() => {
					props.onChange((prev) => [...prev, { title: '', children: [] }]);
				}, [props.onChange])}
			>
				Add Group
			</Button>
		</Stack>
	);
}

export function Field(
	props: FieldProps<typeof import('@keystone-6/core/fields/types/json/views').controller>
) {
	// all this stuff is basically to avoid re-parsing the stringified item
	// this isn't because of the cost of parsing, it's because after parsing
	// it'll be a new object and we want to keep the same objects so that the
	// memoization of the components above will work
	const parseStringifyCache = useRef<{ stringified: string; value: NavigationItem[] }>(null!);
	if (props.value !== parseStringifyCache.current?.stringified) {
		parseStringifyCache.current = { stringified: props.value, value: JSON.parse(props.value) };
	}
	const parsedValue = parseStringifyCache.current.value;

	function stringify(value: NavigationItem[]) {
		if (value !== parseStringifyCache.current.value) {
			parseStringifyCache.current = { stringified: JSON.stringify(value), value };
		}
		return parseStringifyCache.current.stringified;
	}

	const onChange = useEventCallback((newVal) => {
		props.onChange?.(stringify(newVal(parsedValue)));
	});
	return (
		<FieldContainer>
			<FieldLabel>{props.field.label}</FieldLabel>
			<GEL brand={brand}>
				<NavigationItems value={parsedValue} onChange={onChange} />
			</GEL>
		</FieldContainer>
	);
}

function useEventCallback<Func extends (...args: any) => any>(callback: Func): Func {
	const callbackRef = useRef(callback);
	const cb = useCallback((...args) => {
		return callbackRef.current(...args);
	}, []);
	useEffect(() => {
		callbackRef.current = callback;
	});
	return cb as any;
}

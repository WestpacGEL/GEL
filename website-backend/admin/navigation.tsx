/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@keystone-ui/core';
import { Fragment, useState } from 'react';
import { FieldProps, FieldControllerConfig, FieldController } from '@keystone-6/core/types';
import { DropDownIcon, DropUpIcon } from '@westpac/icon';
import { Box, Stack } from '@keystone-ui/core';
import { FieldContainer, FieldLabel, TextInput } from '@keystone-ui/fields';
import { Button } from '@keystone-ui/button';
import { GEL } from '@westpac/core';
import brand from '@westpac/wbc';
import { DragDropContext, Draggable, Droppable, DraggableProvided } from 'react-beautiful-dnd';
import { memo, useCallback, useEffect, useRef, HTMLAttributes } from 'react';

type NavigationLeaf = {
	path: string;
	title: string;
	initialIsEditable?: boolean;
};

type NavigationGroup = {
	title: string;
	children: NavigationItem[];
	initialIsEditable?: boolean;
};

type NavigationItem = NavigationGroup | NavigationLeaf;

function DragIcon(props: HTMLAttributes<HTMLDivElement>) {
	return <div {...props}>{dragIcon}</div>;
}

function NavigationLeaf(props: {
	value: NavigationLeaf;
	onChange: (cb: (value: NavigationLeaf) => NavigationLeaf) => void;
	onRemove: () => void;
	initialIsEditable?: boolean;
}) {
	const [isEditable, setIsEditable] = useState(props.initialIsEditable);
	const toggleEdit = () => {
		setIsEditable(!isEditable);
	};
	if (isEditable) {
		return (
			<Stack
				gap="medium"
				across
				align="center"
				css={{
					width: '100%',
					'> *:last-child': {
						width: '100%',
					},
				}}
			>
				<Stack gap="small" width="100%" padding="small">
					<FieldLabel>
						Title
						<TextInput
							value={props.value.title}
							onChange={(event) => {
								props.onChange(({ path }) => ({
									path,
									title: event.target.value,
								}));
							}}
						/>
					</FieldLabel>
					<FieldLabel>
						Path
						<TextInput
							value={props.value.path}
							onChange={(event) => {
								props.onChange(({ title }) => ({
									path: event.target.value,
									title,
								}));
							}}
						/>
					</FieldLabel>
					<Stack across gap="small" paddingTop="medium">
						<Button tone="active" weight="bold" onClick={toggleEdit}>
							Done
						</Button>
						<Button tone="negative" onClick={props.onRemove}>
							Remove
						</Button>
					</Stack>
				</Stack>
			</Stack>
		);
	}
	return (
		<Stack
			gap="medium"
			across
			align="center"
			css={{
				width: '100%',
				'> *:last-child': {
					marginLeft: 'auto',
				},
			}}
		>
			<span>{props.value.title}</span>;
			<Stack across gap="small">
				<Button tone="active" weight="link" onClick={toggleEdit}>
					Edit
				</Button>
				<Button tone="negative" onClick={props.onRemove}>
					Remove
				</Button>
			</Stack>
		</Stack>
	);
}

function reorder<T>(arr: readonly T[], startIndex: number, endIndex: number): T[] {
	const result = arr.slice(0);
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);
	return result;
}

const dragIcon = (
	<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<g fill="#939393">
			<circle cy="6" cx="6" r="2" />
			<circle cy="6" cx="12" r="2" />
			<circle cy="12" cx="6" r="2" />
			<circle cy="12" cx="12" r="2" />
			<circle cy="18" cx="6" r="2" />
			<circle cy="18" cx="12" r="2" />
		</g>
	</svg>
);

const NavigationGroup = ({
	value,
	onChange,
	onRemove,
}: {
	onChange: (cb: (value: NavigationGroup) => NavigationGroup) => void;
	value: NavigationGroup;
	onRemove: () => void;
}) => {
	const [isEditable, setIsEditable] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggleEdit = () => {
		setIsEditable(!isEditable);
	};
	return (
		<Stack gap="medium">
			<details
				onToggle={(e: React.SyntheticEvent<HTMLDetailsElement>) => {
					setIsOpen(!isOpen);
				}}
			>
				<Stack
					across
					as="summary"
					align="center"
					css={{
						width: '100%',
						'> *:last-child': {
							marginLeft: 'auto',
						},
					}}
				>
					{isOpen ? <DropUpIcon /> : <DropDownIcon />}
					{isEditable ? (
						<FieldLabel>
							Title
							<TextInput
								value={value.title}
								onChange={(event) => {
									onChange((prev) => ({
										...prev,
										title: event.target.value,
									}));
								}}
							/>
						</FieldLabel>
					) : (
						<span>{value.title}</span>
					)}
					<Stack across gap="small">
						<Button weight="link" onClick={toggleEdit}>
							{isEditable ? 'Done' : 'Edit'}
						</Button>
						<Button tone="negative" onClick={onRemove}>
							Remove
						</Button>
					</Stack>
				</Stack>
				<Box marginTop="medium">
					<NavigationItems
						onChange={useCallback(
							(children) => {
								onChange((prev) => ({
									children: children((prev as NavigationGroup).children),
									title: prev.title,
								}));
							},
							[onChange]
						)}
						value={value.children}
					/>
				</Box>
			</details>
		</Stack>
	);
};

const NavigationItem = memo(function NavigationItem(props: {
	value: NavigationItem;
	onChange: (cb: (val: NavigationItem) => NavigationItem) => void;
	onRemove: () => void;
	index: number;
}) {
	let inner = () => {
		if ('children' in props.value) {
			return (
				<NavigationGroup
					initialIsEditable={props.value?.initialIsEditable}
					onChange={props.onChange}
					value={props.value}
					onRemove={props.onRemove}
				/>
			);
		} else {
			return (
				<NavigationLeaf
					initialIsEditable={props.value?.initialIsEditable}
					value={props.value}
					onChange={props.onChange as (cb: (val: NavigationLeaf) => NavigationLeaf) => void}
					onRemove={props.onRemove}
				/>
			);
		}
	};

	return (
		<Draggable draggableId={props.index.toString()} index={props.index}>
			{(provided) => {
				return (
					<Stack
						gap="medium"
						ref={provided.innerRef}
						across
						align="center"
						css={{
							display: 'flex',
							width: '100%',
							position: 'relative',
							border: '1px solid gray',
							justifyContent: 'flex-end',
							'>*:last-child': {
								width: '100%',
							},
						}}
						padding="medium"
						style={provided.draggableProps.style}
						{...provided.draggableProps}
					>
						<DragIcon {...provided.dragHandleProps} />
						<div>{inner()}</div>
					</Stack>
				);
			}}
		</Draggable>
	);
});

function NavigationItemWrapper(props: {
	onChange: (cb: (current: NavigationItem[]) => NavigationItem[]) => void;
	index: number;
	value: NavigationItem[];
}) {
	const onChange = useCallback(
		(value: (val: NavigationItem) => NavigationItem) => {
			props.onChange((all) => {
				const newValues = [...all];
				newValues[props.index] = value(newValues[props.index]);
				return newValues;
			});
		},
		[props.onChange, props.index]
	);
	const onRemove = useCallback(() => {
		props.onChange((all) => {
			const newValues = [...all];
			newValues.splice(props.index, 1);
			return newValues;
		});
	}, [props.onChange, props.index]);

	return (
		<NavigationItem
			index={props.index}
			onChange={onChange}
			onRemove={onRemove}
			value={props.value[props.index]}
		/>
	);
}

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
							css={{
								listStyle: 'none',
							}}
							gap="medium"
							padding="none"
						>
							{props.value.map((item, i) => {
								return (
									<NavigationItemWrapper index={i} onChange={props.onChange} value={props.value} />
								);
							})}
							{provided.placeholder}
						</Stack>
					)}
				</Droppable>
			</DragDropContext>
			<Stack across gap="small">
				<Button
					onClick={useCallback(() => {
						props.onChange((prev) => [
							...prev,
							{
								title: '',
								path: '/design-system/',
								// initialIsEditable: true,
							},
						]);
					}, [props.onChange])}
				>
					Add Item
				</Button>
				<Button
					onClick={useCallback(() => {
						props.onChange((prev) => [
							...prev,
							{
								title: '',
								children: [],
								// initialIsEditable: true,
							},
						]);
					}, [props.onChange])}
				>
					Add Group
				</Button>
			</Stack>
		</Stack>
	);
}

export const controller = (config: FieldControllerConfig): FieldController<NavigationItem[]> => {
	return {
		defaultValue: [],
		path: config.path,
		graphqlSelection: config.path,
		label: config.label,
		deserialize: (item) => {
			return item[config.path] ?? [];
		},
		serialize: (value) => ({ [config.path]: value }),
	};
};

export function CardValue() {
	return null;
}

export function Field(props: FieldProps<typeof controller>) {
	const onChange = useEventCallback((newValFunc) => {
		props.onChange?.(newValFunc(props.value));
	});
	return (
		<FieldContainer>
			<FieldLabel>{props.field.label}</FieldLabel>
			<GEL brand={brand}>
				<NavigationItems value={props.value} onChange={onChange} />
			</GEL>
		</FieldContainer>
	);
}

export function Cell() {
	return null;
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

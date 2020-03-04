/** @jsx jsx */
import { useState } from 'react';
import wbc from '@westpac/wbc';
import { jsx, GEL, useBrand } from '@westpac/core';
import { NewWindowIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Modal, Body } from '@westpac/modal';
import { Well } from '@westpac/well';
import dynamic from 'next/dynamic';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import editorTheme from './theme';

// Example block contains modal that is not SSR safe
export const ExampleBlock = dynamic(() => Promise.resolve(UnSafeExampleBlock), {
	ssr: false,
});

const Button = ({ onClick, children }) => {
	const { COLORS, SPACING } = useBrand();
	return (
		<button
			onClick={onClick}
			css={{
				background: 'none',
				border: 'none',
				borderLeft: `solid 1px ${COLORS.border}`,
				paddingLeft: SPACING(4),
				paddingRight: SPACING(4),
				paddingTop: SPACING(2),
				paddingBottom: SPACING(2),
			}}
		>
			{children}
		</button>
	);
};
const UnSafeExampleBlock = ({ code, demo, error }) => {
	const [showCode, setCode] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { COLORS, SPACING } = useBrand();
	return (
		<div css={{ marginBottom: SPACING(6) }}>
			<Well
				css={{
					position: 'relative',
					border: 'none',
					borderRadius: 0,
					margin: 0,
				}}
			>
				<div
					css={{
						marginBottom: SPACING(8),
					}}
				>
					<LivePreview />
					{error ? <LiveError /> : null}
				</div>
				<div css={{ display: 'flex', justifyContent: 'flex-end' }}>
					{demo ? (
						<Button
							onClick={() => {
								setIsModalOpen(true);
							}}
						>
							<span css={{ marginRight: SPACING(1) }}>Demo</span>{' '}
							<NewWindowIcon size="small" color={COLORS.primary} />
						</Button>
					) : null}
					{code ? (
						<Button
							onClick={() => {
								setCode(!showCode);
							}}
						>
							<span css={{ marginRight: SPACING(1) }}>Code</span>{' '}
							{showCode ? (
								<ExpandMoreIcon size="small" color={COLORS.primary} />
							) : (
								<ExpandLessIcon size="small" color={COLORS.primary} />
							)}
						</Button>
					) : null}
				</div>
			</Well>
			{code && showCode ? <LiveEditor style={{ fontSize: '1rem' }} /> : null}
			<Modal heading={''} open={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<Body>
					<LivePreview />
				</Body>
			</Modal>
		</div>
	);
};

export const Playground = ({
	brand = wbc,
	context = null,
	code,
	showCode,
	showDemo,
	showErrors = false,
	children,
	scope,
	inline,
	theme = editorTheme,
}) => {
	if (!code && children.length > 1) {
		console.warn(
			'Playground code has not been compiled by the babel plugin. Please check configuration.'
		);
	}
	if (!context) {
		return (
			<GEL brand={brand}>
				<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
					<LivePreview />
				</LiveProvider>
			</GEL>
		);
	}
	if (context === 'website') {
		return (
			<GEL brand={brand}>
				<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
					<ExampleBlock code={showCode} demo={showDemo} error={showErrors} />
					{/* TODO: make code and demo button options passed through editor */}
				</LiveProvider>
			</GEL>
		);
	}
	if (context === 'admin') {
		return (
			<GEL brand={brand}>
				<div css={{ transformZ: 0, pointerEvents: 'none', zIndex: 0, cursor: 'not-allowed' }}>
					<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
						<ExampleBlock code={showCode} demo={showDemo} />
					</LiveProvider>
				</div>
			</GEL>
		);
	}
};

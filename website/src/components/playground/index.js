/** @jsx jsx */

import { useState } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { NewWindowIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Modal, Body as ModalBody } from '@westpac/modal';
import dynamic from 'next/dynamic';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import editorTheme from './theme';

// Example block contains modal that is not SSR safe
export const ExampleBlock = dynamic(() => Promise.resolve(UnSafeExampleBlock), {
	ssr: false,
});

const Button = ({ onClick, children }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();
	return (
		<button
			onClick={onClick}
			css={mq({
				background: 'none',
				border: 'none',
				borderLeft: `solid 1px ${COLORS.border}`,
				paddingLeft: SPACING(3),
				paddingRight: SPACING(3),
				paddingTop: '1rem',
				paddingBottom: '1rem',
				marginRight: ['-1.875rem !important', '-2.25rem !important'],
			})}
		>
			{children}
		</button>
	);
};
const UnSafeExampleBlock = ({ code, showCode, showDemo, showError }) => {
	const [codeIsOpen, setCodeOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<div>
			<div css={{ position: 'relative', backgroundColor: '#fff' }}>
				<div css={mq({ padding: [SPACING(5), null, SPACING(6)] })}>
					<LivePreview />
					{showError ? <LiveError /> : null}
				</div>
				<div css={{ display: 'flex', justifyContent: 'flex-end' }}>
					{showDemo ? (
						<form action={'/demo/'} target="_blank" method="GET">
							<input type="hidden" name="code" value={code} />
							<Button
								onClick={() => {
									setIsModalOpen(true);
								}}
							>
								<span css={{ marginRight: SPACING(1) }}>Demo</span>{' '}
								<NewWindowIcon size="small" color={COLORS.primary} />
							</Button>
						</form>
					) : null}
					{showCode ? (
						<Button
							onClick={() => {
								setCodeOpen(!codeIsOpen);
							}}
						>
							<span css={{ marginRight: SPACING(1) }}>Code</span>{' '}
							{codeIsOpen ? (
								<ExpandMoreIcon size="medium" color={COLORS.primary} />
							) : (
								<ExpandLessIcon size="medium" color={COLORS.primary} />
							)}
						</Button>
					) : null}
				</div>
			</div>
			{showCode && codeIsOpen ? <LiveEditor css={{ fontSize: '16px' }} padding={24} /> : null}
			<Modal heading={''} open={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<ModalBody>
					<LivePreview />
				</ModalBody>
			</Modal>
		</div>
	);
};

export const Playground = ({
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
	const brand = useBrand();
	if (!context) {
		return (
			<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
				<LivePreview />
			</LiveProvider>
		);
	}
	if (context === 'website') {
		return (
			<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
				<ExampleBlock code={code} showCode={showCode} showDemo={showDemo} showError={showErrors} />
				{/* TODO: make code and demo button options passed through editor */}
			</LiveProvider>
		);
	}
	if (context === 'admin') {
		return (
			<div css={{ transformZ: 0, pointerEvents: 'none', zIndex: 0, cursor: 'not-allowed' }}>
				<LiveProvider code={code} scope={scope} noInline={inline} theme={theme}>
					<ExampleBlock code={showCode} demo={showDemo} />
				</LiveProvider>
			</div>
		);
	}
};

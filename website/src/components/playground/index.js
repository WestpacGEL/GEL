/** @jsx jsx */

import { useState } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { NewWindowIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Modal, Body as ModalBody } from '@westpac/modal';
import dynamic from 'next/dynamic';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import editorTheme from './theme';

// Example block contains modal that is not SSR safe
export const ExampleBlock = dynamic(() => Promise.resolve(UnSafeExampleBlock), {
	ssr: false,
});

const ButtonIconOverride = ({ icon: Icon, left, right, state: _, ...rest }) => {
	return <Icon color="primary" {...rest} />;
};

const ExampleButton = ({ onClick, children, ...rest }) => {
	const { COLORS, SPACING } = useBrand();
	const mq = useMediaQuery();

	return (
		<Button
			look="link"
			size="xlarge"
			onClick={onClick}
			css={mq({
				borderLeft: `solid 1px ${COLORS.border}`,
			})}
			overrides={{
				Button: {
					styles: (styles) => ({
						...styles,
						textDecoration: 'none',
						color: COLORS.text,
						backgroundColor: '#fff',
						border: 0,
						fontSize: '0.875rem',
						':hover': {
							textDecoration: 'none !important',
						},
					}),
				},
				Icon: {
					component: ButtonIconOverride,
				},
			}}
			{...rest}
		>
			{children}
		</Button>
	);
};
const UnSafeExampleBlock = ({ code, showCode, showDemo, showError }) => {
	const [codeIsOpen, setCodeOpen] = useState(false);
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
							<ExampleButton
								onClick={() => {
									setIsModalOpen(true);
								}}
							>
								<span css={{ marginRight: SPACING(1) }}>Demo</span>{' '}
								<NewWindowIcon size="small" color={COLORS.primary} />
							</ExampleButton>
						</form>
					) : null}
					{showCode ? (
						<ExampleButton
							onClick={() => {
								setCodeOpen(!codeIsOpen);
							}}
							iconAfter={codeIsOpen ? ExpandLessIcon : ExpandMoreIcon}
						>
							Code
						</ExampleButton>
					) : null}
				</div>
			</div>
			{showCode && codeIsOpen && <LiveEditor css={{ fontSize: '16px' }} padding={24} />}
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

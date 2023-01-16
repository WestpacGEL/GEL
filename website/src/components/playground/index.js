/** @jsx jsx */

import { useEffect, useId, useState } from 'react';
import { jsx, useBrand, useMediaQuery } from '@westpac/core';
import { Button } from '@westpac/button';
import { NewWindowIcon, ExpandMoreIcon, ExpandLessIcon } from '@westpac/icon';
import { Modal, Body as ModalBody } from '@westpac/modal';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import editorTheme from './theme';

let hasHydrated = false;

// Example block contains modal that is not SSR safe
export function ExampleBlock(props) {
	const [isClient, setIsClient] = useState(hasHydrated);
	useEffect(() => {
		hasHydrated = true;
		setIsClient(true);
	}, []);
	if (!isClient) {
		return null;
	}
	return <UnSafeExampleBlock {...props} />;
}

const ButtonIconOverride = ({ icon: Icon, left, right, color, state: _, ...rest }) => {
	return <Icon color="primary" {...rest} />;
};

const ExampleButton = ({ onClick, children, ...rest }) => {
	const { COLORS } = useBrand();
	const mq = useMediaQuery();

	return (
		<Button
			look="unstyled"
			size="large"
			onClick={onClick}
			css={mq({
				borderLeft: `solid 1px ${COLORS.border}`,
				padding: '1rem 1.125rem',
				height: '3rem',
				fontSize: '0.875rem',
				backgroundColor: '#fff',
			})}
			overrides={{
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
	const [codeIsOpen, setCodeOpen] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [id] = useState(`code-block-${useId()}`);
	const { SPACING } = useBrand();
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
								iconAfter={NewWindowIcon}
							>
								Demo
							</ExampleButton>
						</form>
					) : null}
					{showCode ? (
						<ExampleButton
							onClick={() => {
								setCodeOpen(!codeIsOpen);
							}}
							iconAfter={codeIsOpen ? ExpandLessIcon : ExpandMoreIcon}
							aria-controls={id}
							aria-expanded={codeIsOpen}
						>
							Code
						</ExampleButton>
					) : null}
				</div>
			</div>
			{showCode && codeIsOpen && <LiveEditor css={{ fontSize: '16px' }} padding={24} id={id} />}
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

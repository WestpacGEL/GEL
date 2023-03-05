import { jsx, useBrand } from '@westpac/core';
import { Popover } from '@westpac/popover';
import { Playground } from '../../../../website/src/components/playground/macro';
import { HelpIcon } from '@westpac/icon';
import { FormLabel } from '@westpac/form';

const Label = (props) => <FormLabel css={{ display: 'inline-block' }} {...props} />;

const Wrapper = ({ margin, ...props }) => (
	<div css={{ display: 'inline-block', marginRight: margin && '5rem' }} {...props} />
);

const Demo = ({ context, showCode, showDemo }) => {
	const { COLORS } = useBrand();
	const content = `Small overlays of content for housing secondary information. These are often used to provide explanatory information for complex ideas.`;
	const shortContent = `Small overlays of content for housing secondary information.`;
	return (
		<Playground context={context} showCode={showCode} showDemo={showDemo}>
			<Wrapper margin>
				<Label>With heading</Label>
				<Popover
					heading="Popup heading"
					content={content}
					look="link"
					iconAfter={HelpIcon}
					iconColor={COLORS.text}
					size="large"
				/>
			</Wrapper>
			<Wrapper>
				<Label>Without heading</Label>
				<Popover
					content={shortContent}
					look="link"
					iconAfter={HelpIcon}
					iconColor={COLORS.text}
					size="large"
				/>
			</Wrapper>
		</Playground>
	);
};

export default Demo;

/** @jsx jsx */

import { GEL, jsx } from '@westpac/core';
import { Fragment } from 'react';
import { Selector, Option } from '@westpac/selector';
import { ChatPictogram, TruckPictogram, ClockPictogram } from '@westpac/pictogram';
import { AccessibilityIcon, AtmIcon, CarIcon } from '@westpac/icon';
import { VisuallyHidden } from '@westpac/a11y';

const hintBankAccount = (
	<Fragment>
		<VisuallyHidden>Bank account:</VisuallyHidden>
		123-456 123456
	</Fragment>
);
const hintShort = 'This is some content to go in the product selector thing';
const hintLong =
	"This is some content to go in the product selector thing which is longer. It's a little longer, actually when I come to think of it, it's quite a bit longer. But not crazy long, just enough length to test this with.";
const secondLabelShort = '$200,000.00';
const secondLabelLong = 'I am a very long secondary label';

function Example({ brand }) {
	return (
		<GEL brand={brand}>
			<h2>Default</h2>
			<Selector name="example-default">
				<Option value="1" secondaryLabel="Secondary label">
					Here is a label
				</Option>
				<Option value="2" secondaryLabel="Secondary label">
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<hr />

			<h2>Short hint and secondary label</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button-indicator-short">
				<Option value="1" hint={hintBankAccount} secondaryLabel={secondLabelShort}>
					Here is button text
				</Option>
				<Option value="2" secondaryLabel={secondLabelShort}>
					Here is button text
				</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Link</h3>
			<Selector type="link">
				<Option href="#0" hint={hintBankAccount} secondaryLabel={secondLabelShort}>
					Here is link text
				</Option>
				<Option href="#0" secondaryLabel={secondLabelShort}>
					Here is link text
				</Option>
				<Option href="#0">Here is link text</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-short">
				<Option value="1" hint={hintBankAccount} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="2" secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-short">
				<Option value="1" hint={hintBankAccount} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="2" secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Pictogram button</h3>
			<Selector type="button" name="example-button-indicator-pictogram-short">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is button text
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelShort}>
					Here is button text
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is button text
				</Option>
			</Selector>

			<h3>Pictogram link</h3>
			<Selector type="link" name="example-link-indicator-pictogram-short">
				<Option
					href="#0"
					pictogram={ChatPictogram}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is link text
				</Option>
				<Option href="#0" pictogram={TruckPictogram} secondaryLabel={secondLabelShort}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={ClockPictogram}>
					Here is link text
				</Option>
			</Selector>

			<h3>Pictogram radio</h3>
			<Selector type="radio" name="example-radio-pictogram-short">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Pictogram checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-pictogram-short">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Icon button</h3>
			<Selector type="button" name="example-button-indicator-icon-short">
				<Option
					value="1"
					icon={AccessibilityIcon}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelShort}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Icon link</h3>
			<Selector type="link" name="example-link-indicator-icon-short">
				<Option
					href="#0"
					icon={AccessibilityIcon}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is link text
				</Option>
				<Option href="#0" icon={AtmIcon} secondaryLabel={secondLabelShort}>
					Here is link text
				</Option>
				<Option href="#0" icon={CarIcon}>
					Here is link text
				</Option>
			</Selector>

			<h3>Icon radio</h3>
			<Selector type="radio" name="example-radio-icon-short">
				<Option
					value="1"
					icon={AccessibilityIcon}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<h3>Icon checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-icon-short">
				<Option
					value="1"
					icon={AccessibilityIcon}
					hint={hintBankAccount}
					secondaryLabel={secondLabelShort}
				>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelShort}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<hr />

			<h2>Long hint and secondary label</h2>

			<h3>Button</h3>
			<Selector type="button" name="example-button-indicator-long">
				<Option value="1" hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is button text
				</Option>
				<Option value="2" secondaryLabel={secondLabelLong}>
					Here is button text
				</Option>
				<Option value="3">Here is button text</Option>
			</Selector>

			<h3>Link</h3>
			<Selector type="link">
				<Option href="#0" hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is link text
				</Option>
				<Option href="#0" secondaryLabel={secondLabelLong}>
					Here is link text
				</Option>
				<Option href="#0">Here is link text</Option>
			</Selector>

			<h3>Radio</h3>
			<Selector type="radio" name="example-radio-long">
				<Option value="1" hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="2" secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-long">
				<Option value="1" hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="2" secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3">Here is a label</Option>
			</Selector>

			<h3>Pictogram button</h3>
			<Selector type="button" name="example-button-indicator-pictogram-long">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintLong}
					secondaryLabel={secondLabelLong}
				>
					Here is button text
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelLong}>
					Here is button text
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is button text
				</Option>
			</Selector>

			<h3>Pictogram link</h3>
			<Selector type="link" name="example-link-indicator-pictogram-long">
				<Option
					href="#0"
					pictogram={ChatPictogram}
					hint={hintLong}
					secondaryLabel={secondLabelLong}
				>
					Here is link text
				</Option>
				<Option href="#0" pictogram={TruckPictogram} secondaryLabel={secondLabelLong}>
					Here is link text
				</Option>
				<Option href="#0" pictogram={ClockPictogram}>
					Here is link text
				</Option>
			</Selector>

			<h3>Pictogram radio</h3>
			<Selector type="radio" name="example-radio-pictogram-long">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintLong}
					secondaryLabel={secondLabelLong}
				>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Pictogram checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-pictogram-long">
				<Option
					value="1"
					pictogram={ChatPictogram}
					hint={hintLong}
					secondaryLabel={secondLabelLong}
				>
					Here is a label
				</Option>
				<Option value="2" pictogram={TruckPictogram} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3" pictogram={ClockPictogram}>
					Here is a label
				</Option>
			</Selector>

			<h3>Icon button</h3>
			<Selector type="button" name="example-button-indicator-icon-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is button text
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelLong}>
					Here is button text
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is button text
				</Option>
			</Selector>

			<h3>Icon link</h3>
			<Selector type="link" name="example-link-indicator-icon-long">
				<Option href="#0" icon={AccessibilityIcon} hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is link text
				</Option>
				<Option href="#0" icon={AtmIcon} secondaryLabel={secondLabelLong}>
					Here is link text
				</Option>
				<Option href="#0" icon={CarIcon}>
					Here is link text
				</Option>
			</Selector>

			<h3>Icon radio</h3>
			<Selector type="radio" name="example-radio-icon-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>

			<h3>Icon checkbox</h3>
			<Selector type="checkbox" name="example-checkbox-icon-long">
				<Option value="1" icon={AccessibilityIcon} hint={hintLong} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="2" icon={AtmIcon} secondaryLabel={secondLabelLong}>
					Here is a label
				</Option>
				<Option value="3" icon={CarIcon}>
					Here is a label
				</Option>
			</Selector>
		</GEL>
	);
}

export default Example;

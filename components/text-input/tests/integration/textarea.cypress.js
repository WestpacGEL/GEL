import TextAreaPage from '../pages/textarea.page';

describe('TextArea component', () => {
	const textareaPage = new TextAreaPage();

	it('should change its content when text-input change event is triggered and handleChange handler is invoked', () => {
		textareaPage.visit();
		textareaPage.defaultTextArea.type('Hello');
		textareaPage.defaultTextArea.should('have.value', 'Hello');
	});

	it('should have a different colored border than normal color when prop is invalid', () => {
		textareaPage.visit();
		textareaPage.defaultTextArea.invoke('css', 'borderColor').then(($validColor) => {
			textareaPage.invalidTextArea
				.invoke('css', 'borderColor')
				.should('not.eq', $validColor)
				.then(($invalidColor) => {
					cy.log('Invalid color = ' + $invalidColor);
					cy.log('Valid color = ' + $validColor);
				});
		});
	});

	it('should change size when made to change size', () => {
		textareaPage.visit();
		textareaPage.defaultTextArea.invoke('width').then((origWidth) => {
			textareaPage.defaultTextArea.invoke('height').then((origHeight) => {
				cy.log('Original width = ' + origWidth);
				cy.log('Original height = ' + origHeight);
				textareaPage.defaultTextArea
					.invoke('width', 0.5 * origWidth)
					.invoke('width')
					.should('be.lt', origWidth)
					.then(() => {
						textareaPage.defaultTextArea
							.invoke('height', 2 * origHeight)
							.invoke('height')
							.should('be.gt', origHeight);
					});
			});
		});
	});

	it('should aquire a scroll bar and be scrollable when necessary', () => {
		let paragraph1 =
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n';
		let paragraph2 =
			'Sunt ad minim tempor ipsum ad occaecat est incididunt commodo mollit dolor excepteur. Incididunt exercitation incididunt aute amet fugiat sit quis cillum eiusmod aute laboris eiusmod esse officia. Proident dolor eu mollit sint commodo incididunt aliqua velit ipsum duis ullamco. Adipisicing sunt labore eiusmod mollit elit nisi nulla qui quis reprehenderit. Eu laboris exercitation sit velit non cillum. Aute ad deserunt ullamco fugiat laboris est. Ad dolor adipisicing nisi dolor.\n\n';
		let paragraph3 =
			'Voluptate aliquip ullamco irure Lorem ad velit mollit ullamco officia quis. Voluptate sunt fugiat labore voluptate velit. Mollit ut irure labore sunt nulla dolore anim id voluptate. Ut sunt aliquip qui amet. Ut proident proident laboris dolor quis irure veniam ea ea ad ut dolor ullamco. Tempor non pariatur ullamco ex ad id ipsum eiusmod consectetur sunt est. Est voluptate esse nulla occaecat ea cillum eu qui voluptate laborum.';
		let textValue = paragraph1 + paragraph2 + paragraph3;
		textareaPage.defaultTextArea.invoke('val', textValue);
		// The test would fail on the next line with an Error if there is no scroll bar.
		textareaPage.defaultTextArea.scrollTo('bottom', { ensureScrollable: true });
	});
});

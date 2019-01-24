import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';



import Rule from '../Rule.js'



describe('Rule Component', () => {

	describe('Testing Component display', () => {
		let rule;
		let ruleElement;

		beforeEach(() => {
			rule = {
				"id": 2,
				"title": "Leave the code cleaner than you found it.",
				"description": "From Clean Code: always leave the code cleaner than it was before.",
				"likes": 0,
				"dislikes": 0,
				"tags": ["craftsmanship", "clean code"]
			}
			ruleElement = <Rule rule={rule} />;
		});

		it('Should display the title', () => {
			const component = TestUtils.renderIntoDocument(ruleElement);
			expect(component).not.toBe(null);

			const panelHeader = TestUtils.findRenderedDOMComponentWithClass(component, 'panel-heading');
			expect(panelHeader).toBeDefined();
			expect(panelHeader.textContent).toEqual(rule.title);
		});


		it('Should display the description', () => {

		});

	});
});
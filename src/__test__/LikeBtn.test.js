import React from 'react';
import ReactDom from 'react-dom';
import TestUtils from 'react-dom/test-utils';



import LikeBtn from '../LikeBtn'



describe('LikeBtn Component', () => {

	describe('Should click', () => {
		let LikeBtn;
		let Button;

		beforeEach(() => {
			Button =  React.createElement(LikeBtn, {title:"toto", counter:0})
		});

		it('Should display the title', () => {
			const instance = TestUtils.renderIntoDocument(Button);
			const component = TestUtils.findRenderedDOMComponentWithClass(instance, 'btn');
			const domNode = ReactDom.findDOMNode(component);

			expect(domNode).not.toBe(null);
			expect(domNode).toBeDefined();
			expect(domNode.textContent).toContaint('0');

			TestUtils.Simulate.click(domNode);

			expect(domNode).toBeDefined();
			expect(domNode.textContent).toContaint('1');

		});


		it('Should display the description', () => {

		});

	});
});
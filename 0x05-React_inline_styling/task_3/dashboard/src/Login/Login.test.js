import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Login from './Login';
import { StyleSheetTestUtils } from "aphrodite";

configure({adapter: new Adapter()});
describe("Testing the <Login /> Component", () => {
	beforeAll(() => {
		StyleSheetTestUtils.suppressStyleInjection();
	  });

	  afterAll(() => {
		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
	  });

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Login shouldRender />);
	});


	it("<Login /> render 2 inputs", () => {
		expect(wrapper.find('input')).to.have.lengthOf(2);
	});
	it("<Login /> is rendered without crashing", () => {
		expect(wrapper.render()).to.not.be.an('undefined');
	});

	it("<Login /> render 2 labels", () => {
		expect(wrapper.find('label')).to.have.lengthOf(2);
	});

});

import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Header from './Header';

configure({adapter: new Adapter()});
describe("Testing the <Header /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header shouldRender />);
	});

	it("<Header /> is rendered without crashing", () => {
		expect(wrapper.render()).to.not.be.an('undefined');
	});

	it("<Header /> render img tag", () => {
		expect(wrapper.find('img')).to.have.lengthOf(1);
	});

	it("<Header /> render h1 tag", () => {
		expect(wrapper.find('h1')).to.have.lengthOf(1);
	});

});

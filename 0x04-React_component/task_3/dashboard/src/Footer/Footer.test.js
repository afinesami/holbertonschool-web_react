import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from './Footer';

configure({adapter: new Adapter()});
describe("Testing the <Footer /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Footer shouldRender />);
	});
	it("<Footer /> is rendered without crashing", () => {
		expect(wrapper.render()).to.not.be.an('undefined');
	});
    
	it("<Footer /> renders at least the text: Copyright", () => {
		expect(wrapper.children('p').html()).to.include('Copyright');
    	});

});

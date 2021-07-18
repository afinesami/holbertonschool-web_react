import React from 'react';
import chai, { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import WithLogging from './WithLogging.js';
import sinonChai from 'sinon-chai';
import { spy } from 'sinon';
import Login from '../Login/Login.js';

chai.use(sinonChai);
let logs = spy(console, 'log');

configure({
	adapter: new Adapter()
});


describe("Test WithLogging.js", () => {

	it("console.log was called on mount and on unmount with Component when the wrapped element is pure html", () => {
		let wrapper = mount(
			<WithLogging>
				<p>simple phrase</p>
			</WithLogging>
		);
		expect(logs).to.have.been.calledWith('Component Component is mounted');
		wrapper.unmount();
		expect(logs).to.have.been.calledWith('Component Component is going to unmount');
	});

	it("Renders the correct children with <Login /> Component as a child", () => {
		let wrapper = mount(
			<WithLogging>
				<Login />
			</WithLogging>
      );
		expect(logs).to.have.been.calledWith('Component Login is mounted');
		wrapper.unmount();
		expect(logs).to.have.been.calledWith('Component Login is going to unmount');
	});

});

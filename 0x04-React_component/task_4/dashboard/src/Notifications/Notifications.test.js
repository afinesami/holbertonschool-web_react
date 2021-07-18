import React from 'react';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> wrapperTwo", () => {
	let props1 = {
		displayDrawer: false,
	};
	let props2 = {
		displayDrawer: true,
	};
	let wrapperOne;
	let wrapperTwo;

	beforeEach(() => {
		wrapperOne = shallow(<Notifications shouldRender {...props1} />);
		wrapperTwo = shallow(<Notifications {...props2} />);
	});




	it('mockup the "console.log" function and Check that when calling the function "markAsRead" on an instance of the component', (done) => {
		const wrapper = shallow(<Notifications displayDrawer={true} />);
		console.log = jest.fn();
		wrapper.instance().markAsRead(1);
		expect(console.log).toHaveBeenCalled()
		done();    	  });
});
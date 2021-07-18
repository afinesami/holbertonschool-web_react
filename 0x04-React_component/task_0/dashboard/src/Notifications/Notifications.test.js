import React from 'react';
import { expect } from 'chai';
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

	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapperOne.render()).to.not.be.an('undefined');
	});

	it("<Notifications /> renders three items", () => {
		expect(wrapperTwo.find(NotificationItem)).to.have.lengthOf(3);
	});

	it("<Notifications /> renders the first <NotificationItem /> element with the right HTML", () => {
		expect(wrapperTwo.find('ul').childAt(0).html()).to.equal('<li data-priority-type="default"> New course available </li>');
	});

	it("Test that the div.Notifications is not being displayed when displayDrawer is false", () => {
		expect(wrapperOne.exists(".Notifications")).to.equal(false);
	});

	it("item is being displayed when displayDrawer is true", () => {
		expect(wrapperTwo.exists(".menuItem")).to.equal(true);
	});

	it(" div.Notifications is being displayed when displayDrawer is true", () => {
		expect(wrapperTwo.exists(".Notifications")).to.equal(true);
	});
});
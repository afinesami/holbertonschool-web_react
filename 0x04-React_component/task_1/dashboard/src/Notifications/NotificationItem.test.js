import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});

describe("Testing <NotificationItem /> Component", () => {

	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem shouldRender />);

		console.log(wrapper);
		expect(wrapper).to.not.be.an("undefined");
	});

    it("<NotificationItem /> passing dummy html props", () => {
		let props = {
			type: "urgent",
			html: { __html: "<p>test</p>"},
		}
		let component = shallow(<NotificationItem {...props} />);
		expect(component.contains(<li data-priority-type={props.type} dangerouslySetInnerHTML={props.html} />)).to.equal(true);
	});

	it("<NotificationItem />  passing value props", () => {

		let props = {
			type: "default",
			value: "New resume",
			html: undefined
		}
		
		let component = shallow(<NotificationItem {...props} />);

		console.log(component);
		expect(component.contains(< li data-priority-type={props.type} dangerouslySetInnerHTML={undefined}>New resume </li>)).to.equal(false);
	});

});

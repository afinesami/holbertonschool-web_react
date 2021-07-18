
import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

configure({adapter: new Adapter()});
describe("Testing the <App /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});
	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});


	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("<App /> contains <CourseList />", () => {
		expect(wrapper.find(CourseList)).to.have.lengthOf(0);
	});




});
describe("Testing the <App /> when isLoggedIn is true", () => {

	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);

	expect(component.contains(<Login />)).to.equal(false);
	expect(component.find(CourseList)).to.have.lengthOf(1);
});

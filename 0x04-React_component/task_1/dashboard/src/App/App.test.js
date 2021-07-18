
import React from 'react';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

configure({adapter: new Adapter()});
describe("Testing the <App /> Component", () => {
	let events = {};


	beforeEach(() => {
		events = {}; 
		document.addEventListener = jest.fn((event, callback) => {
			events[event] = callback;
		  });
		
		  });

	it('check that CourseList is not displayed when isLoggedIn is false', (done) => {
		const wrapper = shallow(<App />);
		expectChai(wrapper.find(CourseList)).to.have.lengthOf(0);
		done();
	  });
	
	it('verify that when the keys "control" and "h" are pressed the "logOut" function is called', (done) => {
		const logOut = jest.fn(() => void (0));
		shallow(<App />);
		window.alert = logOut;
		events.keydown({ keyCode: 72, ctrlKey: true });
		expect(logOut).toHaveBeenCalled()
		done();
	


	});
});
it('check that CourseList is displayed and Login is not displayed when isLoggedIn is true', (done) => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expectChai(wrapper.find(CourseList)).to.have.lengthOf(1);
    expectChai(wrapper.find(Login)).to.have.lengthOf(0);
    done();
  });
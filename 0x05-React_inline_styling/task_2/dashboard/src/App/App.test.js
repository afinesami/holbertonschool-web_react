import React from 'react';
import { expect } from "chai";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Enzyme from "enzyme";
import Notifications from "../Notifications/Notifications";
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import { StyleSheetTestUtils, } from 'aphrodite';
import CourseList from '../CourseList/CourseList';

configure({adapter: new Adapter()});
describe("Testing the <App /> Component", () => {
	let events = {};


	beforeEach(() => {
		events = {};
		document.addEventListener = jest.fn((event, callback) => {
			events[event] = callback;
		  });

		StyleSheetTestUtils.suppressStyleInjection();
	});

	afterEach(() => {

		StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
		jest.useFakeTimers();
		jest.runAllTimers();

	});

	it('check that renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.exists());
	  });

	it('verify  <App /> contains the <Notifications /> Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).to.have.lengthOf(1);
  });

  it("verify <App /> contains the <Header /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).to.equal(true);
  });
  it("verify <App /> contains the <Login /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Login />)).to.equal(true);
  });

  it("verify <App /> contains the <Footer /> Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Footer />)).to.equal(true);
  });

  it("verify <App /> doesn't render <CourseList /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<CourseList />)).to.equal(false);
  });
});
describe(" verify <App /> Is isLoggedIn", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.useFakeTimers();
    jest.runAllTimers();
  });

  it("verify isLoggedIn is true ", () => {
    const props = {
      isLoggedIn: true,
    };

    const wrapper = shallow(<App {...props} />);

    expect(wrapper.contains(<Login />)).to.equal(false);
    expect(wrapper.find(CourseList)).to.have.lengthOf(1);
  });
  test("verify logOut alerts with correct string", () => {
    const myLogOut = jest.fn(() => undefined);
    const myAlert = jest.spyOn(global, "alert");

    const wrapper = shallow(<App logOut={myLogOut} />);

    expect(myAlert);
    expect(myLogOut);
    jest.restoreAllMocks();
  });
});

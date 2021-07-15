import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect } from 'chai';
import CourseListRow from './CourseListRow'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Test CourseListRow.js', () => {
  it('CourseListRow without crashing', (done) => {
    expect(shallow(<CourseListRow textFirstCell='test' />).exists());
    done();
  });

  it('renders isHeader is True and render with one th', (done) => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' />);

    expect(wrapper.find('th')).to.have.lengthOf(1);
    expect(wrapper.find('th').props()).to.have.property('colSpan', '2');
    done();
  });

  it('renders isHeader is True and render with two th', (done) => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='test' textSecondCell='test' />);

    expect(wrapper.find('th')).to.have.lengthOf(2);
    done();
  });
  it('renders isHeader is False and with two td', (done) => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='test' textSecondCell='test' />);

    expect(wrapper.find('td')).to.have.lengthOf(2);
    done();
  });


});

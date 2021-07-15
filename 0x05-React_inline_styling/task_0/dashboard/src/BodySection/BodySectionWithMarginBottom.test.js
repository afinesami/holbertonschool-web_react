import React from 'react';
import { shallow, configure } from 'enzyme';
import { expect as expectChai } from 'chai';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom'
import BodySection from './BodySection'
import Adapter from 'enzyme-adapter-react-16';
configure({
	adapter: new Adapter()
});


describe('Test BodySectionWithMarginBottom.js', () => {
  it('Render without crashing', (done) => {
    expectChai(shallow(<BodySectionWithMarginBottom title='test title' />).exists());
    done();
  });

  it ('Test if render correctly a BodySection component and that the props are passed correctly to the child component', (done) => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='test title'><p>test children node</p></BodySectionWithMarginBottom>)
    expectChai(wrapper.contains(<div className='bodySectionWithMargin' />));
    expectChai(wrapper.children()).to.have.lengthOf(1);
    expectChai(wrapper.find(BodySection)).to.have.lengthOf(1);
    expectChai(wrapper.find(BodySection).children()).to.have.lengthOf(1);
    expectChai(wrapper.find(BodySection).props().title).to.equal('test title');
    expectChai(wrapper.find('p')).to.have.lengthOf(1);
    expectChai(wrapper.find('p').text()).to.equal('test children node');
    done();
  })
});
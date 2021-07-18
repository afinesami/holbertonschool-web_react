import React from 'react';
import { expect as expectChai } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount, } from 'enzyme';
import BodySection from './BodySection.js';

configure({
	adapter: new Adapter()
});

describe("Testing the <BodySection /> Component", () => {

    it('render "h2" with text "test title" and "p" with text "test children node"', (done) => {
        const wrapper = shallow(<BodySection title='test title'><p>test children node</p></BodySection>);
        expectChai(wrapper.find('h2')).to.have.lengthOf(1);
        expectChai(wrapper.find('h2').text()).to.equal('test title');
        expectChai(wrapper.find('p')).to.have.lengthOf(1);
        expectChai(wrapper.find('p').text()).to.equal('test children node');
        done();
    	});

});

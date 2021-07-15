import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

export default class BodySectionWithMarginBottom extends Component {
    render() {
        return (
          <div className='BodySectionWithMargin'>
            <BodySection title={this.props.title} children={this.props.children}></BodySection>
          </div>
        );
      }
    }
    
    BodySectionWithMarginBottom.propTypes = {
      title: PropTypes.string
    }
    
    BodySectionWithMarginBottom.defaultProps = {
      title: ''
    }
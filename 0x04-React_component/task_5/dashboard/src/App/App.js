import React, {Component, Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types'; 
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection'
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleClick);
  }

  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    let {
      isLoggedIn,
    } = this.props;
    let  listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
  
    let  listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification()} }
    ];
  
  return (
    <Fragment>
    <div className="App">
    <div className="upperside">

    <Notifications listNotifications={listNotifications} />
      <Header />
      </div>

      {
            isLoggedIn === false &&
            <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
            </BodySectionWithMarginBottom>

          }
          {
            isLoggedIn === true &&
            <BodySectionWithMarginBottom title="Course list">

            <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>

          }
             <BodySection title="News from the school">
            <p>
            Apartments simplicity or understood do it we. Song such eyes had and off.
             </p>
          </BodySection>
      <Footer />
      </div>
      </Fragment>
    );  
  };
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func

};
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => void(0)
};

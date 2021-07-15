import React, { Component, Fragment} from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Login extends Component {
	render() {
		return (
		<Fragment>
        <div className="Login-body">
        <p>
            Login to access the full dashboard
        </p>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" className={css(style.loginContainerInput)}/>
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" className={css(style.loginContainerInput)}/>
        <button> OK</button>
            </div>
			</Fragment>
		);
	}
}
const style = StyleSheet.create({
	loginContainerInput: {
	  marginRight: '9px',
	  marginLeft: '9px',
	}
  });


import React, { Component, Fragment} from 'react';
import './Login.css';

class Login extends Component {
	render() {
		return (
		<Fragment>
        <div className="Login-body">
        <p>
            Login to access the full dashboard
        </p>
        <label htmlFor="email"> Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" name="password" />
        <button> OK</button>
            </div>
			</Fragment>
		);
	}
}

export default Login;
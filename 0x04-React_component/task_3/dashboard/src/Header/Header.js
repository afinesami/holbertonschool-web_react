import React from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
        return (
            <div className="App-header">
          <img
            src={logo}
            alt="logo"
          />
          <h1>School dashboard</h1>
        </div>
        	);
        }
        
        export default Header;
        
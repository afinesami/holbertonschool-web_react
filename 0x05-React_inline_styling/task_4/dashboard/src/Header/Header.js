import React from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
        return (
			<header className={css(style.appHeader)}>
      <img src={logo} className={css(style.appLogo)} alt='logo' />
      <h1 className={css(style.appHeaderH1)}>School dashboard</h1>
		  </header>
        	);
        }

const style = StyleSheet.create({
	appHeader: {
	  backgroundColor: '#fff',
	  borderBottom: '3px solid #e1354b',
	  height: '200px',
	  display: 'flex',
	  flexDirection: 'row',
	  justifyContent: 'left',
	},
	appLogo: {
	  width: '200px',
	  height: '200px',
	},
	appHeaderH1: {
		margin: 'auto auto auto 0',

	  display: 'inline',
	  top: '-6rem',
	  color: '#e1354b',
	}
  });



import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer() {
	return (
		<footer>
		<p>Copyright {getFullYear()} - {getFooterCopy()}</p>
		</footer>
	);
}


export default Footer;

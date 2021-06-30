
import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';


export default function Notifications() {
	return (
			<div className="Notifications">
			<button
			style={{
				color: '#3a3a3a',
				fontWeight: 'bold',
				background: 'none',
				border: 'none',
				fontSize: '15px',
				position: 'absolute',
				right: '2px',
				top: '2px',
				cursor: 'pointer',
			}}
			aria-label="Close"
			onClick={(e) => {
				console.log('Close button has been clicked');
			}}
			>
			<img src={closeIcon} alt="closeicon" />
			</button>
			<p>
				Here is the list of notifications
			</p>
			<ul>
				<li data-priority="default">
					New course available
				</li>
				<li data-priority="urgent">
					New resume available
				</li>
				<li
					data-priority="urgent"
					dangerouslySetInnerHTML={{__html: getLatestNotification()}}
				>
				</li>
			</ul>
		</div>
	);
};


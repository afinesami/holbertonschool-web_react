import React, { Component, Fragment } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';


export default class Notifications extends Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};
	render() {
		let {
			displayDrawer,
		} = this.props;

		return (
			<div className="NotificationsComponent">
				<div className="menuItem">
					Your notifications
				</div>
				{
					displayDrawer &&
					<div className="Notifications">
						<button
							style={{
								color: '#3a3a3a',
								fontWeight: 'bold',
								background: 'none',
								border: 'none',
								fontSize: '15px',
								position: 'absolute',
								right: '3px',
								top: '3px',
								cursor: 'pointer',
								outline: 'none',
							}}
							aria-label="Close"
							onClick={(e) => {
								console.log('Close button has been clicked');
							}}
						>
							<img
								src={closeIcon}
								alt="close icon"
							/>
						</button>
						<p>
							Here is the list of notifications
						</p>
						<ul>
							<NotificationItem
								type="default"
								value="New course available"
							/>
							<NotificationItem
								type="urgent"
								value="New resume available"
							/>
							<NotificationItem
								type="urgent"
								html={{__html: getLatestNotification()}}
							/>
						</ul>
					</div>
				}
			</div>
		);
	};
};

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),

};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],

};


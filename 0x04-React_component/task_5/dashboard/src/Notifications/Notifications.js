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
	shouldComponentUpdate(nextProps) {
		if (this.props.listNotifications.length < nextProps.listNotifications.length) return true
		return false;
	  }
	

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	};
	render() {
		let {
			displayDrawer,
			listNotifications,
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
								outline: 'none',
								fontWeight: 'bold',
								background: 'none',
								position: 'absolute',
								border: 'none',
								fontSize: '15px',
								right: '3px',
								top: '3px',
								cursor: 'pointer',
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
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
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


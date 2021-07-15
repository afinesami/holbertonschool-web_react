import React, { Component, Fragment } from 'react';
import { StyleSheet, css } from "aphrodite";
import closeIcon from '../assets/close-icon.png';
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
        <div className={css(styles.menuItem)}>Your notifications</div>
				{
					displayDrawer &&
					<div className={css(styles.Notifications)}>
					<button
						style={{
						float: "right",
						postion: "relative",
						top: "-40",
						background: "none",
						border: "none",
						}}
						aria-label="Close"
						onClick={() => console.log("Close button has been clicked")}
					>
					<img
						src={closeIcon}
						alt="close icon"
					/>
						</button>
						<p>
							Here is the list of notifications
						</p>
						<ul className={css(styles.mediumUl)}>
              {this.props.listNotifications.length === 0 ? (<NotificationItem id={0} value="No new notification for now" type='no-new' markAsRead={this.markAsRead} />) : <></>}
              {this.props.listNotifications.map((list) => (<NotificationItem id={list.id} key={list.id} type={list.type} value={list.value} html={list.html} markAsRead={this.markAsRead} />))}
            </ul>
					</div>
				}
			</div>
		);
	};
};
const styles = StyleSheet.create({
	Notifications: {
	  border: "2px solid #e1484c",
	  borderStyle: "dashed",
	  padding: "10px",
	  textAlign: "left",
	  flexDirection: 'column',
	  position: 'absolute',
	  right: '12px',
	  flexWrap: 'wrap',
	  alignItems: 'flex-end',
	  '@media (max-width: 900px)': {
		border: "2px  #e1484c",

		position: 'absolute !important',
		top: '0',
		right: '0',
		left: '0',
		width: '100%',
		height: '100%',

		background: 'white',
		padding: '6px 12px',
		fontSize: '20px',
	},


	},
	menuItem: {
	  textAlign: "right",
	  fontWeight: "bold",
	  fontFamily: "none",
	  marginBottom: "10px",
	},
	notificationBox: {
	  marginRight: "60px",
	},
	mediumUl: {
		'@media (max-width: 900px)': {
		  fontSize: '20px',
		  padding: '0',
		}
	  }

  });


Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),

};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],

};


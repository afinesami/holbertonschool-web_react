import React, { Component, Fragment } from 'react';

class NotificationItem extends Component {
	render() {
		const { type, value, html } = this.props;
		return (
			<Fragment>
				{html !== undefined &&	<li	data-priority-type={type} dangerouslySetInnerHTML={html} />}
				{html === undefined && <li data-priority-type={type} > {value} </li> }
			</Fragment>
		);
	}
}

export default NotificationItem;

import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class NotificationItem extends PureComponent {
	render() {
		let {id,type,value,html,markAsRead} = this.props;
		return (
			<Fragment>
				{html !== undefined &&<li onClick={() => markAsRead(id)}
						data-priority-type={type}
						dangerouslySetInnerHTML={html}/>}
				{html === undefined && <li onClick={() => markAsRead(id)}
				data-priority-type={type}>{value}</li>}
			</Fragment>
		);
	};
};

NotificationItem.propTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
	type: "default",
};


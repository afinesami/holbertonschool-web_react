import PropTypes from 'prop-types'; 

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string.isRequired }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
});

export default NotificationItemShape;

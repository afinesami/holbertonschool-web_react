import PropTypes from 'prop-types';

let CourseShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	credit: PropTypes.number.isRequired,
});

export default CourseShape;

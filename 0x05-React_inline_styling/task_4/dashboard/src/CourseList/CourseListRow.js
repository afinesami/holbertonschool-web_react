import React from 'react';
import PropTypes from 'prop-types'; // ES6
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let trContent = '';
  let bodyStyle = { backgroundColor: '#f5f5f5ab' };
  let headerStyle = { backgroundColor: '#deb5b545' };
  const styleInLine = isHeader ? headerStyle : bodyStyle;


  if (isHeader) {
    if (textSecondCell === null) {
		trContent = (<th colSpan='2' className={css(style.thFirt, style.thTd)}>{textFirstCell}</th>);
    }
    else {
      trContent = (<React.Fragment><th>{textFirstCell}</th><th>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    trContent = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }
  return (<tr style={styleInLine}>{trContent}</tr>);
}
const style = StyleSheet.create({
	thFirt: {
	  textAlign: 'center',
	},
	thTd: {
	  padding: '0.25rem',
	  border: '1px solid lightgray',
	}
  });

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


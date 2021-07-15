import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  let trContent = '';
  let bodyStyle = { backgroundColor: '#f5f5f5ab' };
  let headerStyle = { backgroundColor: '#deb5b545' };
  const style = isHeader ? headerStyle : bodyStyle;


  if (isHeader) {
    if (textSecondCell === null) {
      trContent = (<th colSpan='2'>{textFirstCell}</th>);
    }
    else {
      trContent = (<React.Fragment><th>{textFirstCell}</th><th>{textSecondCell}</th></React.Fragment>);
    }
  } else {
    trContent = (<React.Fragment><td>{textFirstCell}</td><td>{textSecondCell}</td></React.Fragment>);
  }
  return (<tr style={style}>{trContent}</tr>);
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};


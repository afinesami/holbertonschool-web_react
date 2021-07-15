import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseList({ listCourses }) {

    return (
		<table className={css(styles.table)}>
		<thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" ></CourseListRow>
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
          </thead>
          <tbody>
          {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
          </tbody>
        </table>
    );
  }
  const styles = StyleSheet.create({
	table: {
	  margin: "20px auto",
	  width: "85%",
	  border: "1px solid lightgrey",
	},
  });

  CourseList.defaultProps = {
    listCourses: [],
  };

  CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };

export default CourseList;

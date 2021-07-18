import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

function CourseList({ listCourses }) {

    return (
      <div className="container-course">
        <table id='CourseList'>
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" ></CourseListRow>
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit"></CourseListRow>
          </thead>
          <tbody>
          {listCourses.length === 0 ? (<CourseListRow textFirstCell="No course available yet" isHeader={false} />) : <></>}
          {listCourses.map((course) => (<CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />))}
          </tbody>
        </table>
      </div>
    );
  }

  CourseList.defaultProps = {
    listCourses: [],
  };
  
  CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
  };
  
export default CourseList;
  
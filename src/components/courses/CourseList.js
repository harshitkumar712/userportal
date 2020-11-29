import React from 'react';
import Course from './Course'
import './courses.css'

const CourseList=()=>{
	return(
		<div className="course-grid">
			<Course/>
			<Course/>
			<Course/>
			<Course/>
			<Course/>
			<Course/>
		</div>
		)
}

export default CourseList;
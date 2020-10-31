import React from 'react';
import '../styles/categoryheader.css'

const categoryData= [

	{
		id: 1,
		Name: "JAVA",
		
	},
	{
		id: 2,
		Name: "Python",
		
	},
	{
		id: 3,
		Name: "C++",
		
	},
	{
		id: 4,
		Name: "HTML",
		
	},
	// {
	// 	id: 5,
	// 	Name: "Interview",
	// 	
	// },
	// {
	// 	id: 6,
	// 	Name: "Training",
	// 	
	// },
	// {
	// 	id: 7,
	// 	Name: "Training",
	// 	
	// },
	// {
	// 	id: 8,
	// 	Name: "Training",
	// 	
	// },
	
];
const CatergoryHeader=()=>{
	const category = categoryData.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<div className="category-name">
					{item.Name}
				</div>
			</React.Fragment>
		);
	});

	return(
		<div className="category-header">
			<div className="category-header-home">
				<i className="fas fa-home"></i>
			</div>

			<div className="category-header-contents">
				
				{category}

			</div>
			<div className="dropdown">
  <button className="dropbtn">Categories</button>
  <div className="dropdown-content">
   {category}
  </div>
</div>
<div className="category-header-fixed">Interview</div>
<div className="category-header-fixed">Training</div>
			<div className="category-header-search">
				<i className="fas fa-search"></i>
			</div>
			
			
		</div>
		)
}

export default CatergoryHeader;
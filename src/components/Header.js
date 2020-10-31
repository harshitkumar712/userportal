import React from 'react';
import '../styles/header.css';
import CategoryHeader from './CategoryHeader'

const Header=({showMenu})=>{

	return(
		<div>
		 <div className="header-container">
		 	<div className="header-content">
		 		<div className="bars" onClick={showMenu}>
		 			{/* <i className="fa fa-angle-double-right"></i>Menu */}
					<i className="fas fa-bars"></i>
				</div>
		 	<div className="header-logo">
		 		<h1>LOGO</h1>
		 	</div>
		 	{/* <div className="header-search"> */}
		 	{/* 	<form> */}
		 	{/* 		<input type='text'/> */}
		 	{/* 		<input type="submit"/> */}
		 	{/* 	</form> */}
		 	{/* </div> */}
		 	</div>
		 	<div className="category-header-container">
		 	<CategoryHeader/>
		 </div>
		 </div>
		 
		</div>
		)
}

export default Header;
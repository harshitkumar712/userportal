import React from "react";
import "../styles/categorymenu.css";
import CategoryMenuItems from "./CategoryMenuItems";

const MenuData = [
	{ id: 1, category: "Introduction" },
	{ id: 2, category: "Control Statement" },
	{ id: 3, category: "Inheritence" },
	{ id: 4, category: "Abstraction" },
	{ id: 5, category: "OOPs" },
	// { id: 6, category: "Encapsulation" },
	// { id: 7, category: "Data Hiding" },
	// { id: 8, category: "SUBCRIPTION" },
];

const CategoryMenu = ({showMenu,handleArticle}) => {

	const showDropdown = (e) => {

		const drop = e.target.closest("li").querySelector(".drop");
		const rotate = e.target.closest("li").querySelector(".angle");
		drop.classList.toggle("active");
		rotate.classList.toggle("down");
		
	};

	
	const mData = MenuData.map((item, index) => {
		return (
			<li className="menu-text" key={index}>
				<div className="menu-div" onClick={showDropdown}>
					
			
						{item.category}
				<i
						className="angle fas fa-angle-right"
						
					></i>
				</div>
				<div className="drop " >
					<CategoryMenuItems barid={item.id} handleArticle={handleArticle}/>
				</div>
			</li>
		);
	});

	return (
		<div className="menu">
			<ul className="menu-items">
				<li className="menu-header">
					<div className="menu-header-text">Java Tutorial</div>
					<div className="cross" onClick={showMenu}>
						<i className="fas fa-times"></i>
					</div>
				</li>
				{mData}
			</ul>
		</div>
	);
};

export default CategoryMenu;

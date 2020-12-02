import React,{useEffect,useState} from "react";
import "../styles/categorymenu.css";
import CategoryMenuItems from "./CategoryMenuItems";
import axios from "axios";
// 
// const MenuData = [
// 	{ id: 1, category: "Introduction" },
// 	{ id: 2, category: "Control Statement" },
// 	{ id: 3, category: "Inheritence" },
// 	{ id: 4, category: "Abstraction" },
// 	{ id: 5, category: "OOPs" },
// 	 { id: 6, category: "Encapsulation" },
// 	 { id: 7, category: "Data Hiding" },
// 	 { id: 8, category: "SUBCRIPTION" },
// ];

const CategoryMenu = ({showMenu,handleArticle}) => {


	// const [itemData, setItemData] = useState([]);
	const [menuData,setMenuData]=useState([]);
	useEffect(() => {
		
		axios({
			method: "get",
			url: "https://jsonplaceholder.typicode.com/posts",
		}).then((result) => {
			// console.log(result.data);
			// setItemData(result.data);
		});

		axios({
			method: "get",
			url: "http://192.187.126.18:8082/user/getCategoryMetadata?categoryName=AIIMS",
		}).then((result) => {
			 console.log(result.data.Data);
			setMenuData(result.data.Data);
			const {ArticlesData}=result.data.Data[0];
			console.log(ArticlesData);
			const firstArticle=ArticlesData[0];
			console.log(firstArticle)
			if (!localStorage.getItem("currentArticle")){
			localStorage.setItem("currentArticle", JSON.stringify(firstArticle)); 
			console.log(  JSON.parse(localStorage.getItem("currentArticle"))) 
		}

		});
	}, []);

	const showDropdown = (e) => {

		const drop = e.target.closest("li").querySelector(".drop");
		const rotate = e.target.closest("li").querySelector(".angle");
		drop.classList.toggle("active");
		rotate.classList.toggle("down");
		
	};

	
	const mData = menuData.map((item, index) => {
		return (
			<li className="menu-text" key={index}>
				<div className="menu-div" onClick={showDropdown}>
					
			
						{item.SubCategoryName}
				<i
						className="angle fas fa-angle-right"
						
					></i>
				</div>
				<div className="drop " >
					<CategoryMenuItems barid={item.SubCategoryId} handleArticle={handleArticle} showMenu={showMenu} itemData={item}/>
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

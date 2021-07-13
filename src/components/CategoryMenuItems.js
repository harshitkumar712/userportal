import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "../styles/categorymenuitems.css";

const CategoryMenuItems = ({ barid ,handleArticle,showMenu,itemData}) => {
	
 



 const handleMenuArticle=(id,item)=>{
		handleArticle(id)
		localStorage.setItem("currentArticle", JSON.stringify(item)); 
		showMenu();
 	}

	const dData = itemData.ArticlesData
		// .filter((item) => barid === item.userId)
		.map((item, index) => {
			return (
				<Link to="#" key={index}>
					<div
						className="drop-text"
						onClick={()=>handleMenuArticle(index,item)}
					>
						<div className="drop-inner">
							<i className="fas fa-caret-right"></i>&nbsp;
							{item.title}
							
						</div>
					</div>
				</Link>
			);
		});

	return <div className="drop-outer">{dData}</div>;
};

export default CategoryMenuItems;

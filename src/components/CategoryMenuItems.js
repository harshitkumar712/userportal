import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/categorymenuitems.css";

const CategoryMenuItems = ({ barid ,handleArticle}) => {
	const [itemData, setItemData] = useState([]);
	useEffect(() => {
		axios({
			method: "get",
			url: "https://jsonplaceholder.typicode.com/posts",
		}).then((result) => {
			// console.log(result.data);

			setItemData(result.data);
		});
	}, []);

// const handleArticle=(id)=>{
// 		console.log(id);
// 	}

	const dData = itemData
		.filter((item) => barid === item.userId)
		.map((item, index) => {
			return (
				<Link to="#" key={index}>
					<div
						className="drop-text"
						onClick={()=>handleArticle(item.id)}
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

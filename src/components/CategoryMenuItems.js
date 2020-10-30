import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "../styles/categorymenuitems.css";


const CategoryMenuItems = ({ barid }) => {

const [itemData,setItemData]=useState([]);
	useEffect(()=>{
    axios({
      method: "get",
       url: "https://jsonplaceholder.typicode.com/posts",
      
    }).then((result) => {
    	console.log(result.data);
    
       setItemData(result.data);
    });



	},[])

	
	const dData = itemData.filter((item) => barid === item.userId).map(
		(item, index) => {
			return (
				<Link
					to='#'
					key={index}
				>
					<div className="drop-text">
						<div className="drop-inner">
							<i className='fas fa-caret-right'></i>&nbsp;{item.title}</div>
					</div>
				</Link>
			);
		}
	);

	return <div className="drop-outer" >{dData}</div>;
};

export default CategoryMenuItems;

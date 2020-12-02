import React, { useState, useEffect } from "react";
import "../styles/mainarticle.css";
// import axios from "axios";
import ArticleButton from "./ArticleButton";
import ReactHtmlParser from "react-html-parser";
const MainArticle = ({ currentId }) => {
	const [articleId,setArticleId]=useState(currentId);
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
// 	useEffect(()=>{
// 		setArticleId(currentId);
// 	},[currentId]);
// 	useEffect(() => {
// 
// 		setLoading(true);
// 		axios({
// 			method: "get",
// 			url: `https://jsonplaceholder.typicode.com/posts/${articleId}`,
// 		}).then((result) => {
// 			setLoading(false);
// 			setArticle(result.data.body);
// 			localStorage.setItem('current', articleId);
// 		});
// 	},[articleId]);


useEffect(()=>{
   setArticle(JSON.parse(localStorage.getItem("currentArticle")).body);
   setLoading(false);
},[currentId])

	const articleData = loading ? (
		<p>loading...</p>
	) : (
		<div className="mainarticle-inner" >
			<h1>{articleId}</h1>
			<div className="article-container">
				 {ReactHtmlParser(article)}
				{/* <hr /> */}
				{/* {article} */}
				{/* <hr /> */}
				{/* {article} */}
				{/* <hr /> */}
				{/* {article} */}
			</div>
		</div>
	);
	return (
		<div className="mainarticle-container">
			<ArticleButton setArticleId={setArticleId}/>
			{articleData}
			<ArticleButton setArticleId={setArticleId}/>
		</div>
	);
};

export default MainArticle;

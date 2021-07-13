import React, { useState, useEffect } from "react";
import "../styles/mainarticle.css";
// import axios from "axios";
import ArticleButton from "./ArticleButton";
import ReactHtmlParser from "react-html-parser";
const MainArticle = ({ currentId ,data}) => {

	const [articleId,setArticleId]=useState(currentId);
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
  	 useEffect(()=>{
  	 	setArticleId(currentId);

  	 },[currentId]);
  	useEffect(() => {
  
  		setLoading(false);
  		// axios({
  		// 	method: "get",
  		// 	url: `https://jsonplaceholder.typicode.com/posts/${articleId}`,
  		// }).then((result) => {
  		// 	setLoading(false);
  		// 	setArticle(result.data.body);
  		// 	localStorage.setItem('current', articleId);
  		// });
  		if(articleId>=0)
  		data&&setArticle(data[articleId])
  	setLoading(false);
  	},[articleId,data]);

// useEffect(()=>{
// 	if (localStorage.getItem("currentArticle")){
//    setArticle(JSON.parse(localStorage.getItem("currentArticle")).body);
//    setLoading(false);
// }
//  setArticleId(currentId);
// },[currentId])

	const articleData = !article ? (
		<p>loading...</p>
	) : (
		<div className="mainarticle-inner" >
			<u>{article.title}</u>
			<div className="article-container">
				 {ReactHtmlParser(article.body)}
			</div>
			<p>Article contributed by:<b>{article.author}</b>on Date:<b>{article.date}</b></p>
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

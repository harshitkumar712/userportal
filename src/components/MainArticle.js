import React, { useState, useEffect } from "react";
import "../styles/mainarticle.css";
import axios from "axios";
import ArticleButton from "./ArticleButton";
const MainArticle = ({ currentId }) => {
	const [articleId,setArticleId]=useState(currentId);
	const [article, setArticle] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		setArticleId(currentId);
	},[currentId]);
	useEffect(() => {

		setLoading(true);
		axios({
			method: "get",
			url: `https://jsonplaceholder.typicode.com/posts/${articleId}`,
		}).then((result) => {
			setLoading(false);
			setArticle(result.data.body);
			localStorage.setItem('current', articleId);
		});
	},[articleId]);

	const articleData = loading ? (
		<p>loading...</p>
	) : (
		<div>
			<h1>{articleId}</h1>
			<h2>
				{article}
				<hr />
				{article}
				<hr />
				{article}
				<hr />
				{article}
			</h2>
		</div>
	);
	return (
		<div>
			<ArticleButton setArticleId={setArticleId}/>
			{articleData}
			<ArticleButton setArticleId={setArticleId}/>
		</div>
	);
};

export default MainArticle;

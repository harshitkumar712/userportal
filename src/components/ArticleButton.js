import React from 'react';
import '../styles/articlebutton.css'

const ArticleButton=({setArticleId})=>{
	return(
		<div className="button-container">
			<div className="button-inner">
			<div className="button-prev"><button onClick={() => setArticleId(prevCount => prevCount - 1)}>Previous</button></div>
			<div className="button-next" ><button onClick={() => setArticleId(prevCount => prevCount + 1)}>Next</button></div>


			</div>
		</div>
		)
}

export default ArticleButton;
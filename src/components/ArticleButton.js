import React from 'react';
import '../styles/articlebutton.css'

const ArticleButton=()=>{
	return(
		<div className="button-container">
			<div className="button-inner">
			<div className="button-prev"><button>Previous</button></div>
			<div className="button-next" ><button>Next</button></div>
			</div>
		</div>
		)
}

export default ArticleButton;
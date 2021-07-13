import React,{useState} from "react";
import "../styles/main.css";
import CategoryMenu from "./CategoryMenu";
import MainArticle from "./MainArticle";
const Main = ({menu,showMenu}) => {
const [currentId,setCurrentId]=useState(0);
const [articleData,setArticleData]=useState(null);
const handleArticle=(id)=>{
	setCurrentId(id);

}

// const handleArticleData=(data)=>{
// 	setArticleData(data);
// 	console.log(articleData);
// }




	return (
		<div className="main-container container-fluid">
			<div className={menu?"container-left active":"container-left"} style={{ background: "#eee" }}>
				<CategoryMenu showMenu={showMenu} setArticleData={setArticleData} handleArticle={handleArticle} />
			</div>
			<div className="container-middle" style={{ background: "white", padding: "0 15px" }}>
				<MainArticle currentId={currentId} data={articleData} />
			</div>
			<div className="container-right" style={{ background: "#eee" }}></div>
		</div>
	);
};

export default Main;

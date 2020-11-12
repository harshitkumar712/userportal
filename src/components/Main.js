import React,{useState} from "react";
import "../styles/main.css";
import CategoryMenu from "./CategoryMenu";
import MainArticle from "./MainArticle";
const Main = ({menu,showMenu}) => {
const [currentId,setCurrentId]=useState(1);
const handleArticle=(id)=>{
	setCurrentId(id);

}

	return (
		<div className="main-container container-fluid">
			<div className={menu?"container-left active":"container-left"} style={{ background: "#eee" }}>
				<CategoryMenu showMenu={showMenu} handleArticle={handleArticle} />
			</div>
			<div className="container-middle" style={{ background: "white", padding: "0 15px" }}>
				<MainArticle currentId={currentId} />
			</div>
			<div className="container-right" style={{ background: "#eee" }}></div>
		</div>
	);
};

export default Main;

import React from "react";
import "../styles/main.css";
import CategoryMenu from "./CategoryMenu";
import MainArticle from "./MainArticle";
const Main = ({menu,showMenu}) => {
	return (
		<div className="main-container container-fluid">
			<div className={menu?"container-left active":"container-left"} style={{ background: "#eee" }}>
				<CategoryMenu showMenu={showMenu}/>
			</div>
			<div className="container-middle" style={{ background: "white", padding: "0 15px" }}>
				<MainArticle />
			</div>
			<div className="container-right" style={{ background: "#eee" }}></div>
		</div>
	);
};

export default Main;

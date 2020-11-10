import React,{useState} from "react";
import "../styles/header.css";
import CategoryHeader from "./CategoryHeader";
import Modal from './Modal';
import Authentication from './Authentication';

const Header = ({ showMenu }) => {
   
   const [modal,setModal]= useState(false);


const handleSignIn=()=>{
	setModal(!modal);
}
	return (
		<div>
			<div className="header-container">
				<div className="header-content">
					<div className="bars" onClick={showMenu}>
						{/* <i className="fa fa-angle-double-right"></i>Menu */}
						<i className="fas fa-bars"></i>
					</div>
					<div className="header-logo">
						<h1>LOGO</h1>
					</div>
					<div className="header-button-signin">
						<button onClick={handleSignIn}>Sign in</button>
					</div>
					{/* <div className="header-search"> */}
					{/* 	<form> */}
					{/* 		<input type='text'/> */}
					{/* 		<input type="submit"/> */}
					{/* 	</form> */}
					{/* </div> */}
				</div>
				<div className="category-header-container">
					<CategoryHeader />
				</div>
			</div>
			<Modal open={modal} close={()=>setModal(false)} > <Authentication/></Modal>
			
		</div>
	);
};

export default Header;

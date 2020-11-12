import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from './components/Footer'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
	const [menu, setMenu] = useState(false);
	const showMenu = () => {
		setMenu(!menu);
	};

	return (
		<div className="App">
			<Router>
				<Header showMenu={showMenu} />
				<Main menu={menu} showMenu={showMenu} />
				
			</Router>
			<Footer/>
		</div>
	);
}

export default App;

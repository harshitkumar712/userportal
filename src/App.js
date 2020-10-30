import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
	const [menu, setMenu] = useState(true);
	const showMenu = () => {
		setMenu(!menu);
		console.log("hey");
	};

	return (
		<div className="App">
			<Router>
				<Header showMenu={showMenu} />
				<Main menu={menu} showMenu={showMenu} />
			</Router>
		</div>
	);
}

export default App;

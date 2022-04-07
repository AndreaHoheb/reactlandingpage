import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Cards } from "./cards";
import { Jumbotron } from "./jumbotron";
import { NavBar } from "./navbar";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container margin mx-5">
				<Jumbotron />
				<Cards />
			</div>
		</div>
	);
};

export default Home;

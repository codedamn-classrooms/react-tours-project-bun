import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [tours, setTours] = useState([]);

	async function fetchTours() {
		// write code to fetch tours here
	}

	return tours.map((tour) => {
		return <h2>{tour.name}</h2>;
	});
}

export default App;

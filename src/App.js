import "./App.css";
import { Routes, Route, HashRouter } from "react-router";
import Home from "./pages/Home";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</HashRouter>
	);
}

export default App;

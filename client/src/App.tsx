import "./App.css";
import ListExercises from "./pages/ListExercises/ListExercises";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
	return (
		<>
			<nav>
				<Navbar />
			</nav>
			<main>
				<h1>Hi !</h1>
				<ListExercises />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;

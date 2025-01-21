import "./App.css";

import Flexion from "./assets/flexion.jpeg";

function App() {
	return (
		<>
			<nav>
				<button type="button" className="button_menu">
					Exercices
				</button>
				<button type="button" className="button_menu">
					Routines
				</button>
				<button type="button" className="button_menu">
					Signature dedans / dehors
				</button>
			</nav>
			<main>
				<h1>Hi !</h1>
				<article className="card">
					<h2>1ère étape :</h2>
					<img src={Flexion} alt="bonhomme_en_flexion" />
				</article>
			</main>
			<footer>Made with lots of love and energy</footer>
		</>
	);
}

export default App;

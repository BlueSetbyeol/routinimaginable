import "./Navbar.css";
import connect from "../../assets/icones/connect.svg";
import home from "../../assets/icones/home.svg";
import exercise from "../../assets/icones/exercise.svg";
import routine from "../../assets/icones/routine.svg";

export default function Navbar() {
	return (
		<>
			<button type="button" className="button_menu">
				<img src={home} alt="aller à l'accueil" />
				<p>Home</p>
			</button>
			<section className="navigation_btn">
				<button type="button" className="button_menu">
					<img src={exercise} alt="voir les exercices" />
					<p>Exercices</p>
				</button>
				<button type="button" className="button_menu">
					<img src={routine} alt="voir les routines" />
					<p>Routines</p>
				</button>
				<button type="button" className="button_menu">
					<img src={connect} alt="connexion" />
					<p>Connexion</p>
				</button>
			</section>
		</>
	);
}

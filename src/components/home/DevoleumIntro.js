import ImgIdea from '../../imgs/solution.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
	en: {
		title: 'What is Devoleum?',
		content: 'Devoleum is a web app. Devoleum organizes data from physical or digital supply chains into meaningful stories, making each step immutable on blockchain or other distributed systems. Devoleum automatically builds a storyboard of the product, easily accessible on our web app from any device just by scanning a smart tag. Devoleum is an open source project, free and open to everyone.',
		calltoaction: 'Explore'
	},
	it: {
		title: 'Cosa è Devoleum?',
		content: 'Devoleum è una web app. Devoleum organizza i dati di filiere fisiche o digitali in storie significative, rendendo ogni passaggio immutabile su blockchain o altri sistemi distribuiti. Ogni storia mostra in modo chiaro e dettagliato i passaggi che hanno contribuito a rendere il prodotto unico e prezioso. Devoleum crea automaticamente uno storytelling del prodotto, facilmente accessibile sulla nostra piattaforma da qualsiasi dispositivo semplicemente scansionando uno smart tag. Devoleum è un progetto open source, gratuito e aperto a tutti.',
		calltoaction: 'Esplora le Storie'
	},
	fr: {
		title: "Qu'est-ce que Devoleum?",
		content: "Devoleum est une application Web. Devoleum organise les données des chaînes d'approvisionnement physiques ou numériques en histoires significatives, rendant chaque étape immuable sur la blockchain ou d'autres systèmes distribués. Chaque histoire montre clairement et en détail les étapes qui ont contribué à rendre le produit unique et précieux. Devoleum crée automatiquement un historique du produit, facilement accessible sur notre plateforme à partir d'un appareil, simplement en scannant une smart tag. Devoleum est un projet open source, gratuit et ouvert à tous.",
		calltoaction: 'Visitez notre plateforme'
	}
});

export function DevoleumIntro() {
  

	return (
		<section className="devo-section green-bg">
			<div class="container">
				<div class="columns">
					<div class="column col-8 col-md-12 col-ml-auto text-side">
						<div>
							<h2 className="title">{strings.title}</h2>
							<div className="sub-content">
								{strings.content}
							</div>
							<br />
							<br />
							<a href="https://app.devoleum.com/"
								target="_blank" className="think-link"
							>
								{strings.calltoaction}
							</a>
						</div>
					</div>
					<div className="column col-4 col-md-12 col-ml-auto img-side-container">
						<img src={ImgIdea} className="img-side" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

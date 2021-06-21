import ImgIdea from '../../imgs/solution.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
	en: {
		title: 'What is Devoleum?',
		content: 'Devoleum is a web app that transforms the linked open data of physical or digital supply chains into meaningful stories, making each step immutable on blockchain or other distributed systems. Each story shows in a clear and detailed way the steps that contributed to making the product unique and precious. Devoleum automatically creates a product storytelling, easily accessible on our platform from any device simply by scanning a QR code. Devoleum is an open source project, free and open to everyone.',
		calltoaction: 'Explore'
	},
	it: {
		title: 'Cosa è Devoleum?',
		content: 'Devoleum è una web app che trasforma i linked open data di filiere fisiche o digitali in storie significative, rendendo ogni passaggio immutabile su blockchain o altri sistemi distribuiti. Ogni storia mostra in modo chiaro e dettagliato i passaggi che hanno contribuito a rendere il prodotto unico e prezioso. Devoleum crea automaticamente uno storytelling del prodotto, facilmente accessibile sulla nostra piattaforma da qualsiasi dispositivo semplicemente scansionando un QR code. Devoleum è un progetto open source, gratuito e aperto a tutti.',
		calltoaction: 'Esplora'
	},
	fr: {
		title: "Qu'est-ce que Devoleum?",
		content: "Devoleum est une application Web qui transforme les données ouvertes liées des chaînes d'approvisionnement physiques ou numériques en histoires significatives, rendant chaque étape immuable sur la blockchain ou d'autres systèmes distribués. Chaque histoire montre de manière claire et détaillée les étapes qui ont contribué à rendre le produit unique et précieux. Devoleum crée automatiquement un storytelling de produit, facilement accessible sur notre plateforme depuis n'importe quel appareil en scannant simplement un code QR. Devoleum est un projet open source, gratuit et ouvert à tous.",
		calltoaction: 'Explorer'
	}
});

export function DevoleumIntro() {
  

	return (
		<div>
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
								<a href="https://app.devoleum.com/"
									target="_blank" className="think-link"
								>
									<button>{strings.calltoaction}</button>
								</a>
							</div>
						</div>
						<div className="column col-4 col-md-12 col-ml-auto img-side-container">
							<img src={ImgIdea} className="img-side" alt="" />
						</div>
					</div>
				</div>
			</section>
			<svg style={{ display: 'block', backgroundColor: '#a2ba24', marginBottom: '-5px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f6f6f6" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
		</div>

	);
}

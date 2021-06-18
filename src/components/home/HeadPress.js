import '../../styles/utilities/alice-carousel.scss';
import LocalizedStrings from 'localized-strings';
import ForbesImg from '../../imgs/press/forbes.png';
import InsiderImg from '../../imgs/press/bi.png';
import MessaggeroImg from '../../imgs/press/im.png';
import FigaroImg from '../../imgs/press/figaro.jpg';

let strings = new LocalizedStrings({
	en: {
		title: "Who's talking about Us"
	},
	it: {
		title: 'Dicono di noi'
	},
	fr: {
		title: 'Presse'
	}
});

const QUOTES = [
	{
		img: ForbesImg,
		quote:
      'Forbes includes Devoleum in the 60 Women-Led Startups That Are Shaking Up Tech Across The Globe list.',
		source:
      'https://www.forbes.com/sites/allysonkapin/2018/09/19/60-women-led-startups-who-are-shaking-up-tech-across-the-globe/#6f716ea875da',
		journal: 'Forbes'
	},
	{
		img: FigaroImg,
		quote:
      "Projet d'Elisa Romondia, développe use de Devoleum, afin de certifier l'origine des huiles d'olive de son Italie natale.",
		source:
      'http://www.lefigaro.fr/secteur/high-tech/start-up/2017/10/20/32004-20171020ARTFIG00341-qui-est-derriere-novagray-la-start-up-recompensee-par-le-prix-starther.php',
		journal: 'Le Figaro'
	},
	{
		img: MessaggeroImg,
		quote:
      "Certificare la qualità dell'olio d'oliva come si fa con i diamanti, l'idea alla Sapienza.",
		source:
      'http://www.ilmessaggero.it/roma/cronaca/roma_laureati_con_il_pollice_verde_start_up_e_robot_per_i_campi_con_l_universita_il_lavoro_e_bio-3454639.html',
		journal: 'Il Messaggero'
	},

	{
		img: InsiderImg,
		quote:
      "Permettent de certifier l'huile d'olive grâce à la technologie blockchain.",
		source:
      'http://www.businessinsider.fr/startups-finalistes-starther-awards-2017',
		journal: 'Business Insider'
	}
];
export function HeadPress() {
	return (
		<section className="devo-section container" align="center">
			<div className="columns">
				{QUOTES.map((el) => (
					<div class="column col-6 col-md-12 columns" align="center">
						<div className="column col-2 col-md-12 col-mr-auto">
							<img src={el.img} alt="" className="img-side s-circle" />
						</div>
						<div className="column col-md-12 press-container">
							<div className="sub-content" align="left">
                “{el.quote}”
							</div>
							<br />
							<div className="quote-source" align="left">
								{el.journal}
								<br />
								<a href={el.source} className="thin-link" target="_blank">
                  Link
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

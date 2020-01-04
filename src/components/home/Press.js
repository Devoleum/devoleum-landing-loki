import AliceCarousel from 'react-alice-carousel';
import "../../styles/utilities/alice-carousel.scss";
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "Who's talking about Us",
 },
 it: {
   title: "Dicono di noi",
 },
 fr: {
  title: "Presse",
}
});


const QUOTES = [{
    quote: "Forbes mentioned Elisa Romondia in the 60 Women-Led Startups That Are Shaking Up Tech Across The Globe list.",
    source: "https://www.forbes.com/sites/allysonkapin/2018/09/19/60-women-led-startups-who-are-shaking-up-tech-across-the-globe/#6f716ea875da",
    journal: "Forbes"
  },
  {
    quote: "Projet d'Elisa Romondia, développe use de Devoleum, afin de certifier l'origine des huiles d'olive de son Italie natale. Une initiative qui lui vaut d'avoir été repérée par la chambre de commerce et de l'industrie italienne, avec qui elle a entamé des discussions.",
    source: "http://www.lefigaro.fr/secteur/high-tech/start-up/2017/10/20/32004-20171020ARTFIG00341-qui-est-derriere-novagray-la-start-up-recompensee-par-le-prix-starther.php",
    journal: "Le Figaro"
  },
  {
    quote: "La développeuse Élisa Romondia, qui a cofondé Devoleum, une marketplace italienne utilisant la blockchain pour certifier et commercialiser des huiles d’olive produites localement.",
    source: "https://www.usinenouvelle.com/article/les-reseaux-se-mobilisent-pour-promouvoir-les-femmes-dans-le-numerique-pour-quel-resultat.N619018",
    journal: "L'Usine Nouvelle"
  },
  {
    quote: "Certificare la qualità dell'olio d'oliva come si fa con i diamanti, l'idea alla Sapienza.",
    source: "http://www.ilmessaggero.it/roma/cronaca/roma_laureati_con_il_pollice_verde_start_up_e_robot_per_i_campi_con_l_universita_il_lavoro_e_bio-3454639.html",
    journal: "Il Messaggero"
  },
  {
    quote: "Devoleum, utiliser la Blockchain pour certifier et commercialiser les huiles d’olives produites localement.",
    source: "https://www.forbes.fr/femmes-at-forbes/starther-awards-la-start-up-medtech-novagray-remporte-le-concours/?cn-reloaded=1",
    journal: "Forbes"
  },
  {
    quote: "Permettent de certifier l'huile d'olive grâce à la technologie blockchain.",
    source: "http://www.businessinsider.fr/startups-finalistes-starther-awards-2017",
    journal: "Business Insider"
  }
]
export function Press() {
  return (
    <section className="devo-section green-bg container" align="center">
    <div>
        <h2 className="title">{strings.title}</h2>
        <AliceCarousel mouseDragEnabled>
          { QUOTES.map( el =>
            <div align="center">
                <div className="press-container">
                        <div className="sub-content" align="center">
                            “{el.quote}”
                        </div>
                    <br />
                    <div className="quote-source" align="center">
                      {el.journal}
                    </div>
                    <a href={el.source} className="thin-link" target="_blank">
                    Link
                </a>
                </div>
            </div>
          )
        }
        </AliceCarousel>
      </div>
    </section>
  );
}

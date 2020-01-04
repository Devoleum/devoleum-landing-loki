import ImgIdea from '../../imgs/solution.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "Our solution",
   content: "Devoleum is free and open to everyone. Our solution transforms the data of any supply chain in a meaningful story, making it immutable on the blockchain, showing clearly the digital or physical steps that have helped make the product unique and valuable. Devoleum automatically builds a storyboard of the product, easily accessible on our web app from any device just by scanning a smart tag.",
   calltoaction: "Try the simulation"
 },
 it: {
   title: "La nostra soluzione",
   content: "Devoleum è gratuito e aperto a tutti. La nostra soluzione trasforma i dati di qualsiasi filiera in una storia significativa, rendendoli immutabili sulla blockchain. Ogni storia mostra in modo chiaro e dettagliato i passaggi digitali o fisici che hanno contribuito a rendere il prodotto unico e prezioso. Devoleum crea automaticamente uno storico del prodotto, facilmente accessibile sulla nostra piattaforma da qualsiasi dispositivo semplicemente scansionando uno smart tag.",
   calltoaction: "Prova la simulazione"
 },
 fr: {
   title: "Notre solution",
   content: "Notre solution Devoleum est gratuite et ouverte à tous. Notre solution transforme les données de toute chaîne d'approvisionnement en une histoire significative. Rendant l’histoire de la production immuable sur la blockchain, montrant clairement les étapes numériques ou physiques qui ont contribué à rendre le produit unique et précieux. Devoleum crée automatiquement un historique du produit, facilement accessible sur notre plateforme à partir d'un appareil, simplement en scannant une smart tag.",
   calltoaction: "Essayez la simulation"
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
            <a href="https://simulation.devoleum.com/"
             target="_blank" className="think-link">
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

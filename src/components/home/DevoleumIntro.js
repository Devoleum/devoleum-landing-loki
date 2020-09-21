import ImgIdea from '../../imgs/solution.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "What is Devoleum?",
   content: "Devoleum is a web app based on Ethereum Blockchain. Devoleum organizes the data of digital or physical supply chain in meaningful stories, making each step immutable on the blockchain. Each story shows clearly the steps that have helped make the product unique and valuable. Devoleum automatically builds a storyboard of the product, easily accessible on our web app from any device just by scanning a smart tag. Devoleum is an open source project, free and open to everyone.",
   calltoaction: "Try the simulation"
 },
 it: {
   title: "Cosa è Devoleum?",
   content: "Devoleum è una piattaforma web basata su Ethereum Blockchain. Devoleum organizza i dati di filiere fisiche o digitali in storie significative, rendendo ogni passaggio immutabile sulla blockchain. Ogni storia mostra in modo chiaro e dettagliato i passaggi che hanno contribuito a rendere il prodotto unico e prezioso. Devoleum crea automaticamente uno storico del prodotto, facilmente accessibile sulla nostra piattaforma da qualsiasi dispositivo semplicemente scansionando uno smart tag. Devoleum è un progetto open source, gratuito e aperto a tutti.",
   calltoaction: "Prova la simulazione"
 },
 fr: {
   title: "Qu'est-ce que Devoleum?",
   content: "Devoleum est une web app basée sur la Blockchain Ethereum. Devoleum organise les données de le chaînes d'approvisionnement numériques ou physiques en histoires significative, rendant chaque etape de la producion immuable sur la blockchain. Chaque histoire montre clairement et en détail les étapes qui ont contribué à rendre le produit unique et précieux. Devoleum crée automatiquement un historique du produit, facilement accessible sur notre plateforme à partir d'un appareil, simplement en scannant une smart tag. Devoleum est un projet open source, gratuit et ouvert à tous.",
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

import ImgIdea from '../../imgs/solution.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   content: "The cost of fraud in the food supply chain is estimated at $40 billion annually. Traditional systems for food supply chain certifications are locked in paperwork and not transparent, slowing the financial flow and allowing tampering and fraud. Intense competition and increased demand have allowed the sale of poor quality products.",
 },
 it: {
   content: "Il costo delle frodi nella filiera alimentare è stimato a 40 miliardi di dollari all'anno. I sistemi tradizionali per le certificazioni di filiera alimentare sono chiusi in pratiche burocratiche e non trasparenti, rallentando il flusso finanziario e consentendo manomissioni e frodi. L'intensa concorrenza e l'aumento della domanda hanno consentito la vendita di prodotti di scarsa qualità.",
 },
 fr: {
   content: "Le coût de la fraude dans la chaîne d'approvisionnement alimentaire est estimé à 40 milliards de dollars par an. Les systèmes traditionnels de certification de la chaîne d'approvisionnement alimentaire sont enfermés dans la paperasse et ne sont pas transparents, ce qui ralentit le flux financier et permet la falsification et la fraude. Une concurrence intense et une demande accrue ont permis la vente de produits de mauvaise qualité.",
 }
});

export function Why() {
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

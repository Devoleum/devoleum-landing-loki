import LocalizedStrings from 'localized-strings';
import {h, render, Component} from 'preact';

let strings = new LocalizedStrings({
 en:{
   title: [
     'I want to try Devoleum!',
     'How Devoleum integrates Smart Tags?',
     'What tech does Devoleum use?',
     'Deveolum is a software or hardware solution?',
     'Do you have a white paper?',
     'Do you plan an ICO?'
   ],
   faq_content: [
     "You can try our simulation for free, build your supply chain at this link.",
     "Take a look at the video in the link, using different kinds of Oracles Devoleum can integrate even more advanced smart tags.",
     "All the tech behind Devoleum is open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc...",
     "Devoleum is a digital solution, we manage the data provided by the users, we do not generate data or provide hardware tools.",
     "No, we are busy working on the real project and is in constant evolution, we do not have time to waste on a fake paper, we suggest to read this article",
     "No, we do not beg for money, if you want to invest in Devoleum you are welcome, contact us and do not forget to link your investments portfolio."
   ],
   link: [
     'Link to simulation',
     'Smart tag video',
     '',
     '',
     'Article link',
     'Contact us'
   ]
 },
 it: {
   title: [
     'Voglio provare Devoleum!',
     "In che modo Devoleum integra gli smart tag?",
     "Quale tecnologie utilizza Devoleum?",
     "Deveolum è una soluzione software o hardware?",
     'Avete un whitepaper?',
     "Pianificate una ICO?"
   ],
   faq_content: [
        "Puoi provare la nostra simulazione gratuitamente, simulare la costruzione della tua filiera a questo link.",
        "Guarda il video nel link, utilizzando diversi tipi di oracoli Devoleum può integrare smart tag ancora più avanzati.",
        "Tutta la tecnologia alla base di Devoleum è open source, blockchain di Ethereum, Tensor Flow, PySyft, Truffle, React, Preact, Electron ecc ...",
        "Devoleum è una soluzione digitale, i dati sono forniti dagli utenti, non generiamo dati o forniamo strumenti hardware.",
        "No, siamo impegnati a lavorare sul progetto concreto ed è in continua evoluzione, non abbiamo tempo da perdere su un documento fatto di promesse, ti consigliamo di leggere questo articolo",
        "No, non chiediamo soldi, se vuoi investire in Devoleum sei il benvenuto, contattaci e non dimenticare di collegare il tuo portfolio di investimenti."
      ],
   link: [
     "Link alla simulazione",
     "Smart tag video",
     '',
     '',
     "Collegamento dell'articolo",
     'Contattaci'
   ]
 }
});

const LINKS = [
  'https://simulation.devoleum.com/',
  'https://www.youtube.com/watch?v=LgfpouDZ4A0',
  '',
  '',
  'https://medium.com/loom-network/loom-network-wheres-your-whitepaper-5c5c9075af72',
  'mailto:devoleum@gmail.com'
]
const setCurrent = ({ instance, index }, e) => {
  e.stopPropagation();
  instance.setState({ current: index });
  ga('send', 'event', 'Differences', instance.state.list[instance.state.current].name);
};

export default class ContentAccordion extends Component {
  render() {
    return (
      <section className="devo-section container">
          <h2 className="title">FAQ</h2>

          <div>
              {strings.title.map((item, index) => {
              return <div className="accordion faq">
                  <div className="divider"></div>
                  <input type="checkbox" id={ "accordion-" + index} name="accordion-checkbox" hidden />
                  <label className="accordion-header title" for={ "accordion-" + index}>
                      <i className="icon icon-arrow-right mr-1"></i> {item}
                  </label>
                  <div className="accordion-body sub-content faq-text">
                      {strings.faq_content[index]}
                      <br />
                      <br />
                      <a className="accordion-body sub-content" href={LINKS[index]}>
                                {strings.link[index]}
                              </a>
                  </div>

              </div>; })}

          </div>
      </section>
    );
  }
}

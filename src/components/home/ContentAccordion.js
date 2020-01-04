import LocalizedStrings from 'localized-strings';
import {h, render, Component} from 'preact';

let strings = new LocalizedStrings({
 en:{
   faq: [
     {
       title: 'I want to try Devoleum!',
       content: "You can try our simulation for free, build your supply chain at this link.",
       link: 'Smart tag video'
     },
     {
       title: 'How Devoleum integrates Smart Tags?',
       content: "Take a look at the video in the link, using different kinds of Oracles Devoleum can integrate even more advanced smart tags.",
       link: 'Link to simulation'
     },
     {
       title: 'What tech does Devoleum use?',
       content: "All the tech behind Devoleum is open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc...",
       link: ''
     },
     {
       title: 'Deveolum is a software or hardware solution?',
       content: "Devoleum is a digital solution, we manage the data provided by the users, we do not generate data or provide hardware tools.",
       link: ''
     },
     {
       title: 'Do you have a white paper?',
       content: "No, we are busy working on the real project and is in constant evolution, we do not have time to waste on a fake paper, we suggest to read this article",
       link: 'Article link'
     },
     {
       title: 'Do you plan an ICO?',
       content: "No, we do not beg for money, if you want to invest in Devoleum you are welcome, contact us and do not forget to link your investments portfolio.",
       link: 'Contact us'
     },
   ]
 },
 it: {
   faq: [
     {
       title: 'Voglio provare Devoleum!',
       content: "Puoi provare la nostra simulazione gratuitamente a questo link.",
       link: 'Link alla simulazione'
     },
     {
       title: 'In che modo Devoleum integra gli smart tag?',
       content: "Una dimostrazione di come vengono Devoleum integra gli smart tag è disponibile al link di seguito. Grazie all'utilizzo di diversi tipi di oracoli Devoleum può integrare smart tag ancora più avanzati.",
       link: 'Smart tag video'
     },
     {
       title: 'Quali tecnologie utilizza Devoleum?',
       content: "Tutte le tecnologie alla base di Devoleum sono open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron ecc ...",
       link: ''
     },
     {
       title: 'Deveolum è una soluzione software o hardware?',
       content: "Devoleum è una soluzione digitale, i dati sono forniti dagli utenti, non generiamo dati né forniamo strumenti hardware.",
       link: ''
     },
     {
       title: 'Avete un whitepaper?',
       content: "Non siamo interessati alla stesura di un white paper, per i motivi menzionati nell'articolo disponibile a questo link",
       link: "Collegamento dell'articolo"
     },
     {
       title: 'Pianificate una ICO?',
       content: "No, non abbiamo intenzione di lanciare una ICO, chiunque voglia investire in Devoleum è il benvenuto. Se siete interessati potete contattarci includendo il portfolio di investimenti.",
       link: 'Contattaci'
     },
   ],

 },
 fr: {
  faq: [
    {
      title: 'Je veux essayer Devoleum!',
      content: "Vous pouvez essayer notre simulation gratuitement sur ce lien.",
      link: 'Lien simulation'
    },
    {
      title: 'Comment Devoleum intègre-t-il les smart tag?',
      content: "Il est possible de voir une démonstration dans la vidéo sur ce lien, en utilisant différents types d'oracles, Devoleum peut intégrer des smart tag encore plus avancées.",
      link: 'Lien vidéo'
    },
    {
      title: 'Quelles technologies utilisent Devoleum?',
      content: "Toutes les technologies utilisées par Devoleum sont open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc …",
      link: ''
    },
    {
      title: 'Devoleum est-il une solution numérique ou hardware?',
      content: "Devoleum est une solution numérique, les données sont fournies par les utilisateurs, nous ne générons pas de données et ne fournissons pas de hardware.",
      link: ''
    },
    {
      title: 'Avez-vous un whitepaper?',
      content: "Non, nous ne sommes pas intéressés à la rédaction d'un whitepaper pour les raisons mentionnées dans l'article disponible sur ce link.",
      link: "Lien article"
    },
    {
      title: 'Allez-vous lancer un ICO?',
      content: "Non, nous ne demandons pas d'argent par ICO, si vous souhaitez investir dans Devoleum vous êtes les bienvenus, contactez-nous en incluant votre portefeuille d'investissement.",
      link: 'Contact'
    },
  ],
  
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
              {strings.faq.map((item, index) => {
              return <div className="accordion faq">
                  <div className="divider"></div>
                  <input type="checkbox" id={ "accordion-" + index} name="accordion-checkbox" hidden />
                  <label className="accordion-header title" for={ "accordion-" + index}>
                      <i className="icon icon-arrow-right mr-1"></i> {item.title}
                  </label>
                  <div className="accordion-body sub-content faq-text">
                      {item.content}
                      <br />
                      <br />
                      <a className="accordion-body sub-content" href={LINKS[index]}>
                                {item.link}
                              </a>
                  </div>

              </div>; })}

          </div>
      </section>
    );
  }
}

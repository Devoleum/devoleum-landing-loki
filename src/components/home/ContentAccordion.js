import LocalizedStrings from 'localized-strings';
import {h, render, Component} from 'preact';

let strings = new LocalizedStrings({
 en:{
   faq: [
     {
       title: 'I want to try Devoleum!',
       content: "You can try our simulation for free, build your supply chain at this link.",
       link: 'Link to simulation'
     },
     {
       title: 'How Devoleum integrates Smart Tags?',
       content: "Take a look at the video in the link, using different kinds of Oracles Devoleum can integrate even more advanced smart tags.",
       link: ''
     },
     {
       title: 'What tech does Devoleum use?',
       content: "Devoleum and all the tech usedd is open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc...",
       link: ''
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
       link: ''
     },
     {
       title: 'Quali tecnologie utilizza Devoleum?',
       content: "Devoleum e tutte le tecnologie che utilizziamo sono open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc...",
       link: ''
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
      link: ''
    },
    {
      title: 'Quelles technologies utilisent Devoleum?',
      content: "Devoleum et toutes les technologies utilisées sont open source, Ethereum blockchain, Tensor Flow, PySyft, Truffle, React, Preact, Electron etc …",
      link: ''
    },
  ],
  
}
});

const LINKS = [
  'https://simulation.devoleum.com/',
  'https://www.youtube.com/watch?v=LgfpouDZ4A0',
  '',
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

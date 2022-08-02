import LocalizedStrings from 'localized-strings';
import { Component } from 'solid-js';
import ImgTree from '../../imgs/tree.png';

export const Hero: Component<{ color: string }> = ({ color }) => (
  <div style={{ padding: '0', 'background-color': color }}>
    <section class="grid-container">
      <div>
        <h1 class="title">{strings.title}</h1>
        <br />
        <div style={{ color: 'black', 'font-size:': '1rem' }}>{strings.desc}</div>
        <br />
        <a href="https://app.devoleum.com" target="_blank">
          <button>{strings.subtitle}</button>
        </a>
      </div>
      <img src={ImgTree} alt="Devoleum logo" class="inferno-logo" />
    </section>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#faebd7"
        fill-opacity="1"
        d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  </div>
);

const strings = new LocalizedStrings({
  en: {
    title: 'The transparent soul of unique products',
    desc: `The immutability of blockchain combined with the transparency of linked open data for  supply chain traceability`,
    subtitle: `Explore Devoleum`,
  },
  it: {
    title: "L'anima trasparente di prodotti unici",
    desc: `L'immutabilità della blockchain unita alla trasparenza dei linked open data per la massima tracciabilità delle filiere`,
    subtitle: `Esplora Devoleum`,
  },
  fr: {
    title: "L'âme transparente de produits d'excellence",
    desc: `L'immuabilité de la blockchain combinée à la transparence des données ouvertes liées pour une traçabilité maximale de la chaîne d'approvisionnement`,
    subtitle: `Explorez Devoleum`,
  },
});

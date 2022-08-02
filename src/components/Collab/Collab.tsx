import LocalizedStrings from 'localized-strings';
import { Product } from '../Product/Product';
import ImgRice from '../../imgs/carnaroli19.jpg';
import ImgOil from '../../imgs/evoinserrata.jpg';
import { Component } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    title: `Featured Collaborations`,
    collabs: [
      {
        title: 'Inserrata',
        desc: `The extra virgin olive oil of Inserrata is a 100% Tuscan superior product, now on Algorand and Ethereum blockchain. It comes from olive groves located in the hills at 150 meters above sea level, of Frantoiano, Leccino, Moraiolo, Coratina and Pendolino varieties. The olive groves are grown organically. The plants have an age ranging from 15 to 100 years`,
        img: ImgOil,
        link: 'https://app.devoleum.com/history/5ffb87240fd1c30004878d7e',
      },
      {
        title: 'Cascina Bosco',
        desc: `Devoleum with Coltivatori di Emozioni and Cascina Bosco Fornasara. Thanks to this collaboration, for the first time in the world it was possible to bring to the Ethereum Blockchain the Carnaroli rice supply chain produced by Cascina Bosco Fornasara, a product of excellence Made in Italy. Carnaroli is a Superfine rice among the best known and renowned for its large, tapered, and cooking-resistant grain which makes it perfect for risottos.`,
        img: ImgRice,
        link: 'https://app.devoleum.com/history/5fff6a9a42be9f00049e8fbe',
      },
    ],
  },
  it: {
    title: `Collaborazioni in evidenza`,
    collabs: [
      {
        title: 'Inserrata',
        desc: `L'olio extravergine d'oliva della Inserrata è un prodotto di categoria superiore 100% Toscano, ora visibile sulle blockchain Algorand ed Ethereum. L'olio di Inserrata proviene da oliveti situati in collina a 150 metri sul livello del mare, di varietà Frantoiano, Leccino, Moraiolo, Coratina e Pendolino. Gli oliveti sono coltivati con metodo biologico. Le piante hanno un età che va dai 15 a 100 anni.`,
        img: ImgOil,
        link: 'https://app.devoleum.com/history/5ffb87240fd1c30004878d7e',
      },
      {
        title: 'Cascina Bosco Fornasara',
        desc: `Devoleum con Coltivatori di Emozioni e Cascina Bosco Fornasara. Grazie a questa collaborazione è stato possibile portare per la prima volta al mondo sulle blockchain Ethereum e Algorand la filiera del riso Carnaroli prodotta da Cascina Bosco Fornasara, un prodotto Made in Italy d'eccellenza. Il Carnaroli è un riso Superfino tra i più conosciuti e rinomati per il suo granello grande, affusolato e resistente alla cottura che lo rende perfetto per i risotti.`,
        img: ImgRice,
        link: 'https://app.devoleum.com/history/5fff6a9a42be9f00049e8fbe',
      },
    ],
  },
  fr: {
    title: `En vedette`,
    collabs: [
      {
        title: 'Inserrata',
        desc: `L'huile d'olive extra vierge d'Inserrata est un produit supérieur 100% toscan, maintenant sur la blockchain Algorand et Ethereum. Il provient d'oliveraies situées dans les collines à 150 mètres d'altitude, des variétés Frantoiano, Leccino, Moraiolo, Coratina et Pendolino. Les oliveraies sont cultivées de manière biologique. Les plantes ont un âge allant de 15 à 100 ans.`,
        img: ImgOil,
        link: 'https://app.devoleum.com/history/5ffb87240fd1c30004878d7e',
      },
      {
        title: 'Cascina Bosco Fornasara',
        desc: `Devoleum avec Coltivatori di Emozioni et Cascina Bosco Fornasara. Grâce à cette collaboration, pour la première fois au monde, il a été possible d'apporter à la Blockchain Ethereum la chaîne d'approvisionnement en riz Carnaroli produit par Cascina Bosco Fornasara, un produit d'excellence Made in Italy. Le carnaroli est un riz Superfin parmi les plus connus et réputés pour son gros grain effilé et résistant à la cuisson qui le rend parfait pour les risottos.`,
        img: ImgRice,
        link: 'https://app.devoleum.com/history/5fff6a9a42be9f00049e8fbe',
      },
    ],
    calltoaction: `Découvrez son histoire`,
  },
});

export const Collab: Component<{ color: string }> = ({ color }) => (
  <div style={{ 'background-color': color }}>
    <section class="devo-section gray-bg">
      <div class="text-center">
        <h2 class="title">{strings.title}</h2>
      </div>
      {strings.collabs.map((item) => (
        <>
          <Product product={item} />
        </>
      ))}
    </section>
    <svg
      style={{ display: 'block', 'background-color:': '#f6f6f6', 'margin-bottom:': '-5px' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#ffffff"
        fill-opacity="1"
        d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>
  </div>
);

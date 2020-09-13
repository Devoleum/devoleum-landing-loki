import LocalizedStrings from 'localized-strings';
import ImgRice from '../../imgs/carnaroli19.jpg';
import ImgLorenzo from '../../imgs/lorenzo.jpg';

let strings = new LocalizedStrings({
 en:{
   title: `Featured Collaborations`,
   desc: `Devoleum with Coltivatori di Emozioni and Cascina Bosco Fornasara. Thanks to this collaboration, for the first time in the world it was possible to bring to the Ethereum Blockchain the Carnaroli rice supply chain produced by Cascina Bosco Fornasara, a product of excellence Made in Italy. Carnaroli is a Superfine rice among the best known and renowned for its large, tapered, and cooking-resistant grain which makes it perfect for risottos.`,
   calltoaction: `Discover its history`
 },
 it: {
   title: `Collaborazioni in evidenza`,
   desc: `Devoleum con Coltivatori di Emozioni e Cascina Bosco Fornasara. Grazie a questa collaborazione è stato possibile portare per la prima volta al mondo su Ethereum Blockchain la filiera del riso Carnaroli prodotta da Cascina Bosco Fornasara, un prodotto Made in Italy d'eccellenza. Il Carnaroli è un riso Superfino tra i più conosciuti e rinomati per il suo granello grande, affusolato e resistente alla cottura che lo rende perfetto per i risotti.`,
   calltoaction: `Scopri la sua storia`
 },
 fr: {
  title: `En vedette`,
  desc: `Devoleum avec Coltivatori di Emozioni et Cascina Bosco Fornasara. Grâce à cette collaboration, pour la première fois au monde, il a été possible d'apporter à la Blockchain Ethereum la chaîne d'approvisionnement en riz Carnaroli produit par Cascina Bosco Fornasara, un produit d'excellence Made in Italy. Le carnaroli est un riz Superfin parmi les plus connus et réputés pour son gros grain effilé et résistant à la cuisson qui le rend parfait pour les risottos.`,
  calltoaction: `Découvrez son histoire`
}
});

export function Collab() {
  return (
    <section className="devo-section gray-bg">
    <div align="center"><h2 className="title">{strings.title}</h2></div>
    <br />
    <br />
      <div class="container bottom-margin">
           <div class="columns">
             <div class="column col-5 col-md-12 col-ml-auto img-side-container" align="center">
             <img src={ImgRice} alt="" className="img-side"/>
            </div>
             <div class="column col-7 col-md-12 col-ml-auto text-side">
               <div>
                 <h2 className="title">Carnaroli Classico 2019</h2>
                 <div className="sub-content">
                 {strings.desc}
                   </div>
                   <br />
                   <a className="thin-link" href="https://collaborations.devoleum.com/History/1"
                   align="left" rel="noreferrer noopener" target="_blank">
                   {strings.calltoaction}
                   </a>
               </div>
             </div>
           </div>
         </div>
    </section>
  );
}

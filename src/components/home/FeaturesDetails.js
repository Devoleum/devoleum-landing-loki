import ImgTransparency from '../../imgs/trans.png';
import ImgPrivacy from '../../imgs/safe.png';
import ImgCorrectness from '../../imgs/correctness.png';
import ImgScala from '../../imgs/scala.png';
import ImgInter from '../../imgs/inter.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en: {
    features: [{
        title: "Transparency",
        content: "Devoleum stores all the steps in the Ethereum blockchain, a tamper proof system open source and transparent. The data inside the blockchain becomes public, immutable and impossible to manipulate. Every interaction with the data is recorded in public transactions. King Joffrey knows why transparency is important especially in food supply chains",
      },
      {
        title: "Privacy",
        content: "Our integration of Zero Knowledge, Federated Learning and external links allows the tokenization of an asset without revealing sensitive data on the blockchain. Confidential documents can be inserted as an anonymous link inside our smart contracts, so the user has full control over the file existence and visibility.",

      },
      {
        title: "Correctness",
        content: "Devoleum gives the possibility to combine oracles and AI models that will inspect data correctness before being pushed immutably inside Ethereum. Using AI we can provide accurate real-time prediction with the blockchain tamper-proof data. Devoleum oracles architecture welcome AI models that use Federated Learning, in order to preserve data privacy and scalability.",

      },
      {
        title: "Interoperability",
        content: "Devoleum smart contracts can react to events external to the Ethereum blockchain, thanks to oracles. The oracles allow different data sources to communicate with the blockchain, creating interactive stories with the data coming from IoT, building information modeling (BIM), distribution services for digital content (aggregators and streaming) and many more.",
      },
      {
        title: "Scalability",
        content: "Devoleum smart contracts can be connected to your existing databases, NoSQL, SQL or IPFS makes no difference. Devoleum allows you to notarize large amounts of data on the blockchain without spending a fortune, with our solution it's possible to cryptographically bound data outside the blockchain inside our smart contracts.",

      },
    ],
  },
  it: {
    features: [{
        title: "Trasparenza",
        content: "Devoleum memorizza tutti i passaggi della filiera sulla blockchain di Ethereum, un sistema a prova di manomissione open source e trasparente. I dati all'interno della blockchain divengono così pubblici, immutabili e impossibili da manipolare. Ogni interazione con i dati viene registrata nelle transazioni pubbliche. King Joffrey sa bene perché la trasparenza è importante soprattutto nelle filiere agroalimentari.",
      },
      {
        title: "Privacy",
        content: "L'integrazione di protocolli come lo Zero Knowledge ed il Federated Learning, come l'utilizzo di riferimenti a dati esterni alla blockchain, consente la tokenizzazione di un asset senza rivelare dati sensibili sulla blockchain. In questo modo, documenti riservati possono essere inseriti come un collegamento anonimo all'interno dei nostri smart contract, dove l'utente ha il pieno controllo dell'esistenza dei file e sulla loro visibilità.",
      },
      {
        title: "Correttezza",
        content: "Devoleum offre la possibilità di combinare oracoli e modelli di intelligenza artificiale, dando la possibilità di ispezionare la correttezza dei dati prima di essere inseriti immutabilmente all'interno di Ethereum blockchain. Utilizzando l'intelligenza artificiale possiamo fornire una previsione accurata in tempo reale, sfruttando il vantaggio dell'incorruttibilità dei dati su blockchain. L'architettura degli oracoli di Devoleum incentiva l'integrazione di modelli IA che utilizzano il Federated Learning, al fine di preservare la privacy e la scalabilità dei dati.",
      },
      {
        title: "Interoperabilità",
        content: "Gli smart contract di Devoleum possono reagire a eventi esterni alla blockchain di Ethereum, grazie agli oracoli. Gli oracoli consentono a diverse fonti di dati di comunicare con la blockchain, creando storie interattive con i dati provenienti dall'IoT, costruendo modelli di informazione (BIM), servizi di distribuzione per contenuti digitali (aggregatori e streaming) e molto altro. ",
      },
      {
        title: "Scalabilità",
        content: "Gli smart contract di Devoleum possono essere collegati a database esistenti come NoSQL, SQL o IPFS. Devoleum consente di notarizzare grandi quantità di dati sulla blockchain senza spendere una fortuna. Con la nostra soluzione è possibile legare crittograficamente i dati al di fuori della blockchain all'interno dei nostri smart contract.",
      },
    ],
  },
      fr: {
        features: [{
            title: "Transparence",
            content: "Devoleum stocke toutes les étapes de la blockchain Ethereum, un système inviolable, open source et transparent. Les données de la blockchain deviennent publiques, immuables et impossibles à manipuler. Toute interaction avec les données est enregistrée dans les transactions publiques. King Joffrey sait bien pourquoi la transparence est importante, en particulier dans les chaînes d'approvisionnement alimentaires.",
          },
          {
            title: "Privacy",
            content: "Notre intégration de Zero Knowledge, Federated Learning et des liens vers des données externes permet la tokenisation d'une ressource sans révéler des données sensibles sur la blockchain. Les documents confidentiels peuvent être insérés sous forme de lien anonyme dans nos smart contract, par conséquence, l'utilisateur a le contrôle total de l'existence des fichiers et de leur visibilité.",
          },
          {
            title: "Exactitude",
            content: "Devoleum offre la possibilité de combiner des oracles et des modèles d'intelligence artificielle qui inspecteront l'exactitude des données avant de les insérer immuablement dans Ethereum. Grâce à l'intelligence artificielle, nous pouvons fournir des prévisions précises en temps réel avec des données de blockchain incorruptibles. L'architecture des oracles de Devoleum encourage l'intégration de modèles d'IA qui utilisent le Federated Learning, afin de préserver la confidentialité et l'évolutivité des données.",
          },
          {
            title: "Interopérabilité",
            content: "Les smart contract de Devoleum peuvent réagir aux événements en dehors de la blockchain Ethereum, grâce aux oracles. Les oracles permettent à différentes sources de données de communiquer avec la blockchain, créant des histoires interactives avec des données de l'IoT, construisant des modèles d'information (BIM), des services de distribution de contenu numérique (agrégateurs et streaming) et bien d'autres.",
          },
          {
            title: "Évolutivité",
            content: "Les smart contract de Devoleum peuvent être connectés à des bases de données existantes, NoSQL, SQL ou IPFS. Devoleum vous permet de légaliser de grandes quantités de données sur la blockchain sans dépenser une fortune. Avec notre solution il est possible de lier cryptographiquement des données en dehors de la blockchain dans nos smart contract.",
          },
    ],
  }
});

const ImagesComponents = (props) => {
  switch (props.index) {
    case 0:
      return <img src={ImgTransparency} alt="" className="img-side"/>
      break;
    case 1:
      return <img src={ImgPrivacy} alt="" className="img-side"/>
      break;
    case 2:
      return <img src={ImgCorrectness} alt="" className="img-side"/>
      break;
    case 3:
      return <img src={ImgInter} alt="" className="img-side"/>
      break;
    case 4:
      return <img src={ImgScala} alt="" className="img-side"/>
      break;
    default:
      return <img src={ImgPrivacy} alt="" className="img-side"/>
  }
};

export function FeaturesDetails() {
  return (
    <section className="devo-section">
    {strings.features.map((item, index) => {
      if ( ~index & 1 ) {
       return <div class="container bottom-margin">
          <div class="columns">
            <div class="column col-7 col-md-12 col-ml-auto text-side">
              <div>
                <h2 className="title">{item.title}</h2>
                <div className="sub-content">
                {item.content}
                  </div>
              </div>
            </div>
            <div class="column col-5 col-md-12 col-ml-auto img-side-container" >
              <ImagesComponents index={index} />
            </div>
          </div>
        </div>
      }
      else {
        return <div class="container bottom-margin">
           <div class="columns">
             <div class="column col-5 col-md-12 col-ml-auto img-side-container" align="center">
              <ImagesComponents index={index} />
            </div>
             <div class="column col-7 col-md-12 col-ml-auto text-side">
               <div>
                 <h2 className="title">{item.title}</h2>
                 <div className="sub-content">
                 {item.content}
                   </div>
               </div>
             </div>
           </div>
         </div>
      }
    })}
    </section>
  );
}

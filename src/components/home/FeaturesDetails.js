import ImgTransparency from '../../imgs/trans.png';
import ImgPrivacy from '../../imgs/safe.png';
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
        content:       "Devoleum memorizza tutti i passaggi della blockchain di Ethereum, un sistema a prova di manomissione open source e trasparente. I dati all'interno della blockchain diventano pubblici, immutabili e impossibili da manipolare. Ogni interazione con i dati viene registrata nelle transazioni pubbliche. King Joffrey sa bene perché la trasparenza è importante soprattutto nelle filiere alimentari ",
      },
      {
        title: "Privacy",
        content: "La nostra integrazione di Zero Knowledge, Federated Learning e collegamenti a dati esterni consente la tokenizzazione di una risorsa senza rivelare dati sensibili sulla blockchain. I documenti riservati possono essere inseriti come un collegamento anonimo all'interno dei nostri smart contract, quindi l'utente ha il pieno controllo dell'esistenza dei file e sulla loro visibilità. ",
      },
      {
        title: "Correttezza",
        content: "Devoleum offre la possibilità di combinare oracoli e modelli di intelligenza artificiale che ispezioneranno la correttezza dei dati prima di essere inseriti immutabilmente all'interno di Ethereum. Utilizzando l'intelligenza artificiale possiamo fornire una previsione accurata in tempo reale con i dati a incorruttibili della blockchain. L'architettura di Devoleum oracoli accoglie i modelli di intelligenza artificiale che utilizzano Federated Apprendimento, al fine di preservare la privacy e la scalabilità dei dati. ",
      },
      {
        title: "Interoperabilità",
        content: "Gli smart contract di Devoleum possono reagire a eventi esterni alla blockchain di Ethereum, grazie agli oracoli. Gli oracoli consentono a diverse fonti di dati di comunicare con la blockchain, creando storie interattive con i dati provenienti dall'IoT, costruendo modelli di informazione (BIM), servizi di distribuzione per contenuti digitali (aggregatori e streaming) e molti altri. ",
      },
      {
        title: "Scalabilità",
        content: "Gli smart contract di Devoleum possono essere collegati ai database esistenti, NoSQL, SQL o IPFS non fa alcuna differenza. Devoleum ti consente di notarizzare grandi quantità di dati sulla blockchain senza spendere una fortuna, con la nostra soluzione è possibile legare crittograficamente i dati al di fuori della blockchain all'interno dei nostri smart contract. ",
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
      return <img src={ImgTransparency} alt="" className="img-side"/>
      break;
    case 3:
      return <img src={ImgPrivacy} alt="" className="img-side"/>
      break;
    case 4:
      return <img src={ImgTransparency} alt="" className="img-side"/>
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

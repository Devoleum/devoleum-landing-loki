import ImgTransparency from "../../imgs/trans.png";
import ImgPrivacy from "../../imgs/safe.png";
import ImgCorrectness from "../../imgs/correctness.png";
import ImgScala from "../../imgs/scala.png";
import ImgInter from "../../imgs/inter.png";
import LocalizedStrings from "localized-strings";

let strings = new LocalizedStrings({
  en: {
    features: [
      {
        title: "Transparency",
        content:
          "Devoleum is an open source project. Devoleum allows you to notarize the steps of physical or digital supply chains on the Ethereum blockchain, a tamper-proof transparent blockchain. The data within the blockchain thus becomes public, immutable and impossible to manipulate. Every interaction with the data is recorded in public transactions. King Joffrey knows well why transparency is especially important in the agri-food supply chains.",
      },
      {
        title: "Privacy",
        content:
          "Devoleum protects its users with a privacy-oriented design. Devoleum traces the supply chains through the notarization of cryptographic proofs on the blockchain, leaving to the users the full ownership of the data, as well as, the management of their visibility. The open nature of Devoleum also offers the possibility of integrating countless tools including homomorphic cryptography and Federated Learning.",
      },
      {
        title: "Correctness",
        content:
          "The open nature of Devoleum offers the possibility to combine oracles and artificial intelligence models, giving the possibility to inspect the correctness of the data before being immutably notarized on the blockchain. Through the integration of artificial intelligence models we can provide accurate prediction in real time, taking advantage of the incorruptibility of data on blockchain. Devoleum's oracle architecture encourages the integration of AI models that use Federated Learning, in order to preserve data privacy and scalability.",
      },
      {
        title: "Interoperability",
        content:
          "Devoleum's smart contracts can react to events outside the Ethereum blockchain, thanks to oracles. Oracles allow different data sources to communicate with the blockchain, creating interactive stories with data from the IoT, building information models (BIM), distribution services for digital content (aggregators and streaming) and much more. The open nature of Devoleum also allows you to use and even create APIs to interface in a personalized way with smart contracts.",
      },
      {
        title: "Scalability",
        content:
          "Devoleum's smart contracts can be connected to existing databases such as NoSQL, SQL, or IPFS. Devoleum allows you to notarize large amounts of data on the blockchain. With our solution, it's possible to cryptographically bind data outside the blockchain within our smart contracts.",
      },
    ],
    calltoaction: "To find out more, consult our documentation",
  },
  it: {
    features: [
      {
        title: "Trasparenza",
        content:
          "Devoleum è un progetto open source. Devoleum permette di notarizzare i passaggi di filiere fisiche o digitali sulla blockchain di Ethereum, una blockchain trasparente a prova di manomissione. I dati all'interno della blockchain divengono così pubblici, immutabili e impossibili da manipolare. Ogni interazione con i dati viene registrata nelle transazioni pubbliche. King Joffrey sa bene perché la trasparenza è importante soprattutto nelle filiere agroalimentari.",
      },
      {
        title: "Privacy",
        content:
          "Devoleum tutela i propri utenti con un design orientato alla privacy. Devoleum traccia le filiere tramite la notarizzazione su blockchain di prove crittografiche, lasciando all'utente la totale proprietà dei dati e gestione della loro visibilità. La natura aperta di Devoleum offre inoltre la possibilità di integrare innumerevoli strumenti tra i quali la crittografia omomorfica ed il Federated Learning.",
      },
      {
        title: "Correttezza",
        content:
          "La natura aperta di Devoleum offre la possibilità di combinare oracoli e modelli di intelligenza artificiale, dando la possibilità di ispezionare la correttezza dei dati prima di essere notarizzati immutabilmente sulla blockchain. Tramite l'integrazione di modelli di intelligenza artificiale possiamo fornire una previsione accurata in tempo reale, sfruttando il vantaggio dell'incorruttibilità dei dati su blockchain. L'architettura degli oracoli di Devoleum incentiva l'integrazione di modelli IA che utilizzano il Federated Learning, al fine di preservare la privacy e la scalabilità dei dati.",
      },
      {
        title: "Interoperabilità",
        content:
          "Gli smart contract di Devoleum possono reagire a eventi esterni alla blockchain di Ethereum, grazie agli oracoli. Gli oracoli consentono a diverse fonti di dati di comunicare con la blockchain, creando storie interattive con i dati provenienti dall'IoT, costruendo modelli di informazione (BIM), servizi di distribuzione per contenuti digitali (aggregatori e streaming) e molto altro. La natura aperta di Devoleum permette inoltre di utilizzare e persino creare API per interfacciarsi in maniera personalizzata con gli smart contract.",
      },
      {
        title: "Scalabilità",
        content:
          "Gli smart contract di Devoleum possono essere collegati a database esistenti come NoSQL, SQL o IPFS. Devoleum consente di notarizzare grandi quantità di dati sulla blockchain. Con la nostra soluzione è possibile legare crittograficamente i dati al di fuori della blockchain all'interno dei nostri smart contract.",
      },
    ],
    calltoaction: "Per saperne di più consulta la nostra documentazione",
  },
  fr: {
    features: [
      {
        title: "Transparence",
        content:
          "Devoleum stocke toutes les étapes de la blockchain Ethereum, un système inviolable, open source et transparent. Les données de la blockchain deviennent publiques, immuables et impossibles à manipuler. Toute interaction avec les données est enregistrée dans les transactions publiques. King Joffrey sait bien pourquoi la transparence est importante, en particulier dans les chaînes d'approvisionnement alimentaires.",
      },
      {
        title: "Privacy",
        content:
          "Devoleum protège ses utilisateurs avec une conception axée sur la confidentialité. Devoleum trace les chaînes d'approvisionnement à travers la notarisation des preuves cryptographiques sur la blockchain, laissant aux utilisateurs la pleine propriété des données, ainsi que la gestion de leur visibilité. La nature ouverte de Devoleum offre également la possibilité d'intégrer d'innombrables outils, notamment la cryptographie homomorphique et l'apprentissage fédéré.",
      },
      {
        title: "Exactitude",
        content:
          "La nature ouverte de Devoleum offre la possibilité de combiner des oracles et des modèles d'intelligence artificielle, donnant la possibilité d'inspecter l'exactitude des données avant d'être immuablement notarié sur la blockchain. Grâce à l'intégration de modèles d'intelligence artificielle, nous pouvons fournir une prédiction précise en temps réel, en tirant parti de l'incorruptibilité des données sur la blockchain. L'architecture oracle de Devoleum encourage l'intégration de modèles d'IA qui utilisent Federated Learning, afin de préserver la confidentialité et l'évolutivité des données.",
      },
      {
        title: "Interopérabilité",
        content:
          "Les contrats intelligents de Devoleum peuvent réagir à des événements en dehors de la blockchain Ethereum, grâce aux oracles. Les oracles permettent à différentes sources de données de communiquer avec la blockchain, de créer des histoires interactives avec des données de l'IoT, de créer des modèles d'information (BIM), des services de distribution de contenu numérique (agrégateurs et streaming) et bien plus encore. La nature ouverte de Devoleum vous permet également d'utiliser et même de créer des API pour s'interfacer de manière personnalisée avec des smart contracts.",
      },
      {
        title: "Évolutivité",
        content:
          "Les smart contracts de Devoleum peuvent être connectés à des bases de données existantes telles que NoSQL, SQL, ou IPFS. Devoleum vous permet de notariser de grandes quantités de données sur la blockchain. Avec notre solution, il est possible de lier cryptographiquement des données en dehors de la blockchain dans nos smart contracts.",
      },
    ],
    calltoaction: "Pour en savoir plus, consultez notre documentation",
  },
});

const ImagesComponents = (props) => {
  switch (props.index) {
    case 0:
      return <img src={ImgTransparency} alt="" className="img-side" />;
      break;
    case 1:
      return <img src={ImgPrivacy} alt="" className="img-side" />;
      break;
    case 2:
      return <img src={ImgCorrectness} alt="" className="img-side" />;
      break;
    case 3:
      return <img src={ImgInter} alt="" className="img-side" />;
      break;
    case 4:
      return <img src={ImgScala} alt="" className="img-side" />;
      break;
    default:
      return <img src={ImgPrivacy} alt="" className="img-side" />;
  }
};

export function FeaturesDetails() {
  return (
    <section className="devo-section">
      {strings.features.map((item, index) => {
        if (~index & 1) {
          return (
            <div class="container bottom-margin">
              <div class="columns">
                <div class="column col-7 col-md-12 col-ml-auto text-side">
                  <div>
                    <h2 className="title">{item.title}</h2>
                    <div className="sub-content">{item.content}</div>
                  </div>
                </div>
                <div class="column col-5 col-md-12 col-ml-auto img-side-container">
                  <ImagesComponents index={index} />
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div class="container bottom-margin">
              <div class="columns">
                <div
                  class="column col-5 col-md-12 col-ml-auto img-side-container"
                  align="center"
                >
                  <ImagesComponents index={index} />
                </div>
                <div class="column col-7 col-md-12 col-ml-auto text-side">
                  <div>
                    <h2 className="title">{item.title}</h2>
                    <div className="sub-content">{item.content}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <div align="right">
      <h4><a href="https://devoleum.github.io/docs/"
             target="_blank" className="think-link">
              {strings.calltoaction}
            </a></h4>
      </div>

    </section>
  );
}

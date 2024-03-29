import ImgTransparency from '../../imgs/trans.png';
import ImgPrivacy from '../../imgs/safe.png';
import ImgCorrectness from '../../imgs/correctness.png';
import ImgScala from '../../imgs/scala.png';
import ImgInter from '../../imgs/inter.png';
import LocalizedStrings from 'localized-strings';
import { Component, For, Show } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    title: 'Why use Devoleum ?',
    features: [
      {
        title: 'Transparency',
        content:
          'Devoleum is an open source project. Devoleum allows you to notarize the steps of physical or digital supply chains on the Ethereum and Algorand, tamper-proof transparent blockchain. The data within the blockchain thus becomes public, immutable and impossible to manipulate. Every interaction with the data is recorded in public transactions. King Joffrey knows well why transparency is especially important in the agri-food supply chains.',
      },
      {
        title: 'Privacy',
        content:
          'Devoleum protects its users with a privacy-oriented design. Devoleum traces the supply chains through the notarization of cryptographic proofs on the blockchain, leaving to the users the full ownership of the data, as well as, the management of their visibility. The open nature of Devoleum also offers the possibility of integrating countless tools including homomorphic cryptography and Federated Learning.',
      },
      {
        title: 'Correctness',
        content:
          "The open nature of Devoleum offers the possibility to combine oracles and artificial intelligence models, giving the possibility to inspect the correctness of the data before being immutably notarized on the blockchain. Through the integration of artificial intelligence models we can provide accurate prediction in real time, taking advantage of the incorruptibility of data on blockchain. Devoleum's oracle architecture encourages the integration of AI models that use Federated Learning, in order to preserve data privacy and scalability.",
      },
      {
        title: 'Interoperability',
        content:
          "Devoleum's smart contracts can react to events outside the Ethereum and Algorand blockchains, thanks to oracles. Oracles allow different data sources to communicate with the blockchain, creating interactive stories with data from the IoT, building information models (BIM), distribution services for digital content (aggregators and streaming) and much more. The open nature of Devoleum also allows you to use and even create APIs to interface in a personalized way with smart contracts.",
      },
      {
        title: 'Scalability',
        content:
          "Devoleum's smart contracts can be connected to existing databases such as NoSQL, SQL, or IPFS. Devoleum allows you to notarize large amounts of data on the blockchain. With our solution, it's possible to cryptographically bind data outside the blockchain within our smart contracts.",
      },
    ],
    calltoaction: 'To find out more, consult our documentation',
  },
  it: {
    title: 'Perché usare Devoleum ?',
    features: [
      {
        title: 'Trasparenza',
        content:
          "Devoleum è un progetto open source. Devoleum permette di notarizzare i passaggi di filiere fisiche o digitali sulle blockchain di Ethereum e Algorand, blockchain trasparenti a prova di manomissione. I dati all'interno della blockchain divengono così pubblici, immutabili e impossibili da manipolare. Ogni interazione con i dati viene registrata nelle transazioni pubbliche. King Joffrey sa bene perché la trasparenza è importante soprattutto nelle filiere agroalimentari.",
      },
      {
        title: 'Privacy',
        content:
          "Devoleum tutela i propri utenti con un design orientato alla privacy. Devoleum dona autenticità alle filiere tramite la notarizzazione su blockchain e/o altri sistemi distribuiti di prove crittografiche anonimizzate. L'utente ha la totale proprietà dei dati e gestione della loro visibilità. La natura aperta di Devoleum offre inoltre la possibilità di integrare innumerevoli strumenti tra i quali la crittografia omomorfica ed il Federated Learning.",
      },
      {
        title: 'Correttezza',
        content:
          "La natura aperta di Devoleum offre la possibilità di combinare oracoli e modelli di intelligenza artificiale, dando la possibilità di ispezionare la correttezza dei dati prima di essere notarizzati immutabilmente sulla blockchain e/o altri sistemi distribuiti. Tramite l'integrazione di modelli di intelligenza artificiale possiamo fornire una previsione accurata in tempo reale, sfruttando il vantaggio dell'incorruttibilità dei dati su blockchain. L'architettura degli oracoli di Devoleum incentiva l'integrazione di modelli IA che utilizzano il Federated Learning, al fine di preservare la privacy e la scalabilità dei dati.",
      },
      {
        title: 'Interoperabilità',
        content:
          "Gli smart contract di Devoleum possono reagire a eventi esterni alle blockchain di Ethereum e Algorand, grazie agli oracoli. Gli oracoli consentono a diverse fonti di dati di comunicare con la blockchain, creando storie interattive con i dati provenienti dall'IoT, costruendo modelli di informazione (BIM), servizi di distribuzione per contenuti digitali (aggregatori e streaming) e molto altro. La natura aperta di Devoleum permette inoltre di utilizzare e persino creare API per interfacciarsi in maniera personalizzata con gli smart contract.",
      },
      {
        title: 'Scalabilità',
        content:
          "Gli smart contract di Devoleum possono essere collegati a database esistenti come NoSQL, SQL o IPFS. Devoleum consente di notarizzare grandi quantità di dati sulla blockchain. Con la nostra soluzione è possibile legare crittograficamente i dati al di fuori della blockchain all'interno dei nostri smart contract.",
      },
    ],
    calltoaction: 'Per saperne di più consulta la nostra documentazione',
  },
  fr: {
    title: 'Pourquoi utiliser Devoleum ?',
    features: [
      {
        title: 'Transparence',
        content:
          "Devoleum stocke toutes les étapes de le blockchain Ethereum et Algorand, système inviolable, open source et transparent. Les données de la blockchain deviennent publiques, immuables et impossibles à manipuler. Toute interaction avec les données est enregistrée dans les transactions publiques. King Joffrey sait bien pourquoi la transparence est importante, en particulier dans les chaînes d'approvisionnement alimentaires.",
      },
      {
        title: 'Privacy',
        content:
          "Devoleum protège ses utilisateurs avec une conception axée sur la confidentialité. Devoleum trace les chaînes d'approvisionnement à travers la notarisation des preuves cryptographiques sur la blockchain, laissant aux utilisateurs la pleine propriété des données, ainsi que la gestion de leur visibilité. La nature ouverte de Devoleum offre également la possibilité d'intégrer d'innombrables outils, notamment la cryptographie homomorphique et l'apprentissage fédéré.",
      },
      {
        title: 'Exactitude',
        content:
          "La nature ouverte de Devoleum offre la possibilité de combiner des oracles et des modèles d'intelligence artificielle, donnant la possibilité d'inspecter l'exactitude des données avant d'être immuablement notarié sur la blockchain. Grâce à l'intégration de modèles d'intelligence artificielle, nous pouvons fournir une prédiction précise en temps réel, en tirant parti de l'incorruptibilité des données sur la blockchain. L'architecture oracle de Devoleum encourage l'intégration de modèles d'IA qui utilisent Federated Learning, afin de préserver la confidentialité et l'évolutivité des données.",
      },
      {
        title: 'Interopérabilité',
        content:
          "Les contrats intelligents de Devoleum peuvent réagir à des événements en dehors de le blockchain Ethereum et Algorand, grâce aux oracles. Les oracles permettent à différentes sources de données de communiquer avec la blockchain, de créer des histoires interactives avec des données de l'IoT, de créer des modèles d'information (BIM), des services de distribution de contenu numérique (agrégateurs et streaming) et bien plus encore. La nature ouverte de Devoleum vous permet également d'utiliser et même de créer des API pour s'interfacer de manière personnalisée avec des smart contracts.",
      },
      {
        title: 'Évolutivité',
        content:
          'Les smart contracts de Devoleum peuvent être connectés à des bases de données existantes telles que NoSQL, SQL, ou IPFS. Devoleum vous permet de notariser de grandes quantités de données sur la blockchain. Avec notre solution, il est possible de lier cryptographiquement des données en dehors de la blockchain dans nos smart contracts.',
      },
    ],
    calltoaction: 'Pour en savoir plus, consultez notre documentation',
  },
});

const ImagesComponents: Component<{ index: number }> = (props) => {
  switch (props.index) {
    case 0:
      return <img src={ImgTransparency} alt="" class="img-side" />;
    case 1:
      return <img src={ImgPrivacy} alt="" class="img-side" />;
    case 2:
      return <img src={ImgCorrectness} alt="" class="img-side" />;
    case 3:
      return <img src={ImgInter} alt="" class="img-side" />;
    case 4:
      return <img src={ImgScala} alt="" class="img-side" />;
    default:
      return <img src={ImgPrivacy} alt="" class="img-side" />;
  }
};

export const FeaturesDetails: Component = () => {
  return (
    <div>
      <section class="devo-section">
        <div class="text-center">
          <h2 class="title">{strings.title}</h2>
        </div>
        <For each={strings.features}>
          {(feature, index) => (
            <Show
              when={index() % 2 === 0}
              fallback={
                <div class="container bottom-margin">
                  <div class="columns">
                    <div class="column col-7 col-md-12 col-ml-auto text-side">
                      <div>
                        <h2 class="title">{feature.title}</h2>
                        <div class="sub-content">{feature.content}</div>
                      </div>
                    </div>
                    <div class="column col-5 col-md-12 col-ml-auto img-side-container">
                      <ImagesComponents index={index()} />
                    </div>
                  </div>
                </div>
              }
            >
              <div class="container bottom-margin">
                <div class="columns">
                  <div class="column col-7 col-md-12 col-ml-auto text-side">
                    <div>
                      <h2 class="title">{feature.title}</h2>
                      <div class="sub-content">{feature.content}</div>
                    </div>
                  </div>
                  <div class="column col-5 col-md-12 col-ml-auto img-side-container">
                    <ImagesComponents index={index()} />
                  </div>
                </div>
              </div>
            </Show>
          )}
        </For>

        <a id="docs" />
        <div class="text-center">
          <h4>
            <a href="https://devoleum.github.io/docs/" target="_blank" class="think-link">
              {strings.calltoaction}
            </a>
          </h4>
        </div>
      </section>
      <svg
        style={{ display: 'block', 'background-color:': '#ffffff', 'margin-bottom:': '-5px' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f6f6f6"
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};

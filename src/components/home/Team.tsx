import LocalizedStrings from 'localized-strings';
import { Component } from 'solid-js';
import ImgElisa from '../../imgs/elisa.jpg';
import ImgLorenzo from '../../imgs/lorenzo.jpg';

let strings = new LocalizedStrings({
  en: {
    elisa_bio: `Data Scientist, and Blockchain developer in the Forbes list "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" with the project Devoleum. Italian InspiringFifty Italy 2018.`,
    lorenzo_bio:
      'Blockchain and AI developer. Winner of the TIM #Wcap prize at the first Italian official hackathon, Digithon 2016. Blockchain mentor for Silicon Valley top companies',
  },
  it: {
    elisa_bio: `Data Scientist e Blockchain developer nella lista di Forbes USA "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" con il progetto Devoleum, nominata InspiringFifty Italia 2018.`,
    lorenzo_bio:
      'Blockchain e AI developer. Vinctore del premio TIM #Wcap al primo hackathon italiano ufficiale, Digithon 2016. Blockchain mentor per top company della Silicon Valley.',
  },
  fr: {
    elisa_bio: ` Data Scientist et développeur Blockchain sur la liste Forbes USA de "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" avec le projet Devoleum, nommé InspiringFifty Italy 2018.`,
    lorenzo_bio:
      'Développeur Blockchain et AI. Lauréat du prix TIM #Wcap lors du premier hackathon officiel italien, Digithon 2016. Mentor de la blockchain pour les Silicon Valley top companies.',
  },
});

export const Team: Component = () => {
  return (
    <div>
      <section class="devo-section gray-bg">
        <div style={{ textAlign: 'center' }}>
          <h2 class="title">Team</h2>
        </div>
        <div class="container bottom-margin">
          <div class="columns">
            <div
              class="column col-5 col-md-12 col-ml-auto img-side-container"
              style={{ textAlign: 'center' }}
            >
              <img src={ImgElisa} alt="" class="img-side" />
            </div>
            <div class="column col-7 col-md-12 col-ml-auto text-side">
              <div>
                <h2 class="title">Elisa Romondia</h2>
                <div class="sub-content">{strings.elisa_bio}</div>
                <br />
                <a
                  class="thin-link"
                  href="https://www.linkedin.com/in/elisa-romondia/"
                  style={{ textAlign: 'left' }}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Linkedin profile
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container bottom-margin">
          <div class="columns">
            <div
              class="column col-5 col-md-12 col-ml-auto img-side-container"
              style={{ textAlign: 'center' }}
            >
              <img src={ImgLorenzo} alt="" class="img-side" />
            </div>
            <div class="column col-7 col-md-12 col-ml-auto text-side">
              <div>
                <h2 class="title">Lorenzo Zaccagnini</h2>
                <div class="sub-content">{strings.lorenzo_bio}</div>
                <br />
                <a
                  class="thin-link"
                  href="https://www.linkedin.com/in/lorenzo-zaccagnini/"
                  style={{ textAlign: 'left' }}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Linkedin profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <svg
        style={{ display: 'block', backgroundColor: '#f6f6f6', marginBottom: '-5px' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2ba24"
          fill-opacity="1"
          d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};

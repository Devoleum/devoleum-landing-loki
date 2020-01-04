import LocalizedStrings from 'localized-strings';
import ImgElisa from '../../imgs/elisa.jpg';
import ImgLorenzo from '../../imgs/lorenzo.jpg';

let strings = new LocalizedStrings({
 en:{
   elisa_bio: `Data Analyst, AI and Blockchain developer in the Forbes list "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" with the project Devoleum. Italian InspiringFifty Italy 2018.`,
   lorenzo_bio: "Blockchain and AI developer. Winner of the TIM #Wcap prize at the first Italian official hackathon, Digithon 2016. Blockchain mentor for the Silicon Valley top company Udacity."
 },
 it: {
   elisa_bio: `Data Analyst, AI e Blockchain developer nella lista di Forbes USA "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" con il progetto Devoleum, nominata InspiringFifty Italia 2018.`,
   lorenzo_bio: "Blockchain e AI developer. Vinctore del premio TIM #Wcap al primo hackathon italiano ufficiale, Digithon 2016. Blockchain mentor per la Silicon Valley top company Udacity."
 },
 fr: {
  elisa_bio: ` Data Analyst, AI et développeur Blockchain sur la liste Forbes USA de "60 Women-Led Startups That Are Shaking Up Tech Across The Globe" avec le projet Devoleum, nommé InspiringFifty Italy 2018.`,
  lorenzo_bio: "Développeur Blockchain et AI. Lauréat du prix TIM #Wcap lors du premier hackathon officiel italien, Digithon 2016. Mentor de la blockchain pour la Silicon Valley top company Udacity.  ."
}
});

export function Team() {
  return (
    <section className="devo-section gray-bg">
    <h2 className="title">Team</h2>
      <div class="container bottom-margin">
           <div class="columns">
             <div class="column col-5 col-md-12 col-ml-auto img-side-container" align="center">
             <img src={ImgElisa} alt="" className="img-side"/>
            </div>
             <div class="column col-7 col-md-12 col-ml-auto text-side">
               <div>
                 <h2 className="title">Elisa Romondia</h2>
                 <div className="sub-content">
                 {strings.elisa_bio}
                   </div>
                   <br />
                   <a className="thin-link" href="https://www.linkedin.com/in/elisa-romondia/"
                   align="left" rel="noreferrer noopener" target="_blank">
                   Linkedin profile
                   </a>
               </div>
             </div>
           </div>
         </div>
         <div class="container bottom-margin">
              <div class="columns">
                <div class="column col-5 col-md-12 col-ml-auto img-side-container" align="center">
                <img src={ImgLorenzo} alt="" className="img-side"/>
               </div>
                <div class="column col-7 col-md-12 col-ml-auto text-side">
                  <div>
                    <h2 className="title">Lorenzo Zaccagnini</h2>
                    <div className="sub-content">
                    {strings.lorenzo_bio}
                      </div>
                    <br />
                    <a className="thin-link" href="https://www.linkedin.com/in/lorenzo-zaccagnini/"
                    align="left" rel="noreferrer noopener" target="_blank">
                    Linkedin profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}

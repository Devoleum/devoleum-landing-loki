import ImgFake from '../../imgs/fakeprod.png';
import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "Why Devoleum?",
 },
 it:{
   title: "Perché Devoleum?",
 },
 fr:{
   title: "Purquoi Devoleum?",
 }})


export function FakeOil() {
  return (
    <section className="devo-section col-mr-auto text-center">
      <h2 className="title">{strings.title}</h2>
      <br />
      <br />
      <img src={ImgFake} alt="" className="one-img"/>
      <div className="quote-content sub-content">
      “Much of the extra virgin Italian olive oil on the market is not Italian or virgin”
      </div>
      <div className="quote-source title">
      New York Times
      </div>
    </section>
  );
}

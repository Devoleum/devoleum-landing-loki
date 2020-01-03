import ImgFake from '../../imgs/fakeprod.png';


export function FakeOil() {
  return (
    <section className="devo-section col-mr-auto text-center">
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

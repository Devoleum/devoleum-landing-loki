import { h, render, Component } from 'preact';
import ImgTree from '../imgs/tree.png';
import {FakeOil} from './home/FakeOil';
import {Why} from './home/Why';
import {DevoleumIntro} from './home/DevoleumIntro';
import {FeaturesDetails} from './home/FeaturesDetails';
import {Press} from './home/Press';
import {Team} from './home/Team';
import {Collab} from './home/Collab';
import ContentAccordion from './home/ContentAccordion';
import {Contacts} from './home/Contacts';

import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "The transparent soul of unique products",
   subtitle: `Check our collaborations`,
 },
 it: {
   title: "L'anima trasparente di prodotti unici",
   subtitle: `Guarda le nostre collaborazioni`,
 },
 fr: {
	title: "L'âme transparente de produits d'excellence",
	subtitle: `Nos collaborations`,
  }
});

/** @jsx h */


export default class App extends Component {

	render() {
		return (
			<div className="home container" id="home">
			  <a id="home"></a>
			  <div className="menu-distance green-bg">
			  </div>
			  <div className="hide-sm" />
			  <div className="center green-bg devo-section">
			    <div className="columns hero-banner">
			      <div className="column col-7 col-md-12 col-ml-auto">
			        <div className="logo">
			          <img src={ImgTree} alt="" className="inferno-logo"/>
			        </div>
			      </div>
			      <div className="column col-5 col-md-12 col-mr-auto obj-vert-center">
			        <div className="logo-text">
			          <h1 className="title">{strings.title}</h1>
			          <br />
			          <br />
			          <br />
			          <a href="https://collaborations.devoleum.com/Histories" target="_blank">
			            <h2 className="sub-content">{strings.subtitle}</h2>
			          </a>
			        </div>
			      </div>
			    </div>
			  </div>
        <Collab/>
        <a id="about"></a>
        <DevoleumIntro/>

        <a id="features"></a>
        <FeaturesDetails/>
        <a id="press"></a>
        <Press/>
        <a id="team"></a>
        <Team/>
        <a id="faq"></a>
        <ContentAccordion/>
        <a id="contacts"></a>
        <Contacts />
			</div>
		);
	}
}

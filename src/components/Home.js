import { h, render, Component } from 'preact';
import ImgTree from '../imgs/tree.png';
import { DevoleumIntro } from './home/DevoleumIntro';
import { FeaturesDetails } from './home/FeaturesDetails';
import { Press } from './home/Press';
import { HeadPress } from './home/HeadPress';
import { Team } from './home/Team';
import { Collab } from './home/Collab';
import { Contacts } from './home/Contacts';
import { Footer } from './home/Footer';

import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
	en: {
		title: 'The transparent soul of unique products',
		subtitle: `Explore Devoleum`
	},
	it: {
		title: "L'anima trasparente di prodotti unici",
		subtitle: `Esplora Devoleum`
	},
	fr: {
		title: "L'âme transparente de produits d'excellence",
		subtitle: `Nos collaborations`
	}
});

/** @jsx h */

export default function Home() {
	return (
		<div className="home container" id="home">
			<a id="home" />
			<div className="menu-distance green-bg" />
			<div className="hide-sm" />
			<div className="center green-bg devo-section">
				<div className="columns hero-banner">
					<div className="column col-5 col-md-12 col-mr-auto obj-vert-center">
						<div className="logo-text">
							<h1 className="title">{strings.title}</h1>
							<br />
							<br />
							<br />
							<a href="https://app.devoleum.com" target="_blank">
								<h2 className="sub-content">{strings.subtitle}</h2>
							</a>
						</div>
					</div>
					<div className="column col-7 col-md-12 col-ml-auto">
						<div className="logo">
							<img src={ImgTree} alt="" className="inferno-logo" />
						</div>
					</div>
				</div>
			</div>
			<HeadPress />
			<Collab />
			<a id="about" />
			<DevoleumIntro />

			<a id="features" />
			<FeaturesDetails />
			<a id="press" />
			<Press />
			<a id="team" />
			<Team />
			<a id="contacts" />
			<Contacts />
			<Footer />
		</div>
	);
}

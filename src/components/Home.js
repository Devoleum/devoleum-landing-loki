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
		desc: `The immutability of blockchain combined with the transparency of linked open data for  supply chain traceability`,
		subtitle: `Explore Devoleum`
	},
	it: {
		title: "L'anima trasparente di prodotti unici",
		desc: `L'immutabilità della blockchain unita alla trasparenza dei linked open data per la massima tracciabilità delle filiere`,
		subtitle: `Esplora Devoleum`
	},
	fr: {
		title: "L'âme transparente de produits d'excellence",
		desc: `L'immuabilité de la blockchain combinée à la transparence des données ouvertes liées pour une traçabilité maximale de la chaîne d'approvisionnement`,
		subtitle: `Explorez Devoleum`
	}
});

/** @jsx h */

export default function Home() {
	return (
		<div className="home container" id="home">
			<a id="home" />
			<div className="menu-distance green-bg" />
			<div className="hide-sm" />
			<div className="center green-bg devo-section" style={{ padding: '0' }}>
				<div className="columns hero-banner">
					<div className="column col-5 col-md-12 col-mr-auto obj-vert-center">
						<div className="logo-text">
							<h1 className="title">{strings.title}</h1>
							<br />
							<div style={{ color: 'black', fontSize: '1rem' }}>{strings.desc}</div>
							<br />
							<a href="https://app.devoleum.com" target="_blank">
								<button>{strings.subtitle}</button>
							</a>
						</div>
					</div>
					<div className="column col-7 col-md-12 col-ml-auto">
						<div className="logo">
							<img src={ImgTree} alt="" className="inferno-logo" />
						</div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#faebd7" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,192C640,181,800,139,960,122.7C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" /></svg>
			</div>
			<HeadPress />
			<a id="about" />
			<DevoleumIntro />
			<Collab />
			<a id="features" />
			<FeaturesDetails />
			<a id="team" />
			<Team />
			<a id="contacts" />
			<Contacts />
			<a id="donate" />
			<Footer />
		</div>
	);
}

import IconMenu from '../icons/IconMenu';
import LogoDevoleum from '../icons/logo.png';
import LocalizedStrings from 'localized-strings';
import { Component, createSignal } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    about: 'About',
    press: 'Press',
    stories: 'Stories',
    contact: 'Contact Us',
    donate: 'Donate',
  },
  it: {
    about: 'Info',
    press: 'Media',
    stories: 'Storie',
    contact: 'Contattaci',
    donate: 'Dona',
  },
  fr: {
    about: 'Info',
    press: 'Presse',
    stories: 'Histoires',
    contact: 'Contact',
    donate: 'Donate',
  },
});

export const Header: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <div class="menu">
      <div class="container">
        <div class="row">
          <div class="menu-toggle" onClick={() => setIsOpen(!isOpen())}>
            <IconMenu />
          </div>
          <div class="devoleum-logo">
            <img src={LogoDevoleum} alt="" />
            <div>Devoleum</div>
          </div>
          <nav class={'lg9 md9 ' + (isOpen() ? 'open' : 'closed')}>
            <a href="#home">Home</a>
            <a href="#about">{strings.about}</a>
            <a href="#team">Team</a>
            <a href="#contacts">{strings.contact}</a>
            <a href="#donate">{strings.donate}</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

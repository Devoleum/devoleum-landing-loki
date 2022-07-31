import IconMenu from '../icons/IconMenu';
import LogoDevoleum from '../icons/logo.png';
import LocalizedStrings from 'localized-strings';
import { Component, createSignal, For } from 'solid-js';

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

const internalLinks = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: strings.about,
    link: '#about',
  },
  {
    title: 'Team',
    link: '#team',
  },
  {
    title: strings.contact,
    link: '#contacts',
  },
  {
    title: strings.donate,
    link: '#donate',
  },
];

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
            <For each={internalLinks}>
              {(link) => (
                <a href={'/' + link.link} onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              )}
            </For>
          </nav>
        </div>
      </div>
    </div>
  );
};

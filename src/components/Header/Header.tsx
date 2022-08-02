import IconMenu from '../../icons/IconMenu';
import LogoDevoleum from '../../icons/logo.png';
import LocalizedStrings from 'localized-strings';
import { Component, createSignal, For } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    about: 'About',
    press: 'Press',
    stories: 'Stories',
    donate: 'Donate',
  },
  it: {
    about: 'Info',
    press: 'Media',
    stories: 'Storie',
    donate: 'Dona',
  },
  fr: {
    about: 'Info',
    press: 'Presse',
    stories: 'Histoires',
    donate: 'Donate',
  },
});

const internalLinks = [
  {
    title: 'Home',
    link: '/#home',
  },
  {
    title: strings.about,
    link: '/#about',
  },
  {
    title: 'Docs',
    link: 'https://devoleum.github.io/docs/',
  },
  {
    title: 'Team',
    link: '/#team',
  },
  {
    title: strings.donate,
    link: '/#donate',
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
                <a href={link.link} onClick={() => setIsOpen(false)}>
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

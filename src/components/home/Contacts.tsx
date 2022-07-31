import LocalizedStrings from 'localized-strings';
import { Component } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    title: 'Contact Us on ',
  },
  it: {
    title: 'Contattaci su ',
  },
  fr: {
    title: 'Contact ',
  },
});

export const Contacts: Component = () => (
  <section class="devo-section green-bg container">
    <div>{strings.title}Discord</div>
  </section>
);

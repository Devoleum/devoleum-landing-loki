import LocalizedStrings from 'localized-strings';
import { Component } from 'solid-js';

let strings = new LocalizedStrings({
  en: {
    title: 'Contact Us',
    name: `Name`,
    message: 'Message',
    send: 'Send',
    email_sent: 'Thank you! We received your submission.',
  },
  it: {
    title: 'Contattaci',
    name: `Nome`,
    message: 'Messaggio',
    send: 'Invia',
    email_sent: 'Grazie per averci contattato.',
  },
  fr: {
    title: 'Contact',
    name: `Prénom`,
    message: 'Message',
    send: 'Envoyer',
    email_sent: 'Merci de nous avoir contacté.',
  },
});

export const Contacts: Component = () => (
  <section class="devo-section green-bg container">
    <div>Discord</div>
  </section>
);

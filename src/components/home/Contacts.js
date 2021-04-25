import LocalizedStrings from 'localized-strings';

let strings = new LocalizedStrings({
 en:{
   title: "Contact Us",
   name: `Name`,
   message: "Message",
   send: "Send",
 },
 it: {
   title: "Contattaci",
   name: `Nome`,
   message: "Messaggio",
   send: "Invia"
 },
 fr: {
  title: "Contact",
  name: `Prénom`,
  message: "Message",
  send: "Envoyer"
}
});

export function Contacts() {
  return (
    <section className="devo-section green-bg container">
    <h2 className="title">{strings.title}</h2>
      <form className="form-group sub-content contacts"
        action="https://formcarry.com/s/zq4MG7gYIli"
        method="POST" accept-charset="UTF-8" >
        <label class="form-label" for="input-example-1">Email</label>
        <input className="form-input" type="email" name="email" />
        <label class="form-label" for="input-example-1">{strings.name}</label>
        <input className="form-input" type="text" name="contactName" />
        <label class="form-label" for="input-example-1">{strings.message}</label>
        <textarea className="form-input" name="message" rows="3"></textarea>
        <br />
        <input className="contact-btn" type="submit" value={strings.send} />
      </form>
    </section>
  );
}

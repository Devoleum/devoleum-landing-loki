import LocalizedStrings from "localized-strings";
import { useForm } from "@formcarry/react";
import ReCAPTCHA from "react-google-recaptcha";
import {useState} from 'preact/hooks';
import { createRef } from 'preact';

let strings = new LocalizedStrings({
  en: {
    title: "Contact Us",
    name: `Name`,
    message: "Message",
    send: "Send",
    email_sent: "Thank you! We received your submission.",
  },
  it: {
    title: "Contattaci",
    name: `Nome`,
    message: "Messaggio",
    send: "Invia",
    email_sent: "Grazie per averci contattato.",
  },
  fr: {
    title: "Contact",
    name: `Prénom`,
    message: "Message",
    send: "Envoyer",
    email_sent: "Merci de nous avoir contacté.",
  },
});

export function Contacts() {
  // Call the `useForm` hook in your function component
  const recaptchaRef = createRef();
  let [successCaptcha, setSuccessCaptcha] = useState(false);

  const { state, submit } = useForm({
    id: "3VgEl_Ln0HG",
  });

  // Success message
  function onChange(value) {
    setSuccessCaptcha(true);
    recaptchaRef.reset();
  }

  if (state.submitted) {
    return (
      <section className="devo-section green-bg container">
        <h2 className="title"> {strings.title} </h2>{" "}
        <h2 className="title"> {strings.email_sent}</h2>;{" "}
      </section>
    );
  }

  return (
    <section className="devo-section green-bg container">
      <h2 className="title"> {strings.title} </h2>{" "}
      <form onSubmit={submit} className="form-group sub-content contacts">
        <label class="form-label" htmlFor="email">
          Email{" "}
        </label>{" "}
        <input className="form-input" id="email" type="email" name="email" />
        <label class="form-label" for="input-example-1">
          {" "}
          {strings.name}{" "}
        </label>{" "}
        <input className="form-input" type="text" name="contactName" />
        <label class="form-label" htmlFor="message">
          {" "}
          {strings.message}{" "}
        </label>{" "}
        <textarea className="form-input" id="message" name="message" />
        <ReCAPTCHA
          sitekey="6LfJCOsaAAAAAOUr6uMXhrZ7HWXsCF4qC7F1E81M"
          onChange={onChange}
        />
        {successCaptcha && <button type="submit" className="contact-btn"> {strings.send} </button>}
      </form>{" "}
    </section>
  );
}

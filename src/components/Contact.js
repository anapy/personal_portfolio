import React from 'react';
import '../stylesheets/contact.scss';

const Contact = props => {

  return (
    <div className="contact">
      <h2 className="contact__title">Contacto</h2>
        <p className="contact__paragraph">
          ¿Quieres ponerte en contacto conmigo?
        </p>
        <p className="contact__paragraph">  Puedes hacerlo a través de mis redes sociales o rellenando el siguiente cuestionario. </p>
      <form action="https://formspree.io/xpzyezyn" method="post" className="contact__form">
        <label for="fullName">Nombre <span className="contact__star"> *</span>
          <input type="text" id="fullName" name="fullName" placeholder="Nombre..." required />
        </label>
        <label for="email">Email<span className="contact__star"> *</span>
          <input type="email" id="email"
            name="email" placeholder="nombre.apellidos@mail.com" required />
        </label>
        <label for="message">Mensaje<span className="contact__star"> *</span>
          <textarea className="contact__form textarea" id="message" name="message" placeholder="¿Qué necesitas?"
            required></textarea>
        </label>
        <input className="submit_button" type="submit" value="Enviar" />
      </form>
  </div>
  );
}

export default Contact;

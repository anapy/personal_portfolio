import React from 'react';
import '../stylesheets/contact.scss';

const Contact = props => {

  return (
    <div class="contact">
      <h2 class="contact__title">Contacto</h2>
      <div class="contact__paragraph">
        <p class="contact__paragraph--first">
          No lo dudes y envíanos tus comentarios, dudas, preguntas...¡Estaremos
          encantadas de responderte!
        </p>
      </div>
      <form action="https://formspree.io/xeqrkebj" method="post" class="contact__form">
        <div class="contact__form--group">
          <label for="fullName">Nombre <span class="contact__star"> *</span></label>
          <input type="text" id="fullName" name="fullName" placeholder="Nombre..." required />
        </div>
        <div class="contact__form--group email-tel">
          <div class="contact__form--email">
            <label for="email">Email<span class="contact__star"> *</span></label><input type="email" id="email"
              name="email" placeholder="nombre.apellidos@mail.com" required />
          </div>
        </div>
        <div class="contact__form--group">
          <label for="message">Mensaje<span class="contact__star"> *</span>
            <textarea class="contact__form--textarea" id="message" name="message" placeholder="¿Qué necesitas?"
              required></textarea>
          </label>
        </div>
        <input class="contact__form--button" type="submit" value="Enviar" />
      </form>
  </div>);
}

export default Contact;

import email_icon from "../../assets/email.svg";
import phone_icon from "../../assets/phone.svg";
import location_icon from "../../assets/location.svg";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Contáctanos</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Hablemos</h1>
          <p>
            Actualmente estoy disponible para asumir nuevos proyectos, así que
            siéntete libre de decirme cualquier cosa en la que quieras que
            trabaje. Puedes contactarme en cualquier momento.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email_icon} alt="ícono de correo" />
              <p>mariocamayo17@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="ícono de teléfono" />
              <p>926853959</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="ícono de locación" />
              <p>Lima - Perú</p>
            </div>
          </div>
        </div>
      <form className="contact-right">
          <label htmlFor="">Tu Nombre</label>
          <input type="text"  placeholder="Ingresa tu Nombre" name="name"/>
          <label htmlFor="">Tu Correo</label>
          <input type="email"  placeholder="Ingresa tu Correo" name="email"/>
          <label htmlFor="">Escribe tu mensaje aquí</label>
          <textarea name="message" rows="8" placeholder="Ingresa tu mensage"></textarea>
          <button className="contact-submit">Envía ahora</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;

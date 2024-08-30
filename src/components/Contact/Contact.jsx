import email_icon from "../../assets/email.svg";
import phone_icon from "../../assets/phone.svg";
import location_icon from "../../assets/location.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src="" alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets talk</h1>
          {/* <p>Im currently avaliable to take on new projects, so feel free about anything that you want me to work on. You can contact anytime. </p> */}
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
          <label htmlFor="Tu Nombre"></label>
          <input type="text"  placeholder="Ingresa tu Nombre" name="name"/>
      </form>
      </div>
    </div>
  );
};

export default Contact;

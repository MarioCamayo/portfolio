import email_icon from "../../assets/email.svg";
import phone_icon from "../../assets/phone.svg";
import location_icon from "../../assets/location.svg";
import "./contact.css";
import logo_menu from '../../assets/icono_menu2-removebg-preview.png'


// const apiKey = process.env.REACT_APP_WEB3FORMS_API_KEY;


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", 'a9a3d29b-66ca-4bb9-b6bb-32ae057afe38');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contacto" className="contact">
      <div className="contact-title">
        <h1>Contáctame</h1>
        <img src= {logo_menu} alt="logo_menu" />
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
      <form onSubmit={ onSubmit } className="contact-right">
          <label htmlFor="">Tu Nombre</label>
          <input type="text"  placeholder="Ingresa tu Nombre" name="name"/>
          <label htmlFor="">Tu Correo</label>
          <input type="email"  placeholder="Ingresa tu Correo" name="email"/>
          <label htmlFor="">Escribe tu mensaje aquí</label>
          <textarea name="message" rows="8" placeholder="Ingresa tu mensage"></textarea>
          <button className="contact-submit">Enviar ahora</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;

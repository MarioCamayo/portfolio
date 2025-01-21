import logo from '../../assets/logo_portafolio4-removebg-preview.png'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src= {logo} alt="Logo del footer" />
          <p>Soy desarrollador Fronted</p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            {/* <img src= {} alt="ícono de usuario" /> */}
            <input type="email" placeholder="Ingresa tu correo" />
          </div>
          <div className='footer-subscribe'>Subscribete</div>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>Copyright 2025 Mario Camayo</p>
        <div className='footer-bottom-right'>
          <p>Política de Privacidad</p>
          <p>Contáctame Commigo</p>
          <p>kfjkff</p>
        </div>
      </div>

    </div>

  )
}

export default Footer




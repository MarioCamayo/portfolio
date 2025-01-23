import logo from '../../assets/logo_portafolio4-removebg-preview.png'

import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img className='footer-img' src= {logo} alt="Logo del footer" />
          <p>¡Hola! Soy un Desarrollador Frontend enfocado en React, con una gran pasión por crear aplicaciones web modernas y funcionales. </p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <input type="email" placeholder="Ingresa tu correo" />
          </div>
          <div className='footer-subscribe'>
            Subscribete
          </div>
        </div>
      </div>

      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>Copyright © 2025 Mario Camayo. Todos los derechos reservados</p>
        <div className='footer-bottom-right'>
          <p>Política de Privacidad</p>
          <p>Contáctate Conmigo</p>
          <p>Política de Cookies</p>
        </div>
      </div>

    </div>

  )
}

export default Footer




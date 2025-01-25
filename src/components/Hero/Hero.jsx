import AnchorLink from 'react-anchor-link-smooth-scroll'
import  profile_img from '../../assets/IMG_Mario.jpg'
import './hero.css'

const Hero = () => {
  return (
    <div id='inicio' className='hero'>
        <img src={profile_img} alt="Foto de perfil" />
        <h1><span>Soy Mario Camayo,</span> desarrollador frontend viviendo en el Perú.</h1>
        {/* <p>Sigo explorando nuevas tecnologías y métodos para mejorar mis habilidades, como Node.js para el backend, integración con APIs externas, y el uso de librerías para manejar estados globales.</p> */}
        {/* <p> Soy una persona comprometida, con ganas de seguir creciendo en el mundo del desarrollo web, y estoy listo para enfrentar nuevos desafíos.</p> */}
        <p>Tengo una sólida base técnica en programación web y estoy listo para dar lo mejor de mí en un entorno profesional.</p>
        <div className='hero-action'>
          <div className='hero-connect'>
              <AnchorLink className='anchor-link' offset={50} href='#contacto'>
                Contáctame
              </AnchorLink>
            
          </div>
          <div className="hero-resume">
          <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer" >
               Descarga mi CV

            </a>
          </div>

        </div>
    </div>
  )
}

export default Hero
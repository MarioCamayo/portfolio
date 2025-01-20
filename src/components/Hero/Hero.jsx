import  profile_img from '../../assets/IMG_Mario.jpg'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="Foto de perfil" />
        <h1><span>Soy Mario Camayo,</span> desarrollador frontend viviendo en el Perú.</h1>
        <p>Sigo explorando nuevas tecnologías y métodos para mejorar mis habilidades, como Node.js para el backend, integración con APIs externas, y el uso de librerías para manejar estados globales.</p>
        <div className='hero-action'>
          <div className='hero-connect'>
            Contáctame
          </div>
          <div className="hero-resume">
            Descarga mi CV
          </div>

        </div>
    </div>
  )
}

export default Hero
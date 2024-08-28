import  profile_img from '../../assets/IMG_Mario.jpg'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Foto de perfil" />
      <h1><span>I'm Mario Camayo,</span>Frontend developer living in Perú.</h1>
      <p>I am a frontend developer from Lima, Perú  with 10 years the experience en lultiples compañias del mundo</p>
      <div className='hero-action'>
        <div className='hero-connect'>
           Connect with me
        </div>
        <div className="hero-resume">My resume</div>

      </div>
    </div>
  )
}

export default Hero
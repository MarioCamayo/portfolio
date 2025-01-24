import  profile_img from '../../assets/IMG_Mario.jpg'
import  logo_javascript from '../../assets/logo_javascript2.png'
import  logo_react from '../../assets/logo_react.png'
import  logo_html from '../../assets/logo_html.png'
import  logo_css from '../../assets/logo_css.png'
import  logo_node from '../../assets/logo_node.png'
import  logo_git from '../../assets/logo_git3.png'
import  logo_scrum from '../../assets/logo_scrum.png'
// import  logo_jest from '../../assets/logo_jest.png'
import  logo_tailwindcss from '../../assets/logo_tailwindcss.png'
import  logo_mongodb from '../../assets/logo_mongodb2.png'
import  logo_bootstrap from '../../assets/logo_bootstrap2.png'
import logo_menu from '../../assets/icono_menu2-removebg-preview.png'


import './about.css'

const About = () => {
  return (
    <div id='acerca' className='about'>
        <div className="about-title">
            <h1>Acerca de mí</h1>
            <img src= {logo_menu} alt="logo_menu" />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                {/* <img className='about-profile' src={profile_img} alt="image of profile" /> */}
            </div>


            <div className="about-right">
                <div className='about-para'>
                    <p> ¡Hola! Soy un <strong className='about-right-gradient-text'> Desarrollador Frontend</strong> enfocado en React, con una gran pasión por crear aplicaciones web modernas y funcionales. Aunque estoy dando mis primeros pasos en la industria tecnológica, he dedicado tiempo y esfuerzo a prepararme, aprendiendo y aplicando mis conocimientos en proyectos prácticos que destacan mi capacidad para resolver problemas reales con tecnología.
                
                    </p>
                 {/* </div> */}
                 {/* <div className='about-para2'> */}
                    <br />
                     
                    <p>Tengo conocimientos en las siguientes Tecnologías como: <span className='about-right-lenguaje'>HTML, CSS, JAVASCRIPT, REACT, NODEJS, GIT,  TAILWINDCSS, BOOTSTRAP, MYSQL, MONGODB </span>y en la metodología ágil <span className='about-right-lenguaje'>SCRUM.</span> 
                   </p>
                        
                       
                    <br />
                    <p> He desarrollado tres proyectos principales como parte de mi portafolio, donde he puesto en práctica mis habilidades:
                    <br />
                    <br />
                    <strong className='about-right-title'>Aplicación de reservas de citas médicas:</strong><br /> Una plataforma que facilita la gestión de citas, puedes elegir a un doctor y elegir el horario de atención con un enfoque en la experiencia del usuario.
                    <br /><br />
                    <strong  className='about-right-title'>Aplicación de pedidos de comida:</strong><br /> Un sistema dinámico donde los usuarios pueden explorar opciones de comida, realizar pedidos y gestionar sus compras.
                    <br />
                    <br />
                    <strong  className='about-right-title'>Tienda virtual de ropa:</strong><br /> Una tienda online que permite explorar productos, añadirlos al carrito y realizar compras.
                    </p>
                {/* </div> */}
                  </div>
            </div>
          </div>
          <div className='about-skills'>
                    <h2 className='about-skill-title'>Mis Habilidades</h2>
                    <img className='about-skill-logo' src= {logo_menu} alt="logo_menu" />
                 <div className="about-skill-icons">
                    <div className='about-skill'>
                       <p>HTML</p>
                       <img src={logo_html} alt="logo html" />
                        {/* <p>HTML & CSS</p><hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                       <p>CSS</p>
                       <img src={logo_css} alt="logo_css" />
                        {/* <p>HTML & CSS</p><hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                       <p>JAVASCRIPT</p>
                       <img  src= {logo_javascript} alt="logo_javascript" />
                       {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                        <p>REACT JS</p>
                        {/* <hr style={{width:'50%'}} /> */}
                        <img  src= {logo_react} alt="logo_react" />

                    </div>
                    <div className='about-skill'>
                       <p>NODE JS</p>
                       <img src= {logo_node} alt="logo_node" />
                       {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                        <p>GIT</p>
                        <img src= {logo_git} alt="logo_git" />
                        {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                       <p>TAILWINDCSS</p>
                       <img src= {logo_tailwindcss} alt="logo_tailwind" />
                       {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                       <p>BOOTSTRAP</p>
                       <img src= {logo_bootstrap} alt="logo_bootstrap" />
                       {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                       <p>MONGODB</p>
                       <img src= {logo_mongodb} alt="logo_mongodb" />
                       {/* <hr style={{width:'50%'}} /> */}
                    </div>
                    <div className='about-skill'>
                      <p>SCRUM</p>
                      <img src= {logo_scrum} alt="logo_scrum" />
                      {/* <hr style={{width:'50%'}} /> */}
                    </div>
                  </div>
                </div>
         

            {/* <div className='about-achievements'>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROYECTS COMPLETE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    </div>
                    <p>HAPPY CLIENTS</p>
                </div>

            </div> */}
            
    </div>
  )
}

export default About
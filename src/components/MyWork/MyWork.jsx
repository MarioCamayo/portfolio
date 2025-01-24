
import mywork_data from '../../assets/myword_data'
import './mywork.css'
import flechaDerecha from '../../assets/flecha-derecha.svg'
import logo_menu from '../../assets/icono_menu2-removebg-preview.png'


const MyWork = () => {
  return (
    <div id='portafolio' className="mywork">
      <div className="mywork-title">
        <h1>Mis Proyectos</h1>
        <img className='mywork-title-img' src={logo_menu} alt="Logo" /> 
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, id)=>

          (
            <div className='mywork-proyect' key={id}>
                <img src= {work.w_img} alt="imagenes de proyectos" />
                <a target='_blank' href= {work.w_link} >
                <span>Ver  Proyecto</span></a>
            </div>
          )
        )}
      </div>
    
      <div className='mywork-showmore'>
         <p>Ver Más</p>
         <img src= {flechaDerecha} alt="ícono de flecha derecha" />
      </div>
        

    </div>
  )
}

export default MyWork
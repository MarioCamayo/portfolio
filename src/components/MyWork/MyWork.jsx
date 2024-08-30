
import mywork_data from '../../assets/myword_data'
import './mywork.css'
import flechaDerecha from '../../assets/flecha-derecha.svg'


const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latets Work</h1>
        {/* <img src={theme-pattern} alt="" />  */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, id)=>{
          return <img key={id} src= {work.w_img} alt="imagenes de proyectos" />
        })}
      </div>
      <div className='mywork-showmore'>
         <p>Show More</p>
         <img src= {flechaDerecha} alt="ícono de flecha derecha" />
      </div>
        

    </div>
  )
}

export default MyWork
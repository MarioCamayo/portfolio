import './navbar.css'
import logo from '../../assets/logo_portafolio4-removebg-preview.png'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src= {logo} alt="Logo"   />
        {/* <h2>Mario</h2> */}
        <ul className='nav-menu'>
            <li>Inicio</li>
            <li>Acerca de Mí</li>
            {/* <li>Servicios</li> */}
            <li>Portafolio</li>
            <li>Contacto</li>
        </ul>
        <div className='nav-connect'>
          Contactate conmigo
        </div>

    </div>
  )
}

export default NavBar
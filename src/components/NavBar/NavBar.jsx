
import './navbar.css'
import logo from '../../assets/logo_portafolio4-removebg-preview.png'
import logo_menu from '../../assets/icono_menu2-removebg-preview.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'; 
// Asegúrate de que este paquete esté instalado
import menu_open from '../../assets/menu_hamburguesa.svg'
import menu_close from '../../assets/menu_close.svg'


import { useState, useRef } from 'react'

const NavBar = () => {

  const [menu, setMenu] = useState('acerca')
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className='navbar'>
        <img className='navbar-logo' src= {logo} alt="Logo" />
        <img 
         onClick={openMenu} 
         className='nav-mob-open' 
         src= {menu_open} alt="menu_hamburguesa" />
        <ul ref={menuRef} className='nav-menu'>
          <img onClick={closeMenu} className='nav-mob-close' src= {menu_close} alt="menu_close" />
            <li>
              <AnchorLink
                className='anchor-link' 
                offset={50} 
                href='#inicio'
                onClick={closeMenu }>
                <p onClick={()=>setMenu('inicio')}>Inicio</p>

              </AnchorLink> 
              {menu === 'inicio' 
              ? <img src={logo_menu}
              alt="Logo" />
              :<></>
              }
            </li>

            <li>
              <AnchorLink
               className='anchor-link'
                offset={50}
                 href='#acerca'
                 onClick={closeMenu }
                 >
              <p onClick={()=> setMenu('acerca')}> Acerca de Mí</p>
              </AnchorLink>
              {menu === 'acerca'  
              ? <img src={logo_menu}
              alt="Logo" />
              :<></>
              }
            </li>
            {/* <li>Servicios</li> */}

            <li>
              <AnchorLink
               className='anchor-link'
                offset={50} 
                href='#portafolio'
                onClick={closeMenu }
                >
              <p onClick={()=> setMenu('portafolio')}> Portafolio</p>
              </AnchorLink>
              {menu === 'portafolio'
              ? <img src={logo_menu}
              alt="Logo" />
              :<></>
              }
            </li>

            <li>
              <AnchorLink 
              className='anchor-link'
               offset={50} 
               href='#contacto'
               onClick={closeMenu }
               >
              <p onClick={()=> setMenu('contacto')}>Contacto</p>
              </AnchorLink>
              {menu === 'contacto'
              ? <img src={logo_menu}
              alt="Logo" />
              :<></>
              }
             </li>
        </ul>
        <div
          className='nav-connect'>
          <AnchorLink
           className='anchor-link'
            offset={50} 
            href='#contacto'>
          Contáctame
          </AnchorLink>
        </div>

    </div>
  ) 
}

export default NavBar
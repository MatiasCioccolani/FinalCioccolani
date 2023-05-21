import React from 'react'
import styles from './navbar.module.scss';


const Navbar = ({ icono }) => {
  return (
    <div className='{styles.container}'> Navbar
    <p> Home </p>
    <p> Productos </p>
    <p> Contactos </p>
    <img src={icono} alt="" width="40" height="40"/>
    <p>02</p>
    </div>
  )
}

export default Navbar
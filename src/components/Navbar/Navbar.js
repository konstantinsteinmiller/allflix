import React, { useEffect, useState } from 'react'
import logo from '../../assets/allflix_logo.png'
import './Navbar.css'

function Navbar() {
  const [show, setShow] = useState(false)

  const onScroll = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className={`navbar ${show && 'navbar__header'}`}>
      <img className="navbar__logo" src={logo} alt="Allflix logo" />
      <img
        className="navbar__avatar"
        src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
        alt="user avatar"
      />
    </div>
  )
}

export default Navbar

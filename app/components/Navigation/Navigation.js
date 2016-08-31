import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { mainContainer, navContainer, link } from './styles.css'

function NavLinks ({isAuthed}) {
  return isAuthed === true?
    <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
    </ul>
    :
    <ul>
      <li><Link className={link} to='/'>{'Home'}</Link></li>
      <li><Link className={link} to='/'>{'Profile'}</Link></li>
    </ul>
}

function ActionLinks ({isAuthed}) {
  return isAuthed === true ?
    <ul>
      <li><Link className={link} to='/'>{'New Decision'}</Link></li>
      <li><Link className={link} to='/'>{'Logout'}</Link></li>
    </ul>
    :
    <ul>
      <li><Link className={link} to='/'>{'Sign-in'}</Link></li>
    </ul>
}

export default function Navigation ({isAuthed}) {
  return (
    <div className={mainContainer}>
      <nav className={navContainer}>
        <NavLinks />
        <ActionLinks isAuthed={isAuthed} />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
}

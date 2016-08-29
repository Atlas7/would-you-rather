import React from 'react'
import { container, title, logoContainer } from './styles.css'
import { Logo } from 'components'
import adidasLogo from 'images/adidasLogo.jpg'
import allBlacksLogo from 'images/allBlacksLogo.gif'
import nikeLogo from 'images/nikeLogo.jpg'
import englandRugbyLogo from 'images/englandRugbyLogo.png'


export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Would You Rather...'}</p>
      <div className={logoContainer}>
        <Logo image={adidasLogo} width={200} height={150} mode='fit'/>
        <Logo image={allBlacksLogo} width={200} height={170} mode='fit'/>
      </div>
      <div className={logoContainer}>
        <Logo image={nikeLogo} width={200} height={100} mode='fit'/>
        <Logo image={englandRugbyLogo} width={150} height={200} mode='fit'/>
      </div>
    </div>
  )
}
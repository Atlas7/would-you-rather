import React from 'react'
import { container, title, slogan } from './styles.css'
import { Logo } from 'components'
import adidas from 'images/adidas.jpg'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Would You Rather...'}</p>
      <Logo width={200} height={200} mode='fit'/>
      <Logo image={adidas} width={200} height={200} mode='fit'/>
    </div>
  )
}
import React from 'react'
import { container, title, slogan } from './styles.css'
import allBlacks from 'file!images/allBlacks.png'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Would You Rather...'}</p>
      <p className={slogan}>{'this or that'}</p>
      <img src={allBlacks} width={100} height={100} mode='fit'/>
    </div>
  )
}
import React from 'react'
import { container, title, slogan } from './styles.css'
import { Logo } from 'components'

export default function Home () {
  return (
    <div className={container}>
      <p className={title}>{'Would You Rather...'}</p>
      <Logo width={400} height={400} mode='fit'/>
    </div>
  )
}
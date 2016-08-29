import React, { PropTypes} from 'react'
import allBlacks from 'images/allBlacks.gif'

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
}

export default function Logo ({width=100, height=100, mode='fit'}) {
  return (
    <img src={allBlacks} width={width} height={height} mode={mode}/>
  )
}
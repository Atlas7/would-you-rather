import React, { PropTypes} from 'react'
import allBlacksLogo from 'images/allBlacksLogo.gif'

const defaultImage = allBlacksLogo
const Logo = ({image=defaultImage, width=50, height=50, mode='fit'}) => {
  return (
    <img src={image} width={width} height={height} mode={mode}/>
  )
}

Logo.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
}

export default Logo
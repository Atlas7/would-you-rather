import React, { PropTypes} from 'react'
import allBlacksLogo from 'images/allBlacksLogo.gif'

const defaultImage = allBlacksLogo
const Logo = ({image=defaultImage, width=50, height=50, mode='fit'}) => {
  console.log(defaultImage)
  return (
    <img src={image} width={width} height={height} mode={mode}/>
  )
}

Logo.propTypes = {
  image: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  mode: PropTypes.string,
}

export default Logo
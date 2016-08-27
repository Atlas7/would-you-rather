import React, { PropTypes } from 'react'
import { Main } from 'components'

const MainContainer = React.createClass({
  propTypes: {
  },
  render () {
    return (
      <div>
        {'MAIN CONTAINER'}
        <div>{this.props.children}</div>
      </div>
    )
  },
})

export default MainContainer
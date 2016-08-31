import React, { PropTypes } from 'react'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  propTypes: {
  },
  render () {
    return (
      <div>
        {'MAIN CONTAINER'}
        <Navigation />
        <div>{this.props.children}</div>
      </div>
    )
  },
})

export default MainContainer
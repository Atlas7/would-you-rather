import React, { PropTypes } from 'react'
import { Navigation } from 'components'

const MainContainer = React.createClass({
  propTypes: {
  },
  render () {
    return (
      <div>
        <Navigation isAuthed={false}/>
        <div>{this.props.children}</div>
      </div>
    )
  },
})

export default MainContainer
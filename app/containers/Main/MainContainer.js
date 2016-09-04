import React, { PropTypes } from 'react'
import { Navigation } from 'components'

// need these to connect react to redux store
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as usersActionCreators from 'redux/modules/users'
import { Map, toJS } from 'immutable'

const MainContainer = React.createClass({
  propTypes: {
    // users state
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    authedId: PropTypes.string.isRequired,
  },
  render () {
    //console.log('usersActionCreators', usersActionCreators)
    return (
      <div>
        <Navigation isAuthed={this.props.isAuthed}/>
        <div>{this.props.children}</div>
      </div>
    )
  },
})

function mapStateToProps ({users}, props) {
  //console.log(users.toJS())
  return {
    isFetching: users.get('isFetching'),
    error: users.get('error'),
    isAuthed: users.get('isAuthed'),
    authedId: users.get('authedId'),
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    usersActionCreators,
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer)

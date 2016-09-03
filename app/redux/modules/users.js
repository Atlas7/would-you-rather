import { Map } from 'immutable'

//*** Action Creators
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

function fetchingUser () {
  return {
    type: FETCHING_USER
  }
}

function fetchingUserFailure () {
  return {
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user.',
  }
}


function fetchingUserSuccess () {
  return {
    type: FETCHING_USER_SUCCESS,
  }
}

//*** Initial State

const initialState = Map({
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: '',
})

//*** Reducers

export default function users (state = initialState, action) {
  switch (action.type) {
    case FETCHING_USER:
      return state.merge({
        isFetching: true,
      })
    case FETCHING_USER_FAILURE:
      return state.merge({
        isFetching: false,
        error: action.error,
      })
    case FETCHING_USER_SUCCESS:
      return state.merge({
        isFetching: false,
      })
  }
  return state
}
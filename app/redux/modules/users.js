import { Map } from 'immutable'

//*** Action Creators
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const AUTH_USER = 'AUTH_USER'

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

function removeFetchingUser () {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

function authUser () {
  return {
    type: AUTH_USER
  }
}

//*** Initial State

const initialState = Map({
  isFetching: false,
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
    case REMOVE_FETCHING_USER:
      return state.merge({
        isFetching: false,
      })
    case AUTH_USER:
      return state.merge({
        isAuthed: true,
      })
  }
  return state
}
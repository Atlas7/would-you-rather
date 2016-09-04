import { Map } from 'immutable'
import { fetchUser } from 'helpers/api'

// Action Types
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'

//*** Initial State
const initialState = Map({
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
})

//*** Reducer
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
        authedId: action.uid,
      })
    case UNAUTH_USER:
      return state.merge({
        isAuthed: false,
        authedId: ''
      })
  }
  return state
}


// Action Creators

export function fetchingUser () {
  return {
    type: FETCHING_USER
  }
}

export function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error,
  }
}

export function fetchingUserSuccess () {
  return {
    type: FETCHING_USER_SUCCESS,
  }
}

export function removeFetchingUser () {
  return {
    type: REMOVE_FETCHING_USER,
  }
}

export function authUser (uid) {
  return {
    type: AUTH_USER,
    uid,
  }
}

export function unAuthUser () {
  return {
    type: UNAUTH_USER
  }
}

// Thunks
export function fetchAndHandleAuthedUser () {
  return 0
}

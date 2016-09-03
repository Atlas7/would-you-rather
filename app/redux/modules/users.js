import { Map } from 'immutable'

//*** Action Creators
const FETCHING_USER = 'FETCHING_USER'

function fetchingUser () {
  return {
    type: FETCHING_USER
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
  }
  return state
}
import { Map } from 'immutable'

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
    // case...
  }
  return state
}
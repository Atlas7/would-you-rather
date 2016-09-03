import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { users } from '../app/redux/modules';

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

const MOCKSTATE = Map({
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
})

describe('users reducer', () => {

  it('handle FETCHING_USER', () => {
    const initialState = MOCKSTATE
    const action = {
      type: FETCHING_USER
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isFetching: true,
      })
    )
  })

  it('handle FETCHING_USER_FAILURE', () => {
    const initialState = MOCKSTATE
    const action = {
      type: FETCHING_USER_FAILURE,
      error: 'Error fetching user.',
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isFetching: false,
        error: 'Error fetching user.',
      })
    )
  })

  it('handle FETCHING_USER_SUCCESS', () => {
    const initialState = MOCKSTATE.merge({
      isFetching: true
    })
    const action = {
      type: FETCHING_USER_SUCCESS,
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isFetching: false,
      })
    )
  })

})

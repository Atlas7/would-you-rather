import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { users } from '../app/redux/modules';

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'

describe('users reducer', () => {

  it('handle FETCHING_USER', () => {
    const initialState = Map({
      isFetching: false,
      error: '',
      isAuthed: false,
      authedId: '',
    })
    const action = {
      type: FETCHING_USER
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      Map({
        isFetching: true,
        error: '',
        isAuthed: false,
        authedId: '',
      })
    )
  })

  it('handle FETCHING_USER_FAILURE', () => {
    const initialState = Map({
      isFetching: true,
      error: '',
      isAuthed: false,
      authedId: '',
    })
    const action = {
      type: FETCHING_USER_FAILURE,
      error: 'Error fetching user.',
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      Map({
        isFetching: false,
        error: 'Error fetching user.',
        isAuthed: false,
        authedId: '',
      })
    )
  })

})

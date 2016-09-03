import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { users } from '../app/redux/modules';

const FETCHING_USER = 'FETCHING_USER'

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

})

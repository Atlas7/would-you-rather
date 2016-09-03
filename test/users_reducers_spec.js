import { Map, fromJS } from 'immutable';
import { expect } from 'chai';
import { users } from '../app/redux/modules';

const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const REMOVE_FETCHING_USER = 'REMOVE_FETCHING_USER'
const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'

const MOCKSTATE = Map({
  isFetching: false,
  error: '',
  isAuthed: false,
  authedId: '',
})

describe('users reducer', () => {

  it('handle FETCHING_USER', () => {
    const initialState = MOCKSTATE.merge({
      isFetching: false,
    })
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
    const initialState = MOCKSTATE.merge({
      isFetching: true,
      error: '',
    })
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

  it('handle REMOVE_FETCHING_USER', () => {
    const initialState = MOCKSTATE.merge({
      isFetching: true
    })
    const action = {
      type: REMOVE_FETCHING_USER,
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isFetching: false,
      })
    )
  })

  it('handle AUTH_USER', () => {
    const initialState = MOCKSTATE.merge({
      isAuthed: false,
      authedId: '',
    })
    const action = {
      type: AUTH_USER,
      uid: 'johnny5',
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isAuthed: true,
        authedId: 'johnny5',
      })
    )
  })

  it('handle UNAUTH_USER', () => {
    const initialState = MOCKSTATE.merge({
      isAuthed: true,
      authedId: 'johnny5'
    })
    const action = {
      type: UNAUTH_USER
    }
    const nextState = users(initialState, action)
    expect(nextState).to.equal(
      MOCKSTATE.merge({
        isAuthed: false,
        authedId: ''
      })
    )
  })

})

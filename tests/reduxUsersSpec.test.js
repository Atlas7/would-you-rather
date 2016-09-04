import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

// reducer
import { users } from '../app/redux/modules';

// actionCreators and thunks
import {
  // actionCreators
  fetchingUser, fetchingUserFailure, fetchingUserSuccess,
  removeFetchingUser, authUser, unAuthUser,

} from '../app/redux/modules/users';

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
    expect(nextState).to.deep.equal(
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
    expect(nextState).to.deep.equal(
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
    expect(nextState).to.deep.equal(
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
    expect(nextState).to.deep.equal(
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
    expect(nextState).to.deep.equal(
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
    expect(nextState).to.deep.equal(
      MOCKSTATE.merge({
        isAuthed: false,
        authedId: ''
      })
    )
  })

})

describe('users actionCreators', () => {

  describe('fetchingUser', () => {

    it('is a function', () => {
      expect(fetchingUser).to.be.a('function')
    })

    it('should create action FETCHING_USER', () => {
      const expectedAction = {
        type: FETCHING_USER
      }
      const actualAction = fetchingUser()
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

  describe('fetchingUserFailure', () => {

    it('is a function', () => {
      expect(fetchingUserFailure).to.be.a('function')
    })

    it('should create action FETCHING_USER_FAILURE', () => {
      const error = 'Error fetching user.n'
      const expectedAction = {
        type: FETCHING_USER_FAILURE,
        error,
      }
      const actualAction = fetchingUserFailure(error)
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

  describe('fetchingUserSuccess', () => {

    it('is a function', () => {
      expect(fetchingUserSuccess).to.be.a('function')
    })

    it('should create action FETCHING_USER_SUCCESS', () => {
      const expectedAction = {
        type: FETCHING_USER_SUCCESS
      }
      const actualAction = fetchingUserSuccess()
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

  describe('removeFetchingUser', () => {

    it('is a function', () => {
      expect(removeFetchingUser).to.be.a('function')
    })

    it('should create action REMOVE_FETCHING_USER', () => {
      const expectedAction = {
        type: REMOVE_FETCHING_USER
      }
      const actualAction = removeFetchingUser()
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

  describe('authUser', () => {

    it('is a function', () => {
      expect(authUser).to.be.a('function')
    })

    it('should create action AUTH_USER', () => {
      const uid = 'johnny5'
      const expectedAction = {
        type: AUTH_USER,
        uid,
      }
      const actualAction = authUser(uid)
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

  describe('unAuthUser', () => {

    it('is a function', () => {
      expect(unAuthUser).to.be.a('function')
    })

    it('should create action UNAUTH_USER', () => {
      const expectedAction = {
        type: UNAUTH_USER,
      }
      const actualAction = unAuthUser()
      expect(actualAction).to.deep.equal(expectedAction)
    })

  })

})


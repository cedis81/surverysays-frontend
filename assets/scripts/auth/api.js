'use strict'

const config = require('../config')
const store = require('../store')

const signUp = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signIn = (inputData) => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}
//
const changePassword = (inputData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

const signOut = (inputData) => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
// commit

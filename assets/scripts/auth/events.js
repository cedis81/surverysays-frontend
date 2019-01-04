'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('sign up ran!')

  // const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('sign in ran!')

  // const data = getFormFields(this)
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('change password ran!')

  // const data = getFormFields(this)
  // console.log(data)
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const addAuthHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#sign-out-form').on('submit', onSignOut)
  $('#change-password-form').on('submit', onChangePassword)
}
module.exports = {
  addAuthHandlers
}

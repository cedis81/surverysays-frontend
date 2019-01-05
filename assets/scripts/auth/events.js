'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('sign up ran!')
  api.signUp(userData)
    .then(ui.signUpSuccess)
    .catch(ui.failure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('sign in ran!')
  api.signIn(userData)
    .then(ui.signInSuccess)
    .catch(ui.failure)
}

const onSignOut = function () {
  event.preventDefault()
  console.log('sign out ran')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log('change password ran!')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const addAuthHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-up-btn').click(function () {
    $('#sign-up-form').show()
    $('#sign-in-form').hide()
    $('#change-password-form').hide()
    $('#message').show(500)
  })
  $('#sign-in-btn').click(function () {
    $('#sign-in-form').show()
    $('#sign-up-form').hide()
    $('#change-password-form').hide()
    $('#message').show(500)
  })
  $('#change-pass-btn').click(function () {
    $('#change-password-form').show()
    $('#sign-up-form').hide()
    $('#sign-in-form').hide()
    $('#message').show(500)
  })
  $('#sign-out-btn').on('click', onSignOut)
}
module.exports = {
  addAuthHandlers
}

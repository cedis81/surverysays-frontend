'use strict'

const store = require('../store')

const signUpSuccess = (signUpResponse) => {
  $('#message').html('You signed up successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-up-form').hide()
}

const failure = (failureResponse) => {
  $('#message').html('Something went wrong! Try again!')
  $('#message').removeClass('success-message')
  $('#message').addClass('error-message')
}

// const signUpFailure = (failureResponse) => {
//   $('#message').html('Sign up failed! Check your password! Minimum 6 characters')
//   $('#message').removeClass('success-message')
//   $('#message').addClass('error-message')
// }

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  $('#message').show()
  $('#message').html('You signed in successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-btn').show()
  $('#change-pass-btn').show()
  $('#sign-up-btn').hide()
  $('#sign-in-btn').hide()
  $('.survey-box').show()
  // $('.create-survey').show()
  // $('.create-survey').removeClass('hidden')
}

// const signInFailure = function (error) {
//   $('#message').text('Error on sign in')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('signInFailure ran. Error is :', error)
// }

const onSignOutSuccess = (signOutResponse) => {
  $('#message').html('You have successfully signed out')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#message-box').empty()
  $('#sign-out-btn').hide()
  $('#change-pass-btn').hide()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#change-password-form').hide()
  $('#sign-up-btn').show()
  $('#sign-in-btn').show()
  $('#bottom-btn').hide()
  $('.survey-box').hide()
  $('.get-all-surveys').empty()
  $('.get-my-surveys').empty()
  $('.formempty').val('')
  $('.create-survey').addClass('hidden')
  $('.create-survey').hide()
  $('#change-password-form').trigger('reset')
  setTimeout(function () {
    $('#message').fadeOut().empty()
  }, 1000)
}

// const signOutFailure = function (error) {
//   $('#message').text('Error on sign out')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('signOutFailure ran. Error is :', error)
// }

const changePasswordSuccess = (changePasswordResponse) => {
  $('#message').html('You changed your password successfully')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('#change-password-form').hide()
}

// const changePasswordFailure = function (error) {
//   $('#message').text('Error on change password')
//   $('#message').removeClass()
//   $('#message').addClass('failure')
//   console.error('changePasswordFailure ran. Error is :', error)
// }

module.exports = {
  signUpSuccess,
  // signUpFailure,
  signInSuccess,
  // signInFailure,
  onSignOutSuccess,
  // signOutSuccess,
  // signOutFailure,
  changePasswordSuccess,
  // changePasswordFailure,
  failure
}

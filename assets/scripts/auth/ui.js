'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign Up failed :(')
}
const signInSuccess = function (response) {
  $('form').trigger('reset')
  $('#message').text('Sign in Success!')
  store.user = response.user
  $('#authenticated').show()
  $('#unauthenticated').hide()
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Sign in Failed :(')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('change password success!')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#message').text('change password failed :(')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Signed you out!')
  $('#suit-content').hide()
  $('#ally-content').hide()
  $('#unauthenticated').show()
  $('#authenticated').hide()

  store.user = null
}

const signOutFailure = function () {
  $('#message').text('Sign out failed :(')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOutSuccess,
  signOutFailure
}

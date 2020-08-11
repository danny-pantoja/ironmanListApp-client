'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up!')
}
const signUpFailure = function () {
  $('#message').text('Sign Up failed :(')
}
const signInSuccess = function (response) {
  $('#message').text('Sign in Success!')
  console.log(store)
  // IMPORTANT - necessary to use the token later
  // response.user includes a key 'token'
  store.user = response.user
  console.log('store: ', store)
  console.log('token: ', store.user.token)
  //  I want to show the authenticated options and hide the unauthtenticated options:
  $('#authenticated').show()
  $('#unauthenticated').hide()
}

const signInFailure = function () {
  $('#message').text('Sign in Failed :(')
}

const changePasswordSuccess = function () {
  $('#message').text('change password success!')
}

const changePasswordFailure = function () {
  $('#message').text('change password failed :(')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Signed you out!')
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

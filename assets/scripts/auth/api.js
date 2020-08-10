'use strict'

const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
    // data: { credentials: { email: '', password: '', password_confirmation: '' } }
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const changePassword = function (formData) {
  console.log(store.user)
  return $.ajax({
    headers: {
      // Access the token on the `store.user` object
      // This only works if we sign in first
      Authorization: 'Bearer ' + store.user.token
    },
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}

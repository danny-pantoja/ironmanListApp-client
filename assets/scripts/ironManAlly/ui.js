'use strict'

const indexAllyHandlebar = require('../templates/ally-listing.handlebars')

const createAllySuccess = (response) => {
  $('form').trigger('reset')
  $('#ally-content').hide()
  $('#message').text('Ally created! Yay!')
}

const createAllyFailure = function (error) {
  console.log(error)
  $('form').trigger('reset')
  $('#message').text('Ally was not created, Please try again')
}

const indexAllySuccess = function (data) {
  const indexAllyHtml = indexAllyHandlebar({ ironManAlly: data.ironManAlly })
  $('#ally-content').html(indexAllyHtml)
  $('#ally-content').show()
  $('#message').text("These are some of Iron Man's allies. Please Check Below")
}

const indexAllyFailure = function () {
  $('#message').text('Failed to pull the Allies')
}

const allyDeleteSuccess = function () {
  $('form').trigger('reset')
  $('#ally-content').hide()
  $('#message').text('Ally Deleted successfully! Please Click Get All Allys Button to Refresh The List')
}

const allyDeleteFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Ally Delete Failed :(')
}

const allyUpdateSuccess = function () {
  $('form').trigger('reset')
  $('#ally-content').hide()
  $('#message').text('Ally Update Success! Please Click Get All Allies Button to Refresh The List')
}
const allyUpdateFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Ally Update failed :(')
}

module.exports = {
  allyUpdateSuccess,
  allyUpdateFailure,
  allyDeleteSuccess,
  allyDeleteFailure,
  createAllySuccess,
  createAllyFailure,
  indexAllySuccess,
  indexAllyFailure
}

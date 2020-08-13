'use strict'
// const api = require('./api')
// const getFormFields = require('../../../lib/get-form-fields')
const indexSuitHandlebar = require('../templates/suit-listing.handlebars')

const createSuitSuccess = (response) => {
  $('form').trigger('reset')
  $('#message').text('Suit created! Yay!')
}

const createSuitFailure = function (error) {
  console.log(error)
  $('#message').text('Suit was not created :(')
}

const indexSuitSuccess = function (data) {
  const indexSuitHtml = indexSuitHandlebar({ ironManSuit: data.ironManSuit })
  $('#content').append(indexSuitHtml)
  $('#message').text('Indexed suits')
}

const indexSuitFailure = function () {
  $('#message').text('Index suits failed :(')
}

const suitDeleteSuccess = function () {
  $('form').trigger('reset')
  $('#message').text('Suit Deleted successfully!')
}

const suitDeleteFailure = function () {
  $('#message').text('Suit Delete Failed :(')
}

const suitUpdateSuccess = function () {
  $('#message').text('Suit Update Success!')
}

const suitUpdateFailure = function () {
  $('#message').text('Suit Update failed :(')
}

module.exports = {
  suitUpdateSuccess,
  suitUpdateFailure,
  suitDeleteSuccess,
  suitDeleteFailure,
  createSuitSuccess,
  createSuitFailure,
  indexSuitSuccess,
  indexSuitFailure
}

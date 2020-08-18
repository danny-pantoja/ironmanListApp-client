'use strict'

const indexSuitHandlebar = require('../templates/suit-listing.handlebars')

const createSuitSuccess = (response) => {
  $('form').trigger('reset')
  $('#suit-content').hide()
  $('#message').text('Suit created! Yay!')
}

const createSuitFailure = function (error) {
  console.log(error)
  $('form').trigger('reset')
  $('#message').text('Suit was not created :(')
}

const indexSuitSuccess = function (data) {
  const indexSuitHtml = indexSuitHandlebar({ ironManSuit: data.ironManSuit })
  $('#suit-content').html(indexSuitHtml)
  $('#suit-content').show()
  $('#message').text('Indexed suits')
}

const indexSuitFailure = function () {
  $('#message').text('Index suits failed :(')
}

const suitDeleteSuccess = function () {
  $('form').trigger('reset')
  $('#suit-content').hide()
  $('#message').text('Suit Deleted successfully! Please Click Get All Suits Button to Refresh The List')
}

const suitDeleteFailure = function () {
  $('form').trigger('reset')
  $('#message').text('Suit Delete Failed :(')
}

const suitUpdateSuccess = function () {
  $('form').trigger('reset')
  // $('#suit-content').on('suitUpdate', function () {
  // const indexSuitHtml = indexSuitHandlebar({ ironManSuit: data.ironManSuit })
  // $('#suit-content').html(indexSuitHtml)
  // $('#suit-content').trigger('click')
  // $('#suit-content').trigger('reset')
  $('#suit-content').hide()
  // $('#suit-content').show()
  $('#message').text('Suit Update Success! Please Click Get All Suits Button to Refresh The List')
  // })
}
const suitUpdateFailure = function () {
  $('form').trigger('reset')
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

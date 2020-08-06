const createSuitSuccess = function (response) {
  $('#message').text('Suit created! Yay!')

    const oneSuit = (`
      <h3>${response.suit.title}</h3>
      <h4>${response.suit.director}</h4>
      <p>ID: ${response.suit._id}</p>
      <p>Owner (User's ID): ${response.suit.owner}</p>
    `)

  $('#content').html(oneSuit)
}

const createSuitFailure = function (error) {
  console.log(error)
  $('#message').text('Suit was not created :(')
}

const indexSuitSuccess = function (response) {
  let suitHtml = ''
  response.suits.forEach(suit => {
    const oneSuit = (`
        <h3>${suit.title}</h3>
        <h4>${suit.director}</h4>
        <p>ID: ${suit._id}</p>
        <p>Owner (User's ID): ${suit.owner}</p>
      `)

    suitHtml += oneSuit
  })

  $('#content').html(suitHtml)
}

const indexSuitFailure = function () {
  $('#message').text('Index suits failed :(')
}

const showSuitSuccess = function (response) {
  const oneSuit = (`
      <h3>${response.suit.title}</h3>
      <h4>${response.suit.director}</h4>
      <p>ID: ${response.suit._id}</p>
      <p>Owner (User's ID): ${response.suit.owner}</p>
    `)

  $('#content').html(oneSuit)
}

const showSuitFailure = function () {
  $('#message').text('Show suit failed :(')
}

const suitDeleteSuccess = function () {
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
  indexSuitFailure,
  showSuitFailure,
  showSuitSuccess
}

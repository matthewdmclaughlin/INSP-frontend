'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateQuote = function (event) {
  event.preventDefault()
  console.log('onCreateQuote ran!')

  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onIndexQuotes = function (event) {
  event.preventDefault()
  console.log('onIndexQuotes ran!')

  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexFailure)
}

const onShowQuote = function (event) {
  event.preventDefault()
  console.log('onShowQuote ran!')

  const data = getFormFields(event.target)
  const quote = data.quote

  if (quote.id.length !== 0) {
    api.show(quote)
      .then(ui.onShowSuccess)
      .catch(ui.onShowFailure)
  } else {
    $('#message').html('<p>Please provide an quote id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please enter an quote id!')
  }
}

const onDeleteQuote = function (event) {
  event.preventDefault()
  console.log('onDeleteQuote ran!')

  const data = getFormFields(event.target)
  const quote = data.quote

  if (quote.id.length !== 0) {
    api.destroy(quote.id)
      .then(ui.onDeleteSuccess)
      .catch(ui.onDeleteFailure)
  } else {
    $('#message').html('<p>Please provide an quote id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an quote id!')
  }
}

const onUpdateQuote = function (event) {
  event.preventDefault()
  console.log('onUpdateQuote ran!')

  const data = getFormFields(event.target)
  const quote = data.quote

  if (quote.text === '') {
    $('#message').html('<p>Quote text is required</p>')
    $('#message').css('background-color', 'red')
    console.log('Quote text is required!')
    return false
  }
  if (quote.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdateSuccess)
      .catch(ui.onUpdateFailure)
  } else {
    $('#message').html('<p>Please provide an quote id!</p>')
    $('#message').css('background-color', 'red')
    console.log('Please provide an quote id!')
  }
}

const addHandlers = () => {
  $('#quote-create').on('submit', onCreateQuote)
  $('#quote-index').on('submit', onIndexQuotes)
  $('quote-show').on('submit', onShowQuote)
  $('#quote-delete').on('submit', onDeleteQuote)
  $('#quote-update').on('submit', onUpdateQuote)
}

module.exports = {
  addHandlers
}

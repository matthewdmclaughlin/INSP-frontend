'use strict'

const showQuotesTemplate = require('../templates/quotes-listing.handlebars')

const successMessage = message => {
  $('#message').text(message)
  $('#message').css('background-color', 'green')
  $('#message').addClass('success')
  $('#message').removeClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#message').removeClass('success')
    $('#message').text('')
  }, 5000)
}

const failureMessage = message => {
  $('#message').text(message)
  $('#message').css('background-color', 'red')
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('#message').removeClass('failure')
    $('#message').text('')
  }, 5000)
}

const onCreateSuccess = function (data) {
  successMessage('Quote successfully created')
}

const onCreateFailure = function () {
  failureMessage('Error on creating a quote')
}

const onIndexSuccess = function (data) {
  $('#message').text('Your quotes successfully retrieved')
  $('#message').removeClass()
  $('#message').addClass('success')

  const showQuotesHtml = showQuotesTemplate({ quotes: data.quotes })
  $('.content').html(showQuotesHtml)
  setTimeout(function () {
    $('#message').removeClass('success')
    $('#message').text('')
  }, 5000)
}

const onIndexFailure = function () {
  $('#message').text('Error retrieving your quotes')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onShowSuccess = function (data) {
  $('#message').text('Enjoy your quote')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onShowFailure = function () {
  $('#message').text('Error inspiring you - sorry!')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onDestroySuccess = function () {
  $('#message').text('Quote successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onDestroyFailure = function () {
  $('#message').text('Error deleting your quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onUpdateSuccess = function () {
  $('#message').text('You have successfully edited your quote')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onUpdateFailure = function () {
  $('#message').text('Error editing your quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  onCreateSuccess,
  onCreateFailure,
  onIndexSuccess,
  onIndexFailure,
  onShowSuccess,
  onShowFailure,
  onDestroySuccess,
  onDestroyFailure,
  onUpdateSuccess,
  onUpdateFailure
}

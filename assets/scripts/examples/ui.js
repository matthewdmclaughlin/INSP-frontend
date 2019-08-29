'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Quote successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onCreateFailure = function () {
  $('#message').text('Error on creating a quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const onIndexSuccess = function (data) {
  $('#message').text('Your quotes successfully retrieved')
  $('#message').removeClass()
  $('#message').addClass('success')
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

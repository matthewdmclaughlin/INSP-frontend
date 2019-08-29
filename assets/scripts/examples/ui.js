'use strict'

const onCreateSuccess = function (data) {
  $('#message').text('Quote successfully created')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#message').text('Error on creating a quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#message').text('Your quotes successfully retrieved')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.examples)
}

const onIndexFailure = function (error) {
  $('#message').text('Error retrieving your quotes')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#message').text('Enjoy your quote')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#message').text('Error inspiring you - sorry!')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const onDestroySuccess = function () {
  $('#message').text('Quote successfully deleted')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Quote successfully deleted')
}

const onDestroyFailure = function (error) {
  $('#message').text('Error deleting your quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onDestroyFailure ran. Error is :', error)
}

const onUpdateSuccess = function () {
  $('#message').text('You have successfully edited your quote')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('Example successfully updated')
}

const onUpdateFailure = function (error) {
  $('#message').text('Error editing your quote')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.error('onUpdateFailure ran. Error is :', error)
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

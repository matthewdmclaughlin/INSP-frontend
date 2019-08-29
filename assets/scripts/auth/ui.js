'use strict'

const store = require('../store')

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

const signUpSuccess = responseData => {
  successMessage('Sign Up Successful!')
}

const signUpFailure = () => {
  failureMessage('Sign Up Failed')
}

const signInSuccess = responseData => {
  successMessage('You signed in successfully')
  store.user = responseData.user
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#quickSignIn').addClass('hidden')
  $('#quote-create').removeClass('hidden')
  $('#my-quotes').removeClass('hidden')
  setTimeout(function () {
    $('#message').removeClass('success')
    $('#message').text('')
  }, 5000)
}

const signInFailure = responseData => {
  failureMessage('Sign In Failed')
  store.user = responseData.user
}

const signOutSuccess = responseData => {
  successMessage('You have signed out successfully!')
  // After signing out the page doesn't change so no way to sign back in. FIX:
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#change-password').addClass('hidden')
  $('#quickSignIn').removeClass('hidden')
  $('#quote-create').addClass('hidden')
  $('#my-quotes').addClass('hidden')
  $('#content').html('')
}

const signOutFailure = responseData => {
  failureMessage('Sign out failed. Please check your username and/or password')
}

const changePasswordSuccess = () => {
  successMessage('Your password has been changed successfully')
}

const changePasswordFailure = () => {
  failureMessage('Your password has NOT been changed')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}

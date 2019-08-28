'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const quoteEvents = require('./quotes/events')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('body').on('click', '#getQuotesButton', quoteEvents.onGetQuotes)
  $('#create-quote').on('submit', quoteEvents.onCreateQuotes)
  $('#getQuoteButton').on('click', quoteEvents.onGetQuotes)
  $('#clearQuotesButton').on('click', quoteEvents.onClearQuotes)
  $('.content').on('click', '.delete-quote', quoteEvents.onDeleteQuotes)
  $('.content').on('submit', '.edit-quote', quoteEvents.onEditQuotes)
  // your JS code goes here
})

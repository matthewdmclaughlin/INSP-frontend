const showEventsTemplate = require('../templates/handlebars/event-listing.handlebars')
const openedEvent = require('../templates/handlebars/event-page.handlebars')
const ownerButtons = require('../templates/owner-buttons.handlebars')
const store = require('../store')

const getMyQuotesSuccess = (data) => {
  const showQuotesHtml = showEventsTemplate({
    events: data.events
  })
  $('.content').html(showQuotesHtml)
  $('form').trigger('reset')
}

const getMyQuotesFailure = function (data) {
  $('.status-message').text('Error on retrieving your quotes')
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  // console.data('did not get any quotes', data)
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const createQuoteSuccess = (data) => {
  $('#create-event-modal').modal('hide')
  $('.modal-backdrop').hide()
  $('.status-message').text('Quote created successfully').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
}

const createQuoteFailure = function (data) {
  $('.status-message').text('Error creating quote').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  $('#create-event-modal').modal('hide')
  $('.modal-backdrop').hide()
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const showMyQuotesSuccess = () => {
  $('form').trigger('reset')
}

const showMyQuotesFailure = function (data) {
  $('.status-message').text('Error loading your quotes').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const updateQuoteSuccess = () => {
  $('.status-message').text('You have updated your quote!').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
  $('.status-message').addClass('success')
  $('form').trigger('reset')
  $('#update-event-modal').modal('hide')
  $('.modal-backdrop').hide()
}

const updateQuoteFailure = function (data) {
  $('.status-message').text('Error on creating an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
  $('#update-event-modal').modal('hide')
  $('.modal-backdrop').hide()
}

const deleteEventsFailure = function (data) {
  $('.status-message').text('Error on deleting an event').show()
  $('.status-message').addClass('failure')
  $('form').trigger('reset')
  setTimeout(function () {
    $('.status-message').removeClass('failure')
    $('.status-message').fadeOut()
  }, 3000)
}

const deleteQuoteSuccess = () => {
  $('.status-message').text('Quote deleted').show()
  setTimeout(function () {
    $('.status-message').fadeOut()
  }, 3000)
  $('form').trigger('reset')
}

const failure = (data) => {
  $('modal').modal('hide')
  $('.modal-backdrop').hide()
  $('.status-message').text('An Error Occurred').css('color', 'red').show()
  // console.data('Error!', data)
}

module.exports = {
  failure,
  getMyQuotesSuccess,
  getMyQuotesFailure,
  createQuoteSuccess,
  createQuoteFailure,
  deleteEventsFailure,
  updateQuoteSuccess,
  updateQuoteFailure,
  showMyQuotesSuccess,
  showMyQuotesFailure,
  deleteQuoteSuccess
}

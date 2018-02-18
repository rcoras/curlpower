'use strict'

const store = require('../store')
const loadCreateSubmissionTemplate = require('../templates/create-submission.handlebars')

const displaySurveySuccess = function (data) {
  $('.main').html('')
  const showSubmissionContentHtml = loadCreateSubmissionTemplate({
    survey: data.survey
  })
  $('.main').append(showSubmissionContentHtml)
}

const displaySurveyFailure = function () {
  $('.feedback-message').html('Error. Please try again')
}

const createSubmissionSuccess = function (data) {
  $('.feedback-message').html('')
  $('.feedback-message').show()
  $('.feedback-message').html('Your answer has been submitted')
  $('.feedback-message').fadeOut(4000)
}

const createSubmissionFailure = function () {
  $('.feedback-message').html('')
  $('.feedback-message').show()
  $('.feedback-message').html('Please choose an answer')
  $('.feedback-message').fadeOut(4000)
}

module.exports = {
  createSubmissionSuccess,
  createSubmissionFailure,
  displaySurveySuccess,
  displaySurveyFailure
}

'use strict'

const store = require('../store')
const loadCreateSubmissionTemplate = require('../templates/create-submission.handlebars')
const survUi = require('../survey/ui')

const displaySurveySuccess = function (data) {
  $('.main').html('')
  const showSubmissionContentHtml = loadCreateSubmissionTemplate({
    survey: data.survey
  })
  $('.main').append(showSubmissionContentHtml)
}

const displaySurveyFailure = function () {
  survUi.addMessage('.feedback-message', 'Error. Please try again.')
}

const createSubmissionSuccess = function (data) {
  survUi.addMessage('.feedback-message', 'Your answer has been submitted!')
}

const createSubmissionFailure = function () {
  survUi.addMessage('.feedback-message', 'Please choose an answer.')
}

module.exports = {
  createSubmissionSuccess,
  createSubmissionFailure,
  displaySurveySuccess,
  displaySurveyFailure
}

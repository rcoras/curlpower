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

const displaySurveyFailure = function (error) {
  console.error('hopefully we don\'t see this', error)
}

const createSubmissionSuccess = function (data) {
  $('.feedback-message').html('')
  $('.feedback-message').show()
  $('.feedback-message').html('Your answer has been submitted')
  $('.feedback-message').fadeOut(2500)
}

const createSubmissionFailure = function (error) {
  console.error('hopefully we don\'t see this', error)
}

module.exports = {
  createSubmissionSuccess,
  createSubmissionFailure,
  displaySurveySuccess,
  displaySurveyFailure
}

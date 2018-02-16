'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require('./ui')
const survApi = require('../survey/api')
const survEvents = require('../survey/events')

const onCreateSubmission = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createSubmission(data)
    .then(data => {
      ui.createSubmissionSuccess(data)
      survEvents.onGetAllSurveys()
      return data
    })
    .catch(ui.createSubmissionFailure)
}

const onTakeSurvey = function (event) {
  event.preventDefault()
  const takeableDiv = $(this).parent('div')
  survApi.getASurvey(takeableDiv)
    .then(ui.displaySurveySuccess)
    .catch(ui.displaySurveyFailure)
}

const addHandlers = function () {
  $('.main').on('submit', '#create-submission-form', onCreateSubmission)
  $('.main').on('click', '.take-survey', onTakeSurvey)
}

module.exports = {
  addHandlers
}

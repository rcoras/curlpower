'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require('./ui')

const onCreateSurvey = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createSurvey(data)
    .then(ui.createSurveySuccess)
    .catch(ui.createSurveyFailure)
}

const addHandlers = function () {
  $('.test-survey-crud').on('submit', '#create-survey-form', onCreateSurvey)
}

module.exports = {
  addHandlers
}

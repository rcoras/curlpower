'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require(`./api`)
const ui = require('./ui')

const onCreateSubmission = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('fucking right', data)
  api.createSubmission(data)
    .then(ui.createSubmissionSuccess)
    .catch(ui.createSubmissionFailure)
}

const addHandlers = function () {
  $('.testsubs').on('submit', '#create-submission-form', onCreateSubmission)
}

module.exports = {
  addHandlers
}

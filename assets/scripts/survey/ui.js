'use strict'

const store = require('../store')

const createSurveySuccess = function (data) {
  console.log('successfully created survey', data)
}

const createSurveyFailure = function (error) {
  console.error(error)
}

module.exports = {
  createSurveySuccess,
  createSurveyFailure
}

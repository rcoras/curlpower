'use strict'

const store = require('../store')

const createSubmissionSuccess = function (data) {
  console.log('submisson', data)
}

const createSubmissionFailure = function (error) {
  console.error('hopefully we don\'t see this', error)
}

module.exports = {
  createSubmissionSuccess,
  createSubmissionFailure
}

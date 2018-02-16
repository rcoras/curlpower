'use strict'

const config = require('../config')
const store = require('../store')

const createSubmission = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/submissions',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSubmission
}

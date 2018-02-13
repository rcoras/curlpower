'use strict'

const config = require('../config')
const store = require('../store')

const createSurvey = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/surveys',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createSurvey
}

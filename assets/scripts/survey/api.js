const config = require('../config.js')
const store = require('../store.js')

const createSurvey = (inputData) => {
  return $.ajax({
    url: config.apiUrl + '/surveys',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(inputData)
  })
}

module.exports = {
  createSurvey
}

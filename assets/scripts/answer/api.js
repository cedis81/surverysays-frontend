const config = require('../config.js')
const store = require('../store.js')

const createAnswer = (id, answer) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${id}/answers`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify({
      'answer': {
        'text': answer
      }
    })
  })
}

const viewSurvey = (surveyId) => {
  return $.ajax({
    url: config.apiUrl + `/surveys/${surveyId}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  createAnswer,
  viewSurvey
}

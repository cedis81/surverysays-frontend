// const store = require('../store.js')
// const showAllSurveys = require('../templates/allsurvey.handlebars')
// const showMySurveys = require('../templates/mysurvey.handlebars')

const createAnswerSuccess = (data) => {
  $('#message').html('Question has been answered')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('.survey-answer-create').trigger('reset')
}

module.exports = {
  createAnswerSuccess
}

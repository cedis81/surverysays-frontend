// const store = require('../store.js')
// const showAllSurveys = require('../templates/allsurvey.handlebars')
// const showMySurveys = require('../templates/mysurvey.handlebars')

const createAnswerSuccess = (data) => {
  $('#message').html('Question has been answered')
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('.survey-answer-create').trigger('reset')
}

const getAnswersSuccess = (data) => {
  const answerData = data
  const agreeArray = answerData.answer.filter(answers => answers.text === 'Agree')
  const disagreeArray = answerData.answer.filter(answers => answers.text === 'Disagree')
  $('#message-box').html(`Total agree: ${agreeArray.length} Total Disagrees: ${disagreeArray.length}`)
  $('#message-box').addClass('success-message')
  $('#message-box').removeClass('error-message')
}

module.exports = {
  createAnswerSuccess,
  getAnswersSuccess
}

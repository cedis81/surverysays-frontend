// const store = require('../store.js')
// const showAllSurveys = require('../templates/allsurvey.handlebars')
// const showMySurveys = require('../templates/mysurvey.handlebars')

const createAnswerSuccess = (data) => {
  const answerData = data
  $('#message').html(`You have ${answerData.answer.text.toLowerCase()}d with the survey!`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('.survey-answer-create').trigger('reset')
  $('#message-box').show()
}

const getAnswersSuccess = (data) => {
  $('#message-box').show()
  const answerData = data
  const agreeArray = answerData.answer.filter(answers => answers.text === 'Agree')
  const disagreeArray = answerData.answer.filter(answers => answers.text === 'Disagree')
  $('#message-box').html(`${agreeArray.length} people have agreed with the survey, ${disagreeArray.length} have disagreed with the survey`)
  $('#message-box').addClass('success-message')
  $('#message-box').removeClass('error-message')
}

module.exports = {
  createAnswerSuccess,
  getAnswersSuccess
}

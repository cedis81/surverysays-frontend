// const store = require('../store.js')
// const showAllSurveys = require('../templates/allsurvey.handlebars')
// const showMySurveys = require('../templates/mysurvey.handlebars')

const createAnswerSuccess = (data) => {
  const answerData = data
  $('#message').show()
  $('#message').html(`You have ${answerData.answer.text.toLowerCase()}d with the survey!`)
  $('#message').addClass('success-message')
  $('#message').removeClass('error-message')
  $('.survey-answer-create').trigger('reset')
  $('#message-box').hide()
  setTimeout(function () {
    $('#message').fadeToggle()
  }, 1000)
}

const getAnswersSuccess = (data) => {
  $('#message-box').show()
  const answerData = data
  const agreeArray = answerData.answer.filter(answers => answers.text === 'Agree')
  const disagreeArray = answerData.answer.filter(answers => answers.text === 'Disagree')
  $('#message-box').html(`${agreeArray.length} agreed with the survey, ${disagreeArray.length} disagreed with the survey`)
  $('#message-box').addClass('success-message')
  $('#message-box').removeClass('error-message')
  setTimeout(function () {
    $('#message').fadeOut()
  }, 1000)
}

module.exports = {
  createAnswerSuccess,
  getAnswersSuccess
}

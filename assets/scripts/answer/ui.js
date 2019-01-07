const store = require('../store.js')
const showAllSurveys = require('../templates/allsurvey.handlebars')
const showMySurveys = require('../templates/mysurvey.handlebars')

const getAnswerSuccess = (data) => {
  console.log(data.answers)
  const showAnswer = showAnswer({ answers: data.answers })
  $('.content').html(showAnswer)
}

module.exports = {
  getAnswerSuccess
}

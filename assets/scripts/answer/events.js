// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')
// const surveys = require('../survey/events')

const onCreateAnswer = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  const answer = $('.survey-answer-' + event.target.attributes['data-id'].value).val()
  api.createAnswer(id, answer)
    .then(ui.createAnswerSuccess)
    .catch(ui.failure)
}

// const onGetAnswer = function (event) {
//   event.preventDefault()
//   const id = $(event.target).closest('section').data('id')
//   api.viewSurvey(id)
//     .then(survey => {
//       // check
//     // responseArray = survey.survey.responses
//       calculateAnswer(id)
//     })
//     .catch(ui.failure)
// }
//
// const calculateAnswer = (event) => {
//   const
//   let count = 0
//   answerCount
// for(var i = 0; i < answerCount.length; i++){
//     if(array[i] == )
//         count++
// }
const addAnswerHandlers = () => {
  $('.survey-box').on('submit', '.survey-answer-create', onCreateAnswer)
//   $('#new-survey-btn').on('click', onGetSurveys)
//   $('.survey-box').on('submit', '.update-survey-form', onUpdateSurvey)
}

module.exports = {
  addAnswerHandlers
  // onGetAnswer,
  // onCreateAnswer
}

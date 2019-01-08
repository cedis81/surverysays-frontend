// const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
// const store = require('../store.js')
const ui = require('./ui')
// const surveys = require('../survey/events')

const onCreateAnswer = (event) => {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  // console.log('create answer', id)
  const answer = $('.survey-answer-' + event.target.attributes['data-id'].value).val()
  if (answer === '') {
    return (
      $('#message').show(),
      $('#message').html('Please select an answer.'),
      setTimeout(function () {
        $('#message').fadeToggle()
      }, 1000))
  } else {
    api.createAnswer(id, answer)
      .then(ui.createAnswerSuccess)
      // .then(() => onGetAnswers(event))
      .catch(ui.failure)
  }
}

const onGetAnswers = function (event) {
  event.preventDefault()
  const id = $(event.currentTarget).data('id')
  // console.log('hiiiii', id)
  api.getAnswers(id)
    .then(ui.getAnswersSuccess)
    .catch(ui.failure)
}

// const getMessage = function () {
//   event.preventDefault()
//   $('#message').show()
//   setTimeout(function () {
//     $('#message').fadeToggle()
//   }, 1000)
// }

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
  $('.survey-box').on('click', '.show-answer', onGetAnswers)
  // $('.survey-box').on('click', '.show-answer', getMessage)
}

module.exports = {
  addAnswerHandlers
  // onGetAnswer,
  // onCreateAnswer
}

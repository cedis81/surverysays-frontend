const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log('the event is created')
  console.log(userData)
  api.createSurvey(userData)
    .then(console.log)
    .catch(console.log)
}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
}

module.exports = {
  addSurveyHandlers
}

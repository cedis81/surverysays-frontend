const getFormFields = require('../../../lib/get-form-fields.js')

const onCreateSurvey = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  console.log('the event is created')
  console.log(userData)
}

const addSurveyHandlers = () => {
  $('#survey-form').on('submit', onCreateSurvey)
}

module.exports = {
  addSurveyHandlers
}

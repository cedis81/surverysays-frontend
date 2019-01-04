const createSurveySuccess = (createSurveyResponse) => {
  $('#survey-form').trigger('reset')
  console.log('create survey success')
}

const failure = (failureResponse) => {
  console.log('something went wrong')
}

module.exports = {
  createSurveySuccess,
  failure
}

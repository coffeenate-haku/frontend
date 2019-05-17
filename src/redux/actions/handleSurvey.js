export const handleSugarLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_SUGAR_LEVEL_SURVEY",
    payload
  })
}

export const handleBodyLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_BODY_LEVEL_SURVEY",
    payload
  })
}


export const handleHotColdSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_HOT_COLD_SURVEY",
    payload
  });
};
export const handleSugarLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_SUGAR_LEVEL_SURVEY",
    payload
  });
};

export const handleBodyLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_BODY_LEVEL_SURVEY",
    payload
  });
};

export const handleFoamLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_FOAM_LEVEL_SURVEY",
    payload
  });
};

export const handleMilkLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_MILK_LEVEL_SURVEY",
    payload
  });
};

export const handleFlavorsLevelSurvey = payload => dispatch => {
  dispatch({
    type: "HANDLE_FLAVORS_LEVEL_SURVEY",
    payload
  });
};

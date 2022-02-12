import actionTypes from "../actions/actionTypes";

const statusReducer = (apiStatus, action) => {
  let newApiStatus;

  switch (action.type) {
    case actionTypes.setLoading:
      newApiStatus = {
        ...apiStatus,
        loading: true,
      };
      break;
    case actionTypes.unsetLoading:
      newApiStatus = {
        ...apiStatus,
        loading: false,
      };
      break;
    case actionTypes.setError:
      newApiStatus = {
        ...apiStatus,
        error: true,
      };
      break;
    case actionTypes.unsetError:
      newApiStatus = {
        ...apiStatus,
        error: false,
      };
      break;
    default:
      newApiStatus = { ...apiStatus };
  }

  return newApiStatus;
};

export default statusReducer;

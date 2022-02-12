import { useReducer } from "react";
import fighterReducer from "../../reducers/fighterReducer";
import matchesReducer from "../../reducers/matchesReducer";
import starReducer from "../../reducers/starReducer";
import StarContext from "./StarContext";
import statusReducer from "../../reducers/statusReducer";

const StarContextProvider = ({ children }) => {
  const [apiStatus, statusDispatch] = useReducer(statusReducer, {
    loading: false,
    error: false,
  });
  const [starFighters, dispatch] = useReducer(starReducer, []);
  const [fighter, fighterDispatch] = useReducer(fighterReducer, {});
  const [myFighters, myDispatch] = useReducer(matchesReducer, []);

  return (
    <StarContext.Provider
      value={{
        starFighters,
        dispatch,
        fighter,
        fighterDispatch,
        myFighters,
        myDispatch,
        apiStatus,
        statusDispatch,
      }}
    >
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

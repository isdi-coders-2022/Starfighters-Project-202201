import { useReducer } from "react";
import fighterReducer from "../../reducers/fighterReducer";
import matchesReducer from "../../reducers/matchesReducer";
import starReducer from "../../reducers/starReducer";
import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  const [starFighters, dispatch] = useReducer(starReducer, [
    {
      loading: false,
      error: false,
    },
  ]);
  const [fighter, fighterDispatch] = useReducer(fighterReducer, {
    loading: false,
    error: false,
  });
  const [myFighters, myDispatch] = useReducer(matchesReducer, [
    {
      loading: false,
      error: false,
    },
  ]);

  return (
    <StarContext.Provider
      value={{
        starFighters,
        dispatch,
        fighter,
        fighterDispatch,
        myFighters,
        myDispatch,
      }}
    >
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

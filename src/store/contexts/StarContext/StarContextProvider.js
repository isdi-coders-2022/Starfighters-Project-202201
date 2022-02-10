import { useReducer } from "react";
import fighterReducer from "../../reducers/fighterReducer";
import starReducer from "../../reducers/starReducer";
import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  const [starFighters, dispatch] = useReducer(starReducer, []);
  const [fighter, fighterDispatch] = useReducer(fighterReducer, {});

  return (
    <StarContext.Provider
      value={{ starFighters, dispatch, fighter, fighterDispatch }}
    >
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

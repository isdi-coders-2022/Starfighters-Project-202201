import { useReducer } from "react";
import starReducer from "../../reducers/starReducer";
import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  const [starFighters, dispatch] = useReducer(starReducer, []);

  return (
    <StarContext.Provider value={{ starFighters, dispatch }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

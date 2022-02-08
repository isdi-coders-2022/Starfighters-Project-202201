import starFighters from "../../../starFighters";
import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  return (
    <StarContext.Provider value={{ starFighters }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

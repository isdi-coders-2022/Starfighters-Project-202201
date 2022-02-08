import { useEffect, useState } from "react";
import starFighters from "../../../starFighters";
import StarContext from "./StarContext";

const StarContextProvider = ({ children }) => {
  const [fighters, setFighters] = useState([starFighters]);

  useEffect(
    () => async () => {
      const fetchedData = await fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
      );
      const array = await fetchedData.json();
      setFighters([...array]);
    },
    [setFighters]
  );

  return (
    <StarContext.Provider value={{ setFighters, fighters }}>
      {children}
    </StarContext.Provider>
  );
};
export default StarContextProvider;

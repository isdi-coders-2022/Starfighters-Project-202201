import { useCallback, useContext } from "react";
import {
  addFighterAction,
  deleteFighterAction,
  loadFightersAction,
} from "../store/actions/actionCreators";
import StarContext from "../store/contexts/StarContext/StarContext";

const useStarAPI = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { dispatch } = useContext(StarContext);

  const loadFightersAPI = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const fighters = await response.json();
      dispatch(loadFightersAction(fighters));
    } catch (error) {}
  }, [apiUrl, dispatch]);

  const addFighterAPI = async (fighter) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fighter),
      });
      const newFighter = await response.json();
      dispatch(addFighterAction(newFighter));
    } catch (error) {}
  };

  const deleteFighterAPI = async (id) => {
    try {
      const response = await fetch(`${apiUrl}${id}`, { method: "DELETE" });
      if (response.ok) {
        dispatch(deleteFighterAction(id));
      } else {
        throw new Error();
      }
    } catch (error) {}
  };

  return {
    loadFightersAPI,
    addFighterAPI,
    deleteFighterAPI,
  };
};
export default useStarAPI;

import { useCallback, useContext } from "react";
import {
  addFighterAction,
  deleteFighterAction,
  loadFighterAction,
  loadFightersAction,
} from "../store/actions/actionCreators";
import StarContext from "../store/contexts/StarContext/StarContext";

const useStarAPI = () => {
  let apiUrl = process.env.REACT_APP_API_URL;
  const { myDispatch, fighterDispatch } = useContext(StarContext);

  const loadMyFighters = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const fighters = await response.json();

      myDispatch(loadFightersAction(fighters));
    } catch (error) {}
  }, [apiUrl, myDispatch]);

  const loadFighter = useCallback(
    async (id) => {
      apiUrl = `${process.env.REACT_APP_API_FIGHTER}${id}.json`;
      if (id >= 90) {
        apiUrl = `${process.env.REACT_APP_API_URL}/${id}`;
      }
      try {
        const response = await fetch(apiUrl);
        const fighter = await response.json();
        fighterDispatch(loadFighterAction(fighter));
      } catch (error) {}
    },
    [fighterDispatch]
  );

  const addFighterAPI = async (fighter) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fighter),
      });
      const newFighter = await response.json();
      myDispatch(addFighterAction(newFighter));
    } catch (error) {}
  };

  const deleteFighterAPI = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      if (response.ok) {
        myDispatch(deleteFighterAction(id));
      } else {
        throw new Error();
      }
    } catch (error) {}
  };

  return {
    loadMyFighters,
    addFighterAPI,
    deleteFighterAPI,
    loadFighter,
  };
};
export default useStarAPI;

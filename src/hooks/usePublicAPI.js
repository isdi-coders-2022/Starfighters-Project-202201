import { useCallback, useContext } from "react";
import {
  filterFightersAction,
  getPageCharactersAction,
  loadFightersAction,
  setErrorAction,
  unsetErrorAction,
} from "../store/actions/actionCreators";
import StarContext from "../store/contexts/StarContext/StarContext";

const usePublicAPI = () => {
  const apiUrl = process.env.REACT_APP_API_ORIGIN;
  const { dispatch, statusDispatch } = useContext(StarContext);

  const loadFightersAPI = useCallback(async () => {
    try {
      statusDispatch(unsetErrorAction());
      const noImage = [82, 77, 57, 56, 49, 47, 37, 28, 26];
      const response = await fetch(apiUrl);
      const fighters = await response.json();
      const filteredFighters = fighters.filter(
        (fighter) => !noImage.includes(fighter.id)
      );

      dispatch(loadFightersAction(filteredFighters));
    } catch (error) {
      statusDispatch(setErrorAction());
    }
  }, [apiUrl, dispatch, statusDispatch]);

  const filterFighters = (species) => {
    dispatch(filterFightersAction(species));
  };

  const getPageCharacters = (currentPage, charactersPerPage) => {
    dispatch(getPageCharactersAction(currentPage, charactersPerPage));
  };

  return {
    loadFightersAPI,
    filterFighters,
    getPageCharacters,
  };
};
export default usePublicAPI;

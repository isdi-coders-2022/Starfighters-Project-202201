import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharactersListComponent from "../components/CharacterListComponent/CharacterListComponent";
import usePublicAPI from "../hooks/usePublicAPI";
import StarContext from "../store/contexts/StarContext/StarContext";
import styled from "styled-components";

const CharacterListPage = () => {

  const { loadFightersAPI } = usePublicAPI();
  const { starFighters } = useContext(StarContext);

  useEffect(() => {
    loadFightersAPI();
  }, [loadFightersAPI]);


  let navigate = useNavigate();
  let goToPage = (id) => {
    navigate(`/character-details/${id}`);
  };
  return (
    <>

      <h2> Returning Character List Page</h2>;
      <ul>
        {starFighters.map((fighter) => (

          <CharactersListComponent
            key={fighter.id}
            fighter={fighter}
            actionOnClick={() => {
              goToPage(fighter.id);
            }}
          />
        ))}
      </StarFightersBox>
    </>
  );
};

export default CharacterListPage;

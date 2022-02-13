import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonImage from "../components/ButtonImage/ButtonImage";
import CreatorFormStyled from "../components/CreatorForm/CreatorFormStyled";

import useStarAPI from "../hooks/useStarAPI";
import StarContext from "../store/contexts/StarContext/StarContext";

const CharacterCreatorFormPage = () => {
  const { addFighterAPI } = useStarAPI();
  const { myFighters } = useContext(StarContext);
  const { id } = useParams();
  const fighter = myFighters.filter((fighter) => fighter.id === id);

  const blankFields = {
    name: fighter.name,
    height: fighter.height,
    mass: fighter.mass,
    gender: fighter.gender,
    homeworld: fighter.homeworld,
    species: fighter.species,
    affiliation: fighter.affiliation,
    master: fighter.master,
    image: fighter.image,
    id: fighter.id,
  };

  const [formData, setFormData] = useState(blankFields);

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    addFighterAPI(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(blankFields);
  };

  const isFilled =
    formData.name !== "" &&
    formData.height !== "" &&
    formData.mass !== "" &&
    formData.gender !== "" &&
    formData.homeworld !== "" &&
    formData.species !== "" &&
    formData.afiliation !== "" &&
    formData.master !== "" &&
    formData.image !== "";

  return (
    <>
      <CreatorFormStyled
        className="new-character"
        onSubmit={onFormSubmit}
        autoComplete="off"
        noValidate
      >
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={formData.name}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Height: </label>
          <input
            type="number"
            id="height"
            className="form-input"
            value={formData.height}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Mass: </label>
          <input
            type="number"
            id="mass"
            className="form-input"
            value={formData.mass}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Gender: </label>
          <input
            type="text"
            id="gender"
            className="form-input"
            value={formData.gender}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Homeworld: </label>
          <input
            type="text"
            id="homeworld"
            className="form-input"
            value={formData.homeworld}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Species: </label>
          <input
            type="text"
            id="species"
            className="form-input"
            value={formData.species}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Affiliation: </label>
          <input
            type="text"
            id="affiliation"
            className="form-input"
            value={formData.affiliation}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Master: </label>
          <input
            type="text"
            id="master"
            className="form-input"
            value={formData.master}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Image: </label>
          <input
            type="url"
            id="image"
            className="form-input"
            value={formData.image}
            onChange={changeData}
          />
        </div>
        <ButtonImage
          type="submit"
          disabled={!isFilled}
          src={"Confirm"}
          alt={"Create character"}
        ></ButtonImage>
      </CreatorFormStyled>
    </>
  );
};

export default CharacterCreatorFormPage;

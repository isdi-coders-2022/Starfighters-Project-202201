import { useState, useContext } from "react";
import ButtonImage from "../components/ButtonImageComponent/ButtonImageComponent";
import StarContext from "../store/contexts/StarContext/StarContext";
import { useParams } from "react-router-dom";

const CharacterUpdaterFormPage = () => {
  const { starFighters } = useContext(StarContext);
  const { id } = useParams();

  const fighter = starFighters.find((fighter) => fighter.id === id);

  const [formData, setFormData] = useState();

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
    // addGentlemanAPI(formData);
    resetForm();
  };

  const resetForm = () => {
    setFormData(fighter);
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
      <h2> Returning Character Creator Form Page</h2>
      <form
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
            value={fighter.name}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Height: </label>
          <input
            type="number"
            id="height"
            className="form-input"
            value={fighter.height}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Mass: </label>
          <input
            type="number"
            id="mass"
            className="form-input"
            value={fighter.mass}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Gender: </label>
          <input
            type="text"
            id="gender"
            className="form-input"
            value={fighter.gender}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Homeworld: </label>
          <input
            type="text"
            id="homeworld"
            className="form-input"
            value={fighter.homeworld}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Species: </label>
          <input
            type="text"
            id="species"
            className="form-input"
            value={fighter.species}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Affiliation: </label>
          <input
            type="text"
            id="affiliation"
            className="form-input"
            value={fighter.affiliation}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Master: </label>
          <input
            type="text"
            id="master"
            className="form-input"
            value={fighter.master}
            onChange={changeData}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Image: </label>
          <input
            type="url"
            id="image"
            className="form-input"
            value={fighter.image}
            onChange={changeData}
          />
        </div>
        <ButtonImage
          type="submit"
          disabled={!isFilled}
          src={"Confirm"}
          alt={"Create character"}
        ></ButtonImage>
      </form>
    </>
  );
};

export default CharacterUpdaterFormPage;

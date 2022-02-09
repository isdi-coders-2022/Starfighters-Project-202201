import { useState } from "react";
import CharacterCreatorComponent from "../components/CharacterCreatorComponent/CharacterCreatorComponent";


const CharacterCreatorFormPage = () => {
  const blankFields = {
    name: "",
    height: "",
    mass: "",
    gender: "",
    homeworld: "",
    species: "",
    affiliation: "",
    master: "",
    image: "",
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

  /*const onFormSubmit = (event) => {   //MANDA A LA API LOCAL
     event.preventDefault();
     addGentlemanAPI(formData);
     resetForm();
   }; */

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
      <h2> Returning Character Creator Form Page</h2>
      <form
        className="new-gentlemen"
        onSubmit={onFormSubmit}
        autoComplete="off"
        noValidate
      >
        <CharacterCreatorComponent
          type={"text"}
          content={"Name"}
          name={"name"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"number"}
          content={"Height"}
          name={"height"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"number"}
          content={"Mass"}
          name={"mass"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"text"}
          content={"Gender"}
          name={"gender"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"text"}
          content={"Homeworld"}
          name={"homeworld"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"text"}
          content={"Species"}
          name={"species"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"text"}
          content={"Affiliation"}
          name={"affiliation"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"text"}
          content={"Master"}
          name={"master"}
          inputOnChange={addData}
        />
        <CharacterCreatorComponent
          type={"url"}
          content={"Image"}
          name={"image"}
          inputOnChange={addData}
        />
        <ButtonImage type="submit" disabled={!isFilled} src={} alt={"Create character"}></ButtonImage>
      </form>
    </>
  );
};

export default CharacterCreatorFormPage;

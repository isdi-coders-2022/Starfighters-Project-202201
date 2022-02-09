import CharacterCreatorComponent from "../components/CharacterCreatorComponent/CharacterCreatorComponent";

const CharacterCreatorFormPage = () => {
  return (
    <>
      <h2> Returning Character Creator Form Page</h2>
      <CharacterCreatorComponent
        type={"number"}
        content={"Id"}
        name={"id"}
        inputOnChange={addData}
      />
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
    </>
  );
};

export default CharacterCreatorFormPage;

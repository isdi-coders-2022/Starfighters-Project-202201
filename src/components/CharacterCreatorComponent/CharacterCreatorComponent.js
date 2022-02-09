const CharacterCreatorComponent = ({ type, content, name, inputOnChange }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {content}
        </label>
        <input
          name={name}
          onChange={inputOnChange}
          type={type}
          className="form-control"
        />
      </div>
    </>
  );
};

export default CharacterCreatorComponent;

import { useContext } from "react";

const Error = () => {

  const Error = () => {
  const {
    apiStatus: { error },
  } = useContext(starC);

  return (
    <>
      <h2 className="classname">Unexpected Error</h2>
      <img
        src="https://www.latercera.com/resizer/CN7_FFauiQEIBp4pYKaVlqjw5jI=/380x570/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/VFDRH2DX5ZENLP43E6KOFGSFGA.jpg"
        alt="Darth Vader says you followed an error path"
      ></img>
    </>
  );
};
export default Error;

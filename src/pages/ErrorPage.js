import { useContext } from "react";
import "./Error.css";
import StarContext from "../store/contexts/StarContext/StarContext";

const Error = () => {
  const {
    apiStatus: { error },
  } = useContext(StarContext);
  return (
    <>
      {error && (
        <img
          alt="Darth Vader says an error occurred."
          src="https://d2ofqe7l47306o.cloudfront.net/myfreewallpapers/starwars/wallpapers/darth-vader.jpg"
        />
      )}
    </>
  );
};

export default Error;

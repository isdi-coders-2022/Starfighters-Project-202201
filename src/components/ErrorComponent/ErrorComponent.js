import { useContext } from "react";
import "./Error.css";
import StarContext from "../../store/contexts/StarContext/StarContext";

const Error = () => {
  const {
    apiStatus: { error },
  } = useContext(StarContext);
  return <>{error && <p className="error">Error fetching data</p>}</>;
};

export default Error;

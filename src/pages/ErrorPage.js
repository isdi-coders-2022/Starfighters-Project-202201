import { useContext } from "react";
import StarContext from "../store/contexts/StarContext/StarContext";
import Error from "../components/ErrorComponent/ErrorComponent";

const ErrorPage = () => {
  const {
    apiStatus: { error },
  } = useContext(StarContext);

  return <>{error && <Error />}</>;
};

export default ErrorPage;

import { useContext } from "react";
import LoadingComponent from "../components/LoadingComponent/LoadingComponent";
import StarContext from "../store/contexts/StarContext/StarContext";

const LoadingPage = () => {
  const {
    apiStatus: { loading },
  } = useContext(StarContext);
  return <>{loading && <LoadingComponent />}</>;
};

export default LoadingPage;

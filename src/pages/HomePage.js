import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="start-container">
      <h2 className="title"> May the force be with you</h2>
      <Link to="/character-list">
        <img className="start-button" src="/icons/Forward.png" alt=""></img>
      </Link>
    </div>
  );
};

export default HomePage;

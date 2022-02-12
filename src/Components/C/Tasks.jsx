import { NavLink, useNavigate } from "react-router-dom";

const Tasks = () => {
  const navigate = useNavigate();
  const test = (path) => {
    navigate(`${path}`);
  };

  return (
    <div className="Nav">
      <NavLink to="/" className="Nav__Link" onFocus={() => test("/")}>
        <p className="Nav__Item">Taco</p>
      </NavLink>
      <NavLink
        to="/Burrito"
        className="Nav__Link"
        id={2}
        onFocus={() => test("/Burrito")}
      >
        <p className="Nav__Item">Burrito</p>
      </NavLink>
      <NavLink
        to="/Taquito"
        className="Nav__Link"
        onFocus={() => test("/Taquito")}
      >
        <p className="Nav__Item">Taquito</p>
      </NavLink>
    </div>
  );
};

export default Tasks;

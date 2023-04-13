import "./Finale.css";
import { NavLink } from "react-router-dom";

function Finale() {
  return (
    <div className="finale-container">
      <h2>All Powerful!</h2>
      <p>
        Wow what a week! Frankly, youre exhausted and have no idea what to
        expect next. As you get out of bed and head into the kitchen you see
        Fluffy already sitting there, waiting for you. It looks like they have
        something important to say...
      </p>

      <NavLink to={`/story/finale/good`}>
        <button>Let's find out!</button>
      </NavLink>
    </div>
  );
}

export default Finale;

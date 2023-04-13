import "./Finale.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Finale() {
  const catMorality = useSelector((state) => state.cat.morality);
  console.log(catMorality);

  const getFinaleType = () => {
    let finaleType;
    if (catMorality > 3) {
      finaleType = "good";
    } else if (catMorality <= 3 && catMorality >= 0) {
      finaleType = "neutral";
    } else {
      finaleType = "bad";
    }
    return finaleType;
  };

  return (
    <div className="finale-container">
      <h2>All Powerful!</h2>
      <p>
        Wow what a week! Frankly, youre exhausted and have no idea what to
        expect next. As you get out of bed and head into the kitchen you see
        Fluffy already sitting there, waiting for you. It looks like they have
        something important to say...
      </p>

      <NavLink to={`/story/finale/${getFinaleType()}`}>
        <button>Let's find out!</button>
      </NavLink>
    </div>
  );
}

export default Finale;

import { useSelector } from "react-redux";
import "./Finale.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetDay } from "../../features/daySlice";
import { resetCatMorality, updateCatName } from "../../features/catSlice";
import storyData from "../../data/story-data";
import { addName } from "../../features/storySlice";

function Finale() {
  const catMorality = useSelector((state) => state.cat.morality);
  const dispatch = useDispatch();
  const storedName = useSelector((state) => state.cat.name);

  const getCatPath = () => {
    if (catMorality > 0) {
      return require("../../images/good-cat-fly.gif");
    } else if (catMorality === 0) {
      return require("../../images/neutral-cat.gif");
    } else {
      return require("../../images/evil-cat.gif");
    }
  };

  const getFinaleType = () => {
    if (catMorality > 0) {
      return `${storedName} wins the nobel peace prize for solving climate change`;
    } else if (catMorality === 0) {
      return `${storedName} says "This isn't really working out anymore" and packs a bag. All you know is they "want to do something with Turquoise"`;
    } else {
      return `${storedName} decides humanity isn't worth it and yeets the earth into the sun`;
    }
  };

  return (
    <div className="finale-type-container">
      <img src={getCatPath()} alt="Cat final form" />
      <p className="finale-text">{getFinaleType()}</p>
      <NavLink to="/story/">
        <button
          className="blue-button"
          onClick={() => {
            dispatch(resetDay());
            dispatch(resetCatMorality());
            dispatch(addName(storyData));
            dispatch(updateCatName(""));
          }}
        >
          PLAY AGAIN
        </button>
      </NavLink>

      <NavLink to="/book">
        <button
          className="dark-blue-button">
          THE BOOK OF CAT
        </button>
      </NavLink>
    </div>
  );
}

export default Finale;

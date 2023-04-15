import { useSelector } from "react-redux";
import "./Finale.css";

function Finale() {
  const catMorality = useSelector((state) => state.cat.morality);

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
      return "Fluffly wins the nobel peace prize for solving global warming";
    } else if (catMorality === 0) {
      return `Fluffy says "This isn't really working out anymore" and packs a bag. All you know is they "want to do something with Turquoise"`;
    } else {
      return "Fluffy becomes El Gato the most feared drug lord in the world";
    }
  };

  return (
    <div className="finale-type-container">
      <img src={getCatPath()} alt="Cat final form"/>
      <p>{getFinaleType()}</p>
      <button>Play Again</button>
      <button>Read the Book</button>
    </div>
  );
}

export default Finale;

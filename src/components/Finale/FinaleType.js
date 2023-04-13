import "./FinaleType.css";
import { useSelector } from "react-redux";

function FinaleType() {
  const catMorality = useSelector((state) => state.cat.morality);
  const getFinaleType = () => {
    let finaleType;
    if (catMorality > 3) {
      finaleType =
        "Fluffly wins the nobel peace prize for solving global warming";
    } else if (catMorality <= 3 && catMorality >= 0) {
      finaleType = `Fluffy says "This isn't really working out anymore" and packs a bag. All you know is they "want to do something with Turquoise"`;
    } else {
      finaleType =
        "Fluffy becomes El Gato the most feared drug lord in the world";
    }
    return finaleType;
  };

  return (
    <div className="finale-type-container">
      <p>{getFinaleType()}</p>
      <button>Play Again</button>
      <button>Read the Book</button>
    </div>
  );
}

export default FinaleType;

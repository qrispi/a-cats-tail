import { useState } from "react";
import { useSelector } from "react-redux";
import "./Finale.css";

function Finale() {
  const catMorality = useSelector((state) => state.cat.morality);
  const [catPath, setCatPath] = useState()
  

  const getFinaleType = () => {
    if (catMorality > 0) {
      setCatPath('../../images/good-cat-fly.gif');
      return "Fluffly wins the nobel peace prize for solving global warming";
    } else if (catMorality === 0) {
      setCatPath('../../images/neutral-cat.gif')
      return `Fluffy says "This isn't really working out anymore" and packs a bag. All you know is they "want to do something with Turquoise"`;
    } else {
      setCatPath('../../images/evil-cat.gif')
      return "Fluffy becomes El Gato the most feared drug lord in the world";
    }
  };

  return (
    <div className="finale-type-container">
      <img src={require(catPath)} />
      <p>{getFinaleType()}</p>
      <button>Play Again</button>
      <button>Read the Book</button>
    </div>
  );
}

export default Finale;

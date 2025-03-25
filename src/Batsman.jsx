import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [sixes, setSixes] = useState(0);

  const handleSingle = () => {
    const updateRuns = runs + 1;
    setRuns(updateRuns);
  };

  const handleDoubles = () => {
    const newRuns = runs + 2;
    setRuns(newRuns);
  };

  const handleFour = () => {
    const newRuns = runs + 4;
    setRuns(newRuns);
  };

  const handleSix = () => {
    const newRuns = runs + 6;
    const totalSixes = sixes + 1;
    setSixes(totalSixes);
    setRuns(newRuns);
  };
  return (
    <div>
      <h3>Player: Bangla Bastman</h3>

      <p><small>Sixs: {sixes}</small></p>
      {runs > 50 && <p>You Score: 50</p>}
      <h1>Score: {runs}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleDoubles}>Doubles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}

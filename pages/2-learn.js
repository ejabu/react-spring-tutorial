import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Screen = () => {
  const [clicked, setClicked] = useState(false);
  const springProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: clicked ? 1 : 0 },
  });

  const runAnimation = () => {
    setClicked(!clicked);
  };

  return (
    <main className="box-mobile">
      <h1>1. Simple Toggle</h1>
      <div className="box-section">
        <h2>Action</h2>
        <div>State : {clicked.toString()}</div>
        <div className="box-action">
          <button onClick={runAnimation}>Toggle</button>
        </div>
      </div>
      <div className="box-section">
        <h2>Result</h2>
        <animated.div style={springProps}>Element</animated.div>
      </div>
    </main>
  );
};

export default Screen;

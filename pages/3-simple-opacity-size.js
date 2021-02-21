import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Screen = () => {
  const [clicked, setClicked] = useState(false);
  const springProps = useSpring({
    from: {
      opacity: 0,
      fontSize: "14px"
    },
    to: {
      opacity: clicked ? 1 : 0,
      fontSize: clicked ? "20px" : "14px"
    },
  });

  const runAnimation = () => {
    setClicked(!clicked);
  };

  return (
    <main className="box-mobile">
      <h1>3. Simple Toggle</h1>
      <div className="box-section">
        <h2>Action</h2>
        <p>Opacity and Size will be animated</p>
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

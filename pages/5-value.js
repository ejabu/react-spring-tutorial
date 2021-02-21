import { animated, useSpring } from "react-spring";
import { useState } from "react";

const Screen = () => {
  const [clicked, setClicked] = useState(false);
  const { progressValue, ...styleProps } = useSpring({
    from: {
      progressValue: 0,
      opacity: 0,
    },
    to: {
      progressValue: clicked ? 5 : 0,
      opacity: clicked ? 1 : 0,
    },
    config: {
      duration: 5000,
    },
  });
  const runAnimation = () => {
    setClicked(!clicked);
  };

  return (
    <main className="box-mobile">
      <h1>5. Value</h1>
      <div className="box-section">
        <h2>Action</h2>
        <div>State : {clicked.toString()}</div>
        <div className="box-action">
          <button onClick={runAnimation}>Toggle</button>
        </div>
      </div>
      <div className="box-section">
        <h2>Result</h2>
        <animated.div>{progressValue.getValue()}</animated.div>
        <animated.div>{progressValue.interpolate((val) => val.toFixed(1) + " s")}</animated.div>
        <animated.div style={{...styleProps}}>Element</animated.div>
      </div>
    </main>
  );
};

export default Screen;

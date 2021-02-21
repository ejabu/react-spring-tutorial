import { animated, useSpring } from "react-spring";
// import { useState } from "react";

const Screen = () => {
  const springProps = useSpring({
    from: {
      opacity: 0,
      fontSize: "14px",
    },
    to: {
      opacity: 1,
      fontSize: "20px",
    },
    config: {
      duration: 5000,
    },
  });

  return (
    <main className="box-mobile">
      <h1>4. No Action</h1>
      <div className="box-section">
        <h2>Without Action</h2>
        <p>Opacity and Size will be animated</p>
        <p>
          <a href="javascript: location.reload()">Refresh the Page</a> and wait
          for 5 seconds
        </p>
      </div>
      <div className="box-section">
        <h2>Result</h2>
        <animated.div style={springProps}>Element</animated.div>
      </div>
    </main>
  );
};

export default Screen;

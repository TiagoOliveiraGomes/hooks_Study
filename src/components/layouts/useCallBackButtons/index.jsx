import react from "react";
import React from "react";

const callBackButtonsComponent = props => {
    const {sumFunction} = props
    console.log('Rendering...')
  return (
    <div>
      <button className="btn" onClick={() => sumFunction(1)}>+1</button>
      <button className="btn" onClick={() => sumFunction(5)}>+5</button>
      <button className="btn" onClick={() => sumFunction(10)}>+10</button>
    </div>
  );
}

export default react.memo(callBackButtonsComponent)
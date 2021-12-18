import React, { useCallback, useState } from "react";
import PageTittle from "../../components/layouts/pageTittle";
import UseCallBackButtons from "../../components/layouts/useCallBackButtons";
import "./index.css";

const useCallBack = (props) => {
  const [counter, setCounter] = useState(0);

  const sumToCounter = useCallback((numberOfButton) => {
    setCounter((counter) => counter + numberOfButton);
  }, [setCounter]);

  return (
    <div className="UseCallBack">
      <PageTittle tittle="UseCallBack" content="Returns a momoized function" />
      <div className="center">
        <span className="text">{counter}</span>
        <UseCallBackButtons sumFunction={sumToCounter} />
      </div>
    </div>
  );
};

export default useCallBack;

import React, { useContext } from "react";
import { Context } from "./Store";

const CoolComponent = () => {
  const [state, setState] = useContext(Context);
  return (
    <>
      <h1>Benny</h1>
      <p>Name: {state.name}</p>
    </>
  );
};

export default CoolComponent;

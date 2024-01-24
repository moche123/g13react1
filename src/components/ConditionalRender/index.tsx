import { useState } from "react";
import { Button } from "..";

export const ConditionalRender = () => {
  const [count, setCount] = useState(0);
  const limitNumber = 10;

  const paragraphIsMajor = <strong> Es mayor a {limitNumber} </strong>;
  const paragraphIsMinor = <p> Es menor a {limitNumber} </p>;

  const paragraphIsPair = <p> Es par </p>;
  //   const paragraphIsOdd = <p> Es impar </p>

  return (
    <div>
      <h5>ConditionalRender</h5>
      {count}
      <div onClick={() => setCount(count + 1)}>
        <Button fillColor="blue"></Button>
      </div>
      <br />

      {count > limitNumber ? paragraphIsMajor : paragraphIsMinor}

      {count % 2 === 0 && paragraphIsPair}
      {count % 2 !== 0 && (
        <>
          <p> Es impar  - Is not par </p>
        </>
      )}
    </div>
  );
};

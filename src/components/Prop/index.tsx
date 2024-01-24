//*Styles
import { Button } from "../Reusables";
import "./prop.css";

//*Interfaces
import { IProp } from "./props.interface";

export const Prop = (props: IProp) => {
  //*Styles Objects

  const paragraphStyle = {
    color: "blue",
    backgroundColor: "yellow",
    fontWeight: "bold",
  };

  return (
    <div style={{ backgroundColor: 'orange' }}>
      <h2 className="dark-mode">
        PROP - Name: {props.name} - Age: {props.age} - Number: {props.number}
      </h2>
      <div onClick={() => props.setNumber(props.number+1) }>
        <Button fillColor="red" />
      </div>
      <p style={paragraphStyle}>asdasdas</p>
    </div>
  );
};

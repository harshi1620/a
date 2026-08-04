import { useSelector, useDispatch } from "react-redux";
import { turnOn, turnOff } from "./lightSlice";

function Light() {
  const isLightOn = useSelector((state) => state.light.isOn);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Light is {isLightOn ? "ON 💡" : "OFF 🌑"}</h1>

      <button onClick={() => dispatch(turnOn())}>
        Turn ON
      </button>&nbsp;&nbsp;

      <button onClick={() => dispatch(turnOff())}>
        Turn OFF
      </button>
    </div>
  );
}

export default Light;
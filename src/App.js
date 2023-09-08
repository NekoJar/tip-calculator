import { useState } from "react";
import "./styles.css";
import { InputBill } from "./InputBill";
import { Satisfaction } from "./Satisfaction";
import { TotalBill } from "./TotalBill";
import { Reset } from "./Reset";

export default function App() {
  return (
    <div className="body">
      <Body />
    </div>
  );
}

function Body() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const Tips = bill * ((tip + friendTip) / 2 / 100);
  console.log(Tips);

  function handleReset() {
    setBill("");
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div>
      <InputBill bill={bill} setBill={setBill} />
      <Satisfaction tip={tip} setTip={setTip}>
        How was the Service?
      </Satisfaction>
      <Satisfaction tip={friendTip} setTip={setFriendTip}>
        How was your friend said about the Service?
      </Satisfaction>
      {bill > 0 && (
        <>
          <TotalBill bill={bill} Tips={Tips} />
          <Reset bill={bill} onReset={handleReset} />
        </>
      )}
    </div>
  );
}

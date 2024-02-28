import { useState } from "react";
import { Select } from "./Select";
import { SelectOption } from "./types/SelectPropsTypes";

const options = [
  { label: "one", value: 1 },
  { label: "two", value: 2 },
  { label: "three", value: 3 },
  { label: "four", value: 4 },
  { label: "five", value: 5 },
];

function App() {
  const [valueMultiple, setValueMultiple] = useState<SelectOption[]>([options[0]]);
  const [valueSingle, setValueSingle] = useState<SelectOption | undefined>(options[0]);

  return (
    <>
      <h3>Single select</h3>
      <Select options={options} value={valueSingle} onChange={(option) => setValueSingle(option)} />
      <br></br>
      <h3>Multiple select</h3>
      <Select multiple options={options} value={valueMultiple} onChange={(option) => setValueMultiple(option)} />
    </>
  );
}

export default App;

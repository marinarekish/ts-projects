import { FormEvent, useState } from "react";
// form pages
import { AccountForm } from "./forms/AccountForm";
import { AddressForm } from "./forms/AddressForm";
import { UserForm } from "./forms/UserForm";

import { useMultistepForm } from "./hooks/useMultistepForm"; // custom hook
import { INITIAL_DATA, FormData } from "./constants/constants"; // constant
import { Card, Counter, ButtonsContainer, Button } from "./styles/styledComponents"; // style

function App() {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();

    alert("Successful Account Creation");
  }

  return (
    <Card>
      <form onSubmit={onSubmit}>
        <Counter>
          {currentStepIndex + 1} / {steps.length}
        </Counter>
        {/* add content */}
        {step}
        <ButtonsContainer>
          {!isFirstStep && (
            <Button type="button" onClick={back}>
              Back
            </Button>
          )}
          <Button type="submit">{isLastStep ? "Finish" : "Next"}</Button>
        </ButtonsContainer>
      </form>
    </Card>
  );
}

export default App;

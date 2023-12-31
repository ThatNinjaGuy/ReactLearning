import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <span>😇</span>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currStep) => currStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((currStep) => currStep + 1);
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                backgroundColor={"#e7e7e7"}
                textColor={"#333"}
                onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
              >
                Learn how
              </Button>
            </div>
          </StepMessage>
          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handlePrevious}
            >
              <span>👈 Previous</span>
            </Button>
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={handleNext}
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

import React from "react";
import Form from "./Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, nextStep } from "../redux/slices/formSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.form);
  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };
  return (
    <>
      <div className="tabs">
        <button
          type="button"
          onClick={step === 2 ? handlePrev : null}
          className={`tab tab-lifted ${step === 1 ? "tab-active" : ""}`}
        >
          Kişisel
        </button>
        <button
          type="button"
          onClick={step === 1 ? handleNext : null}
          className={`tab tab-lifted ${step === 2 ? "tab-active" : ""}`}
        >
          Deneyimler
        </button>
      </div>
      <Form />
    </>
  );
};

export default Header;

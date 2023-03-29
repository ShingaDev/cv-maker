import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    reqForms: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
    inputValues: [],
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setName: (state, action) => {
      state.reqForms.name = action.payload;
    },
    setSurname: (state, action) => {
      state.reqForms.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.reqForms.email = action.payload;
    },
    setPhone: (state, action) => {
      state.reqForms.phone = action.payload;
    },
    setInputValues: (state, action) => {
      state.inputValues = action.payload;
    },
    addInputValue: (state, action) => {
      state.inputValues.push(action.payload);
    },
    updateInputValue: (state, action) => {
      const { index, value } = action.payload;
      state.inputValues[index] = value;
    },
    removeInputValue: (state, action) => {
      const index = action.payload;
      state.inputValues.splice(index, 1);
    },
  },
});

export const {
  nextStep,
  prevStep,
  setName,
  setSurname,
  setEmail,
  setPhone,
  addInputValue,
  updateInputValue,
  removeInputValue,
  setInputValues,
} = formSlice.actions;

export const formInputCount = (state) =>
  Object.keys(state.form.reqForms).length;

export default formSlice.reducer;

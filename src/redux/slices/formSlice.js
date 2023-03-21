import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    step: 1,
    forms: {
      name: "",
      surname: "",
      email: "",
      phone: "",
    },
  },
  reducers: {
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    setName: (state, action) => {
      state.forms.name = action.payload;
    },
    setSurname: (state, action) => {
      state.forms.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.forms.email = action.payload;
    },
    setPhone: (state, action) => {
      state.forms.phone = action.payload;
    },
  },
});

export const { nextStep, prevStep, setName, setSurname, setEmail, setPhone } =
  formSlice.actions;

export default formSlice.reducer;

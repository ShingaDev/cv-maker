import { nanoid } from "@reduxjs/toolkit";

function SavedStorage(name, surname, email, phone) {
  const userCvData = {
    id: nanoid(),
    name,
    surname,
    email,
    phone,
  };
  const savedDataArr = JSON.parse(localStorage.getItem("cvData")) || [];
  savedDataArr.push(userCvData);
  localStorage.setItem("cvData", JSON.stringify(savedDataArr));
  console.log(name);
}

export default SavedStorage

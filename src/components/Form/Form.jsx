import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  prevStep,
  setName,
  setSurname,
  setEmail,
  setPhone
} from "../../redux/slices/formSlice";
import { nanoid } from "@reduxjs/toolkit";
import calculateCompletionPercentage from "./calculateCompPercentage";

function Form() {
  const dispatch = useDispatch();
  const { step } = useSelector((state) => state.form);
  const { name, surname, email, phone } = useSelector(
    (state) => state.form.forms
  );
  const initialState = useSelector((state) => state.form.forms);

  // Submit işlemi gerçekleşirken localstorage'a array içinde kaydediliyor.
  const handleSubmit = (e) => {
    e.preventDefault();
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
  };

  // İleri ve Geri butonlarının fonksiyonları redux > slices > formSlice içerisinden alınıyor
  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };
  
  // Input elemanlarının sayısı alınıyor
  const formInputCount = Object.keys(initialState).length

  // calculateCompletionPercentage componentine parametre gönderiliyor
  const completionPercentage = calculateCompletionPercentage(
    name,
    surname,
    email,
    phone,
    formInputCount // Input sayıları alındıktan sonra dinamik olarak parametre gönderiliyor
  );

  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Ad"
              className="border p-2 rounded-md"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
            <input
              type="text"
              placeholder="Soyad"
              className="border p-2 rounded-md"
              value={surname}
              onChange={(e) => dispatch(setSurname(e.target.value))}
            />
            <div className="flex justify-between items-center">
              <button type="button" className="invisible" />
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white rounded-md py-2"
              >
                Devam
              </button>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="email"
              placeholder="E-mail"
              className="border p-2 rounded-md"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              type="tel"
              placeholder="Telefon"
              className="border p-2 rounded-md"
              value={phone}
              onChange={(e) => dispatch(setPhone(e.target.value))}
            />
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handlePrev}
                className="bg-blue-500 text-white rounded-md py-2"
              >
                Geri
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2"
              >
                Gönder
              </button>
            </div>
          </>
        )}
      </form>

      {/* Tamamlanma yüzdesi */}
      <div className="text-center mt-4">{completionPercentage}% tamamlandı</div>
    </div>
  );
}

export default Form;

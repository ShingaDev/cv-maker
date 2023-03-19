import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  prevStep,
  setName,
  setSurname,
  setEmail,
  setPhone,
} from "./redux/slices/formSlice";

function Form() {
  const dispatch = useDispatch();
  const { step, name, surname, email, phone } = useSelector(
    (state) => state.form
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Localstorage'a veriler kaydedilecek
  };

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  return (
    <div>
      {step === 1 && (
        <form className="space-y-4" onSubmit={handleNext}>
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
            <button type="button" className="hidden" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4"
          >
            Devam
          </button>
        </form>
      )}
      {step === 2 && (
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              className="bg-blue-500 text-white rounded-md py-2 px-4"
            >
              Geri
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md py-2 px-4"
            >
              Gönder
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Form;
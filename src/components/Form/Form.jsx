import { useSelector, useDispatch } from "react-redux";
import {
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
} from "../../redux/slices/formSlice";
import SavedStorage from "../../utils/cvFormStorage";
import CalculateCompletionPercentage from "./calculateCompPercentage";

function Form() {
  const dispatch = useDispatch();
  const { step, reqForms, inputValues } = useSelector((state) => state.form);
  const completionPercentage = CalculateCompletionPercentage();

  // Submit işlemi gerçekleşirken localstorage'a array içinde kaydediliyor.
  const handleSubmit = (e) => {
    e.preventDefault();
    SavedStorage(reqForms);
  };

  // İleri ve Geri butonlarının fonksiyonları redux > slices > formSlice içerisinden alınıyor
  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleAddInput = () => {
    dispatch(addInputValue(""));
  };

  const handleUpdateInput = (index, value) => {
    dispatch(updateInputValue({ index, value }));
  };

  const handleRemoveInput = (i) => {
    dispatch(removeInputValue(i));
    const updatedInputValues = [...inputValues];
    updatedInputValues.splice(i, 1);
    dispatch(setInputValues(updatedInputValues));
  };
  console.log(handleRemoveInput);
  console.log(inputValues);
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <input
                type="text"
                placeholder="Ad"
                className="border p-2 rounded-md"
                value={reqForms.name}
                onChange={(e) => dispatch(setName(e.target.value))}
              />
              <input
                type="text"
                placeholder="Soyad"
                className="border p-2 rounded-md"
                value={reqForms.surname}
                onChange={(e) => dispatch(setSurname(e.target.value))}
              />
              {inputValues.map((value, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder={`Input ${index + 1}`}
                    className="border p-2 rounded-md"
                    value={value}
                    onChange={(e) => handleUpdateInput(index, e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveInput(index)}
                  >
                    Sil
                  </button>
                </div>
              ))}
              <div className="flex justify-between items-center">
                <button type="button" className="invisible" />
                <button type="button" onClick={handleAddInput}>
                  Ekle
                </button>
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
                value={reqForms.email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="border p-2 rounded-md"
                value={reqForms.phone}
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

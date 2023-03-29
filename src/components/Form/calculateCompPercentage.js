import { useSelector } from "react-redux";
import { formInputCount } from "../../redux/slices/formSlice";
function CalculateCompletionPercentage() {
  const { reqForms } = useSelector(
    (state) => state.form
  );
  const reqInputCount = useSelector(formInputCount);
  let completedSteps = 0;

  if (reqForms.name) {
    completedSteps++;
  }

  if (reqForms.surname) {
    completedSteps++;
  }

  if (reqForms.email) {
    completedSteps++;
  }

  if (reqForms.phone) {
    completedSteps++;
  }

  let completionPercentage = 0;

  if (completedSteps === reqInputCount) {
    completionPercentage = 100;
  } else {
    completionPercentage = (completedSteps / reqInputCount) * 100;
  }

  return completionPercentage.toFixed(2);
}

export default CalculateCompletionPercentage;

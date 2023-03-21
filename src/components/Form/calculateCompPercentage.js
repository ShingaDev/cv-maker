function calculateCompletionPercentage(
  name,
  surname,
  email,
  phone,
  formInputCount
) {
  let completedSteps = 0;

  if (name) {
    completedSteps++;
  }

  if (surname) {
    completedSteps++;
  }

  if (email) {
    completedSteps++;
  }

  if (phone) {
    completedSteps++;
  }

  let completionPercentage = 0;

  if (completedSteps === formInputCount) {
    completionPercentage = 100;
  } else {
    completionPercentage = (completedSteps / formInputCount) * 100;
  }

  return completionPercentage.toFixed(2);
}

export default calculateCompletionPercentage
export function passwordValidation(inputData) {
  //eslint-disable-next-line
  const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
  const { value } = inputData;
  removeClassErrorSucces(inputData);

  const resultValidation = passwordValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function emailValidation(inputData) {
  //eslint-disable-next-line
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;
  removeClassErrorSucces(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");
    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

export function textValidation(inputData) {
  // /^[a-z ,.'-]+$/i;
  //eslint-disable-next-line
  const textValid = /^[A-zÀ-ú]+$/i;
  const { value } = inputData;
  removeClassErrorSucces(inputData);

  const resultValidation = textValid.test(value);
  if (resultValidation) {
    inputData.classList.add("success");

    return true;
  } else {
    inputData.classList.add("error");
    return false;
  }
}

function removeClassErrorSucces(inputData) {
  inputData.classList.remove("success");
  inputData.classList.remove("error");
}

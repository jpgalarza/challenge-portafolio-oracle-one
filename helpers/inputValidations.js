export const nameValidation = (input, value) => {
  if (value.trim().length < 2) {
    input.setCustomValidity('error')
  };
}


export const emailValidation = (input, value) => {
  const regexMail =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valueTrim = value.trim();

  if(valueTrim === '') {
    input.setCustomValidity('error');
  }

  if(!regexMail.test(valueTrim)) {
    input.setCustomValidity('error');
  }
}


export const subjectValidation = (input, value) => {
  if (value.trim().length < 4) {
    input.setCustomValidity('error');
  };
}



const validateForm = formSelector => {
  return new Promise((resolve, reject) => {
    const formElement = document.querySelector(formSelector);

    const validationOptions = [
      {
        attribute: 'minlength',
        isValid: input =>
          input.value && input.value.length >= parseInt(input.minLength, 10),
        errorMessage: (input, label) =>
          `${label.textContent} needs to be at least ${input.minLength} characters`,
      },
      {
        attribute: 'pattern',
        isValid: input => {
          const patternRegex = new RegExp(input.pattern);
          return patternRegex.test(input.value);
        },
        errorMessage: (input, label) => `Not a valid ${label.textContent}`,
      },
      {
        attribute: 'required',
        isValid: input => input.value.trim() !== '',
        errorMessage: (input, label) => `${label.textContent} is required`,
      },
    ];

    const validateSingleFormGroup = formGroup => {
      const label = formGroup.querySelector('label');
      const input = formGroup.querySelector('input, textarea');
      const errorContainer = formGroup.querySelector('.error');

      let formGroupError = false;
      for (const option of validationOptions) {
        if (input.hasAttribute(option.attribute) && !option.isValid(input)) {
          errorContainer.textContent = option.errorMessage(input, label);
          input.classList.add('border-status-error');
          input.classList.remove('border-status-success');
          formGroupError = true;
        }
      }

      if (!formGroupError) {
        errorContainer.textContent = '';
        input.classList.add('border-status-success');
        input.classList.remove('border-status-error');
      }

      return !formGroupError;
    };

    formElement.setAttribute('novalidate', '');

    Array.from(formElement.elements).forEach(element => {
      element.addEventListener('blur', event => {
        validateSingleFormGroup(event.srcElement.parentElement);
      });
    });

    const validateAllFormGroups = formToValidate => {
      const formGroups = Array.from(
        formToValidate.querySelectorAll('.formGroup')
      );

      return formGroups.every(formGroup => validateSingleFormGroup(formGroup));
    };

    formElement.addEventListener('submit', event => {
      event.preventDefault();
      const formValid = validateAllFormGroups(formElement);

      if (formValid) {
        console.log('Form is valid');
        resolve(formElement);
      }
    });
  });
};

const sendToAPI = formElement => {
  const formObject = Array.from(formElement.elements)
    .filter(element => element.type !== 'submit')
    .reduce(
      (accumulator, element) => ({
        ...accumulator,
        [element.id]: element.value,
      }),
      {}
    );

  console.log(formObject);
  // Submitting to an API via AJAX or something
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abi0200@hotmail.co.uk",
        Password : "E2B843D01A1BCA2424DA810E3A7DD6E9D7DC",
        To : "abi0200@hotmail.co.uk",
        From : document.getElementById("email").value,
        Subject : "New RDS Enquiry",
        Body : "ubyhbubyubuyvhuvuvu"
    }).then(
      message => alert("message sent successfully")
    );
    //delete everything above if it fails
    
};

validateForm('#contactForm').then(formElement => {
  console.log('Promise resolved');
  sendToAPI(formElement);
});

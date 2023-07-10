







function showError(inputElement, errorElement, config) {
    inputElement.classList.add(config.inputErrorClass);
    // Если инпут не валиден выводи сообещение об ошибке в элемент ошибки и добавляем класс невалидности
    errorElement.textContent = inputElement.validationMessage;
}

// В противном случае удаляем класс и очищаем сообщение+
function hideError(inputElement, errorElement, config) {
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.textContent = ' ';
}

// При наступлении события ввода в инпут проверяем его валидность
function chekInputValidity(inputElement, formElement, config) {
    inputElement.setCustomValidity("");

    const isInputValid = inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

    if (!isInputValid) {
        showError(inputElement, errorElement, config);
    } else {
        hideError(inputElement, errorElement, config);
    }
}


//отключенная кнопка
function disabledButton(buttonElement, config) {
  buttonElement.disabled = "disabled";
    buttonElement.classList.add(config.inactiveButtonClass);
}
//включенная кнопка
function enabledButton(buttonElement, config) {
    buttonElement.disabled = false;
    buttonElement.classList.remove(config.inactiveButtonClass);
}
//блокирует отправку
function toggleButtonState(buttonElement, isActive, config) {
    if (!isActive) {
        disabledButton(buttonElement, config);
    } else {
        enabledButton(buttonElement, config);
    }
}
//устанавливает все обработчики
function setEventListener(formElement, config) {

  // Внутри каждой формы ищет инпуты
    const inputList = formElement.querySelectorAll(config.inputSelector);
    const submitButtonElement = formElement.querySelector(
        config.submitButtonSelector
    );

    toggleButtonState(submitButtonElement, formElement.checkValidity(), config);

// Перебираем список инпутов конткретной формы и вешаем на каждый инпут обработчик события input
    [...inputList].forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
            toggleButtonState(
                submitButtonElement,
                formElement.checkValidity(),
                config
            );
            chekInputValidity(inputElement, formElement, config);
        });
    });
// Вешаем обработчик события submit на каждую форму в переборе
    formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        if (!formElement.checkValidity()) return;
    });
}
// Находим все формы и перебираем их

function enableValidation(config) {
    const formsList = document.querySelectorAll(config.formSelector);

    [...formsList].forEach(function (formElement) {
        setEventListener(formElement, config);
    });
}

function cleanButtonState(formElement) {
    const buttonElement = formElement.querySelector('.popup__button');
    disabledButton(buttonElement, config);
}

const config = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_invalid",
};

enableValidation(config);

function cleanInputError (formElement) {
    const inputElement = formElement.querySelectorAll(config.inputSelector);
    inputElement.forEach(input => {
        const errorElement = formElement.querySelector(`#${input.name}-error`);
        hideError(input, errorElement, config)
    })
}
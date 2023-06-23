let profileButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupInputName = popup.querySelector('.popup__input_data_name');
let popupInputInfo = popup.querySelector('.popup__input_info_name');
let popupButtonClose = popup.querySelector('.popup__button-close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let inputName;
let inputInfo;

function openPopup() {
    popup.classList.add('popup_opened');
    popupInputInfo.setAttribute('value', profileSubtitle.textContent);
    popupInputName.setAttribute('value', profileTitle.textContent);
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closePopup();
}

popup.addEventListener('submit', handleFormSubmit);
profileButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);





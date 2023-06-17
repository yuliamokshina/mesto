let profileButton = document.querySelector('.profile__button-edit');
let popup = document.querySelector('.popup');
let popupInputName = popup.querySelector('.popup__input_name');
let popupInputInfo = popup.querySelector('.popup__input_info');
let popupButtonClose = popup.querySelector('.popup__button-close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function openPopup() {
    popup.classList.add('popup_opened');
    console.log('open');
}

function closePopup() {
    popup.classList.remove('popup_opened');
    console.log('close');
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileSubtitle.textContent = popupInputInfo.value;
    closePopup();                                      
}

popup.addEventListener('submit', handleFormSubmit); 
profileButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);





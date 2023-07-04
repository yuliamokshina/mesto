

const group = document.querySelector('.group');


const cardTemplate = document.querySelector('#template-element');



const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileButtonEdit = document.querySelector('.profile__button-edit');

const popupProfile = document.querySelector('.popup__profile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupInputName = popupProfile.querySelector('.popup__input_data_name');
const popupInputInfo = popupProfile.querySelector('.popup__input_info_name');
const popupProfileBC = popupProfile.querySelector('.popup__button-close');


const profileButtonAdd = document.querySelector('.profile__button')

const popupAdd = document.querySelector('.popup__add');
const popupInputDataNameAdd = popupAdd.querySelector('.popup__input_data_name-add');
const popupInputUrlNameAdd = popupAdd.querySelector('.popup__input_url-add');
const popupAddBC = popupAdd.querySelector('.popup__button-close');


const popupImage = document.querySelector('.popup__image');
const popupImagePhoto = popupImage.querySelector('.popup__image_photo');
const popupImageTitle = popupImage.querySelector('.popup__image_title');
const closeImg = popupImage.querySelector('.popup__button-close');
const popupImageBC = popupImage.querySelector('.popup__button-close');


initialCards.forEach(value => {
  renderCard(createCard(value));
})


function openPopup(popup) {
  popup.classList.add('popup_opened');

}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}



function openProfilPopap() {
  popupInputInfo.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;
  openPopup(popupProfile);
}

function closeProfilPopap() {
  closePopup(popupProfile);
}


function openAddPopup() {
  openPopup(popupAdd);
}

function closeAddPopup() {
  closePopup(popupAdd);
}


function openImagePopup(cardData) {
  popupImagePhoto.src = cardData.link;
  popupImagePhoto.alt = cardData.name;
  popupImageTitle.textContent = cardData.name;
  openPopup(popupImage);
}

function closeImagePopup() {
  closePopup(popupImage);
}


function createCard(cardData) {

  const card = cardTemplate.content.cloneNode(true);


  const groupImage = card.querySelector('.group__image');
  const groupTitle = card.querySelector('.group__title');
  const groupButton = card.querySelector('.group__button');
  const groupButtonDelete = card.querySelector('.group__button-delete');

  groupImage.setAttribute('src', cardData.link)
  groupImage.setAttribute('alt', cardData.name)


  groupImage.addEventListener('click', () => {
    openImagePopup(cardData);
  })

  groupTitle.textContent = cardData.name;

  groupButton.addEventListener('click', evt => {

    evt.target.classList.toggle('group__button_active');
  });

  groupButtonDelete.addEventListener('click', () => {

    groupButtonDelete.closest('.group__element').remove();
  });
  return card;
}


function renderCard(card) {
  return group.prepend(card);
}


profileButtonEdit.addEventListener('click', openProfilPopap);


popupProfileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputInfo.value;
  closeProfilPopap();
});



profileButtonAdd.addEventListener('click', openAddPopup);



popupAdd.addEventListener('submit', evt => {
  evt.preventDefault();
  const name = popupInputDataNameAdd.value;
  const link = popupInputUrlNameAdd.value;
  renderCard(createCard({ name, link }));
  popupInputDataNameAdd.value = "";
  popupInputUrlNameAdd.value = "";
  closeAddPopup();
});

document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(buttonsPopup));
});























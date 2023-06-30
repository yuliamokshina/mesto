const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup-add');
const popupImage = document.querySelector('.popup-image');
const closeImg = popupImage.querySelector('.popup-image__button-close');
const popupInputName = popup.querySelector('.popup__input_data_name');
const popupInputInfo = popup.querySelector('.popup__input_info_name');
const popupInputDataNameAdd = popupAdd.querySelector('.popup-add__input_data_name');
const popupInputUrlNameAdd = popupAdd.querySelector('.popup-add__input_url');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(value => {
  addCard(value.name, value.link);
})

//первый попап открытие и закрытие

function openPopup() {
  popup.classList.add('popup_opened');
  popupInputInfo.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

//второй попап закрытие и открытие
function closePopupAdd() {
  popupAdd.classList.remove('popup-add_opened');
}

function openAddPopup() {
  popupAdd.classList.add('popup-add_opened');
  popupInputDataNameAdd.value = "Название";
  popupInputUrlNameAdd.value = "Ссылка на картинку";
}

//третий попап закрытие и открытие

function openPopupImage() {
  //popup.classList.add('popup-image_opened');
  popupInputInfo.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;
}

function closePopupImage() {
  popup.classList.remove('popup-image_opened');
}

function openFullImage(name, link) {
  //вот эта строчка (снизу) разварачивает картинку 
  popupImage.classList.add('popup-image_opened');
  popupImage.querySelector('.popup-image__photo').src = link;
  popupImage.querySelector('.popup-image__title').textContent = name;
}

function addCard(name, link) {
  const cardTemplate = document.querySelector('#template-element').content;
  const card = cardTemplate.querySelector('.group__element').cloneNode(true);
  const groupImage = card.querySelector('.group__image');
  groupImage.setAttribute('src', link)
  groupImage.setAttribute('alt', name)
  //тут нажатие на картинку
  //нажимаем
  groupImage.addEventListener('click', (evt) => {
    openFullImage(name, link);
  })

  closeImg.addEventListener('click', () => {
    popupImage.classList.remove('popup-image_opened');
  });

  card.querySelector('.group__title').textContent = name;
  card.querySelector('.group__button').addEventListener('click', evt => {
    evt.target.classList.toggle('group__button_active');
  });
  card.querySelector('.group__button-delete').addEventListener('click', () => {
    card.remove();
  });
  document.querySelector('.group').append(card);
}

popup.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputInfo.value;
  closePopup();
});

popupAdd.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(popupInputDataNameAdd.value, popupInputUrlNameAdd.value);
  closePopupAdd();
});


popupImage.addEventListener('submit', evt => {
  evt.preventDefault();
  addCard(popupInputDataNameAdd.value, popupInputUrlNameImage.value);
  closePopupImage();
});

document.querySelector('.profile__button-edit').addEventListener('click', openPopup);
popup.querySelector('.popup__button-close').addEventListener('click', closePopup);
document.querySelector('.profile__button').addEventListener('click', openAddPopup);
popupAdd.querySelector('.popup-add__button-close').addEventListener('click', closePopupAdd);
popupImage.querySelector('.popup-image__button-close').addEventListener('click', closePopupImage)




















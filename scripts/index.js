
//Переменная группы (контейнер с карточками)

const group = document.querySelector('.group');

//Переменные шаблона

const cardTemplate = document.querySelector('#template-element');


//Переменные для 1 попапа

//до открытия
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileButtonEdit = document.querySelector('.profile__button-edit');
//после открытия
const popupProfile = document.querySelector('.popup_type_profile');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupInputName = popupProfile.querySelector('.popup__input_data_name');
const popupInputInfo = popupProfile.querySelector('.popup__input_info_name');
const popupProfileBC = popupProfile.querySelector('.popup__button-close');


//Переменные для 2 попапа

//до открытия
const profileButtonAdd = document.querySelector('.profile__button')
//после открытия
const popupAdd = document.querySelector('.popup_type_add');
const popupInputDataNameAdd = popupAdd.querySelector('.popup__input_data_name-add');
const popupInputUrlNameAdd = popupAdd.querySelector('.popup__input_url-add');
const popupAddBC = popupAdd.querySelector('.popup__button-close');

//Переменные для 3 попапа
const popupImage = document.querySelector('.popup_type_image');
const popupImagePhoto = popupImage.querySelector('.popup__image-photo');
const popupImageTitle = popupImage.querySelector('.popup__image-title');
const closeImg = popupImage.querySelector('.popup__button-close');
const popupImageBC = popupImage.querySelector('.popup__button-close');
let target;
//--------------------------------------------------------------------------------------------------------

//Цикл для авто добавления карточек из массива

initialCards.forEach(value => {
  renderCard(createCard(value));
})

// универсальные функции закрытия и открытия попапов

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

// 1 попап открытие и закрытие

function openProfilPopup() {
  popupInputInfo.value = profileSubtitle.textContent;
  popupInputName.value = profileTitle.textContent;
  openPopup(popupProfile);
}

function closeProfilPopup() {
  closePopup(popupProfile);
}

// 2 попап закрытие и открытие

function openAddPopup() {
  openPopup(popupAdd);
}

function closeAddPopup() {
  closePopup(popupAdd);
}

// 3 попап закрытие и открытие

// В аргумент передаем теперь (назвали его cardData) объект состоящий из двух полей (link и name) 
function openImagePopup(cardData) {
  popupImagePhoto.src = cardData.link;
  popupImagePhoto.alt = cardData.name;
  popupImageTitle.textContent = cardData.name;
  openPopup(popupImage);
}

function closeImagePopup() {
  closePopup(popupImage);
}

// Создание карточки
// В аргумент передаем теперь (назвали его cardData) объект состоящий из двух полей (link и name) 
function createCard(cardData) {
  //Клонируем шаблон темплейта и записываем его в card
  const card = cardTemplate.content.cloneNode(true);

  //находим и записываем в переменные остальные элемента шаблона
  const groupImage = card.querySelector('.group__image');
  const groupTitle = card.querySelector('.group__title');
  const groupButton = card.querySelector('.group__button');
  const groupButtonDelete = card.querySelector('.group__button-delete');
  //устанавливаем атрибуты для картинки
  groupImage.setAttribute('src', cardData.link)
  groupImage.setAttribute('alt', cardData.name)

  //слушатель открытия картинки ставим на саму картинку
  groupImage.addEventListener('click', () => {
    openImagePopup(cardData);
  })

   
  // устанавливаем название
  groupTitle.textContent = cardData.name;
  // слушатель на лайк
  groupButton.addEventListener('click', evt => {
    // evt - переменная абстрактного события события
    // target - конкрутная цель , тут это кнопка лайка (groupButton)
    // toggle - значит что лайк будет переключаться в оба состояния (активен и нет) 
    evt.target.classList.toggle('group__button_active');
  });
  // слушатель на корзинку удалить
  groupButtonDelete.addEventListener('click', () => {
    /*groupButtonDelete.closest('.group__element') - значит ,
    что по кнопке удалить мы находим родителья (карточку целиком), т.е переходим на уровень повыше*/
    //remove - удаляем карточку целиком
    groupButtonDelete.closest('.group__element').remove();
  });
  return card;
}

// Добавление карточки в контейнер
/* Поменяли append на prepend,
 чтобы добавлять карточки в начало контейнера, а не в конец*/
function renderCard(card) {
  return group.prepend(card);
}

//----------------------------------------------------------------------------
// устанавливаем слушателей

// слушатель для кнопки открыть 1 попапа
profileButtonEdit.addEventListener('click', openProfilPopup);



// Слушатель для кнопки сохранить 1 попапа
popupProfileForm.addEventListener('submit', evt => {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputInfo.value;
  closeProfilPopup();
});


// слушатель для кнопки открыть 2 попапа
profileButtonAdd.addEventListener('click', openAddPopup);





//Слушатель для кнопки сохранить 2 попапа
popupAdd.addEventListener('submit', evt => {
  evt.preventDefault();
  const name = popupInputDataNameAdd.value;
  const link = popupInputUrlNameAdd.value;
  renderCard(createCard({ name, link }));
  popupInputDataNameAdd.value = "";
  popupInputUrlNameAdd.value = "";
  closeAddPopup();
});

//устанавливаем слушателя на закрытие всех попапов сразу
document.querySelectorAll('.popup__close').forEach(button => {
  const buttonsPopup = button.closest('.popup'); // нашли родителя с нужным классом
  button.addEventListener('click', () => closePopup(buttonsPopup)); // закрыли попап
  document.addEventListener('keydown', (evt) => {
    if (evt.key === "Escape") {
      closePopup(buttonsPopup);
    }
  });
});



//открытие попапа с профилем кликом по оверлею
const popupOverlayProfile = document.querySelectorAll(".popup_type_profile");


popupOverlayProfile[0].onclick = function (event) {
  target = event.target;
  if (target == popupOverlayProfile[0]) {
    closePopup(target);
  };
};

//открытие попапа с добавлением карточки кликом по оверлею
const popupOverlayAdd = document.querySelectorAll(".popup_type_add");


popupOverlayAdd[0].onclick = function (event) {
  target = event.target;
  if (event.target == popupOverlayAdd[0]) {
    closePopup(target);
  };
};

//открытие попапа с картинкой кликом по оверлею
const popupOverlayImage = document.querySelectorAll(".popup_type_image");


popupOverlayImage[0].onclick = function (event) {
  target = event.target;
  if (event.target == popupOverlayImage[0]) {
    closePopup(target);
  };
};



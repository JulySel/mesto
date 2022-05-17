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

const elementTemplate = document.getElementById('template-element').content;
const elements = document.querySelector('.elements');

const handleLikeClick = (evt) => {
  evt.target.classList.toggle('element__like_active');
}

const handleDeleteClick = (evt) => {
  evt.target.closest('.element').remove();
}

function renderCards(){
  initialCards.forEach(item => {  
    renderNewCard(item);
  })
}
   
renderCards();

function renderNewCard({name, link}, single = false){
  const element = elementTemplate.cloneNode(true);
  const photo = element.querySelector('.element__photo');
  const title = element.querySelector('.element__title');
  const likeButton = element.querySelector('.element__like');
  const deleteButton = element.querySelector('.element__delete');
  likeButton.addEventListener('click', handleLikeClick);
  deleteButton.addEventListener('click', handleDeleteClick);
  photo.addEventListener('click', () => {openPopupGallery(link, name)})
  photo.src = link;
  photo.alt = name;
  title.textContent = name;  
  if (single) {
    elements.prepend(element);
  } else {
    elements.append(element);
  }
}

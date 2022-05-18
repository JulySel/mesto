const btnEditProfile = document.querySelector('.profile-info__edit-button');
const popupProfile = document.querySelector('#popup-profile-edit');
const formProfile = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input_name');
const jobInput = popupProfile.querySelector('.popup__input_job');
const btnClosePopup = popupProfile.querySelector('.popup__button-close');
const popupOverflow = popupProfile.querySelector('.popup__overflow');
const userName = document.querySelector('.profile-info__title');
const userJob = document.querySelector('.profile-info__subtitle');

const btnNewLocation = document.querySelector('.profile__add-button');
const popupNewLocation = document.querySelector('#popup-add-new-location');
const formNewLocation = popupNewLocation.querySelector('.popup__form');
const placeNameInput = popupNewLocation.querySelector('.popup__input_place-name');
const linkInput = popupNewLocation.querySelector('.popup__input_link');
const btnCloseNewLocation = popupNewLocation.querySelector('.popup__button-close');
const overflowNewLocation = popupNewLocation.querySelector('.popup__overflow');

const popupGallery = document.querySelector('#popup-gallery');
const imageGallery = popupGallery.querySelector('.popup__gallery-image');
const btnClosePopupGallery = popupGallery.querySelector('.popup__button-close');
const captionGallery = popupGallery.querySelector('.popup__caption');
function setValuesForInputsProfile() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}
function openPopup(el) {
    el.classList.add('popup_opened');
}
function closePopup(el) {
    el.classList.remove('popup_opened');    
}
function handleSubmitFormProfile(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup(popupProfile)
}
btnEditProfile.addEventListener('click', () => { setValuesForInputsProfile(); openPopup(popupProfile); });
btnClosePopup.addEventListener('click', () => { closePopup(popupProfile); });
popupOverflow.addEventListener('click', () => { closePopup(popupProfile) });
formProfile.addEventListener('submit',handleSubmitFormProfile);

function addNewElement(evt) {
    evt.preventDefault();
    const el = {
        name: placeNameInput.value,
        link: linkInput.value,
    }
    elements.prepend(createNewCard(el));
    closePopup(popupNewLocation);
}

btnNewLocation.addEventListener('click', () => { openPopup(popupNewLocation); });
btnCloseNewLocation.addEventListener('click', () => { closePopup(popupNewLocation); formNewLocation.reset(); });
formNewLocation.addEventListener('submit', addNewElement);

function setDataGallery(link, name) {
    imageGallery.src = link;
    imageGallery.alt = name;
    captionGallery.textContent = name;
}

btnClosePopupGallery.addEventListener('click', () => { closePopup(popupGallery); });

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
    elements.append(createNewCard(item));
  })
}
   
renderCards();

function createNewCard({name, link}) {
    const element = elementTemplate.cloneNode(true);
    const photo = element.querySelector('.element__photo');
    const title = element.querySelector('.element__title');
    const likeButton = element.querySelector('.element__like');
    const deleteButton = element.querySelector('.element__delete');
    likeButton.addEventListener('click', handleLikeClick);
    deleteButton.addEventListener('click', handleDeleteClick);
    photo.addEventListener('click', () => { setDataGallery(link, name), openPopup(popupGallery)})
    photo.src = link;
    photo.alt = name;
    title.textContent = name; 
    return element;
}
let btnEditProfile = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('#popup-profile-edit');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_name');
let jobInput = popup.querySelector('.popup__input_job');
let btnClosePopup = popup.querySelector('.popup__button-close');
let popupOverflow = popup.querySelector('.popup__overflow');
let userName = document.querySelector('.profile-info__title');
let userJob = document.querySelector('.profile-info__subtitle');

let btnNewLocation = document.querySelector('.profile__add-button');
let popupNewLocation = document.querySelector('#popup-add-new-location');
let formNewLocation = popupNewLocation.querySelector('.popup__form');
let placeNameInput = popupNewLocation.querySelector('.popup__input_place-name');
let linkInput = popupNewLocation.querySelector('.popup__input_link');
let btnCloseNewLocation = popupNewLocation.querySelector('.popup__button-close');
let overflowNewLocation = popupNewLocation.querySelector('.popup__overflow');

let popupGallery = document.querySelector('#popup-gallery');
let imageGallery = popupGallery.querySelector('.popup__gallery-image');
let btnClosePopupGallery = popupGallery.querySelector('.popup__button-close');
let captionGallery = popupGallery.querySelector('.popup__caption');

function openPopup() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
}
function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.reset();    

}
function formSubmitHandler(evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup()
}
btnEditProfile.addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);
popupOverflow.addEventListener('click', closePopup);
formElement.addEventListener('submit',formSubmitHandler);

function openPopupNewLocation() {
    popupNewLocation.classList.add('popup_opened');
}
function closePopupNewLocation() {
    popupNewLocation.classList.remove('popup_opened');
    formNewLocation.reset();
}
function addNewElement(evt) {
    evt.preventDefault();
    const el = {
        name: placeNameInput.value,
        link: linkInput.value,
    }

    initialCards.unshift(el);
    renderNewCard(el, true);
    closePopupNewLocation();
}

btnNewLocation.addEventListener('click', openPopupNewLocation);
btnCloseNewLocation.addEventListener('click', closePopupNewLocation);
formNewLocation.addEventListener('submit', addNewElement);

function openPopupGallery(link, name) {
    imageGallery.src = link;
    imageGallery.alt = name;
    captionGallery.textContent = name;
    popupGallery.classList.add('popup_opened');
}
function closePopupGallery() {
    popupGallery.classList.remove('popup_opened');
}

imageGallery.addEventListener('click', openPopupGallery);
btnClosePopupGallery.addEventListener('click', closePopupGallery);
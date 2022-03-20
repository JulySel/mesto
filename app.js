let btnEditProfile = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelectorAll('.popup__input')[0];
let jobInput = popup.querySelectorAll('.popup__input')[1];
let btnClosePopup = popup.querySelector('.popup__button-close');
let popupOverflow = popup.querySelector('.popup__overflow');
let userName = document.querySelector('.profile-info__title');
let userJob = document.querySelector('.profile-info__subtitle');
btnEditProfile.addEventListener('click', openPopup);
btnClosePopup.addEventListener('click', closePopup);
popupOverflow.addEventListener('click', closePopup);
formElement.addEventListener('submit',formSubmitHandler);
function openPopup() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
    popup.classList.add('popup_opened');
}
function closePopup() {
    popup.classList.remove('popup_opened');
    formElement.reset();    

}
function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup()
}





let btnEditProfile = document.querySelector('.profile-info__edit-button');
let popup = document.querySelector('.popup');
let openPopupClass = 'popup_opened';
let formElement = popup.querySelector('.popup__form');
let nameInput = formElement.name;
let jobInput = formElement.job;
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
    popup.classList.add(openPopupClass);
}
function closePopup() {
    popup.classList.remove(openPopupClass);
    formElement.reset();    

}
function formSubmitHandler (evt) {
    evt.preventDefault();
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;
    closePopup()
}





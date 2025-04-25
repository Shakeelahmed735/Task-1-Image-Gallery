function showImage(element) {
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  popup.style.display = 'flex';
  popupImg.src = element.src;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
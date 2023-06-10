const items = document.querySelectorAll('li');
const main = document.querySelector('.main');
const sections = document.querySelectorAll('.section');
const popupBtn = document.querySelector('.popup');
const popupContainer = document.querySelector('.popupContainer');
const closePopup = document.querySelector('.close-popup');
const add = document.querySelector('.add');
const nameInp = document.querySelector('.name_inp');
const nameBoxH1 = document.getElementById('name');

initHome();
items.forEach((item) => {
  // click listener
  item.addEventListener('click', () => {
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('active');
      sections[i].classList.remove('visible');
    }
    item.classList.add('active');
    // check what is active
    switch (item.id) {
      case 'home-link': {
        initHome();
        break;
      }
      case 'about-link': {
        initAbout();
        break;
      }
      case 'intro-link': {
        initIntro();
        break;
      }
    }
  });
});
function initHome() {
  const home = sections[0];
  home.classList.add('visible');

  // Popup window ***********************
  popupBtn.addEventListener('click', () => {
    popupContainer.classList.add('active');
  });
  closePopup.addEventListener('click', () => {
    popupContainer.classList.remove('active');
  });
  add.addEventListener('click', () => {
    nameBoxH1.textContent = nameInp.value;
    popupContainer.classList.remove('active');
  });
}

function initAbout() {
  const about = sections[1];
  about.classList.add('visible');
}
function initIntro() {
  const intro = sections[2];
  intro.classList.add('visible');
}

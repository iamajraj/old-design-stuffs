const allLinks = document.querySelectorAll('section div');
const main = document.querySelector('.main-content');

allLinks.forEach((section) => {
  section.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
      console.log(e.target.textContent);
      main.append(e.target.cloneNode(true));
    }
  });
});

const main = document.querySelector('main');
const btn = document.querySelector('button');
const h3 = document.querySelector('h3');

const newEl = document.createElement('p');
newEl.textContent = 'This is p';

main.before(newEl.cloneNode(true));
main.insertBefore(newEl, main.children[4]);

Array.from(document.images).forEach((img) => {
  img.setAttribute('loading', 'lazy');
});

console.log(document.body.scrollHeight);
let arr = [1, 2, 3, 4, 5];
let acb = arr.toString().replaceAll(',', ' ');
console.log(acb);


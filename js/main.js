let head_creation = document.createElement('header');
let body_search = document.querySelector('body');
body_search.prepend(head_creation); //Добавление header`a в начало body

let head_search = document.querySelector('header');

let h1_create = document.createElement('h1')
h1_create.textContent = 'Работа с JSON';
h1_create.setAttribute('style', 'text-align:center;');
head_search.appendChild(h1_create);
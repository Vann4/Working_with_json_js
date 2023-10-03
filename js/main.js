let header_create = document.createElement('header');
let body_search = document.querySelector('body');
body_search.prepend(header_create); //Добавление header`a в начало body
let head_search = document.querySelector('header');

let h1_create = document.createElement('h1');
h1_create.textContent = 'Работа с JSON';
h1_create.setAttribute('style', 'text-align:center;');
head_search.appendChild(h1_create); //Добавление h1 в конец

let main_create = document.createElement('main');
head_search.after(main_create); //Вставка узлов или строк после header`a.
let main_search = document.querySelector('main');

let ul_create = document.createElement('ul');
main_search.appendChild(ul_create);
let ul_search = document.querySelector('ul')

let users_json = '{"id":1, "users": [{"name": "Давид", "age": 20}, {"name": "Пётр", "age": 35}]}';
let parse_users_json = JSON.parse(users_json);
console.log(parse_users_json)
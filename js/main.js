let header_create = document.createElement('header');
let body_search = document.querySelector('body');
body_search.setAttribute('style', 'max-width:100vw;');
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
ul_create.setAttribute('style', 'margin:0px; border:1px solid;');
main_search.appendChild(ul_create);
let ul_search = document.querySelector('ul');

let users_json = '{"id":1, "users": [{"name": "Давид", "age": 20}, {"name": "Пётр", "age": 35}]}';
let parse_users_json = JSON.parse(users_json);

for (let i=0; i<parse_users_json.users.length; i++){
    let data_array = parse_users_json.users[i];
    let li_create = document.createElement('li');
    li_create.setAttribute('style', 'font-size: 30px; margin-bottom: 2%;');
    li_create.textContent = `Имя: ${data_array.name}, возраст: ${data_array.age}`;
    ul_search.appendChild(li_create);
    let first_li_search = document.querySelector('li');
    first_li_search.setAttribute('style', 'margin-top:2%;font-size: 30px; margin-bottom: 2%;');
};

let a = [{"a": 10, "b": true}, {"a": 20, "b": false}, {"a": 30, "b": true, "admin": true}];
let b = JSON.stringify(a);

console.log(b);
console.log(JSON.stringify(a, ['a', 'admin'], 2));

const result = JSON.stringify(a, (key, value) => {
    if (value == false) return undefined
    return value
})
console.log(result)
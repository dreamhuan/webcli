import {db} from './common/config'
const app = document.getElementById('app');
app.innerHTML = db;
const header = document.getElementById('header');
header.innerHTML = 'header';
const footer = document.getElementById('footer');
footer.innerHTML = 'footer';
console.log('aaaaa');
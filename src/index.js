import _ from 'lodash';
import './css/index.css';
import Icon from './images/headerdefault.jpg';
import Data from './data/data.json';
import click from './js/index.js';

function component(){
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = click;
    element.appendChild(btn);
    console.log(Data);

    return element;
}

document.body.appendChild(component());     
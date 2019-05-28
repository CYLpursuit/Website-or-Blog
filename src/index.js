import _ from 'lodash';
import './css/index.css';
import Icon from './images/headerdefault.jpg';
import Data from './data/data.json';

function component(){
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

document.body.appendChild(component());     
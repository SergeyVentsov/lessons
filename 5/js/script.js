let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item');
menu.replaceChild(menuItems[1], menuItems[2]);

//menuItems = document.querySelectorAll('.menu-item'); 

let li5 = document.createElement('li'),
    li2 = document.createElement('li');
li2.classList.add('menu-item');
li2.innerHTML = 'Второй пункт';
li5.classList.add('menu-item');
li5.innerHTML = 'Пятый пункт';

menu.insertBefore(li2, menuItems[1]);
menu.appendChild(li5);

document.body.style.background = '../img/apple_true.jpg';








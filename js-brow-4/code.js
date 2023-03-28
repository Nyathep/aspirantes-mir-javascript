const menu = [
    {
        name: 'Home',
        link: '/',
        items: []
    },
    {
        name: 'About',
        link: '/about',
        items: []
    },
    {
        name: 'Products',
        link: '/products',
        items: [
            {
                name: 'Product 1',
                link: '/products/1',
                items: []
            },
            {
                name: 'Product 2',
                link: '/products/2',
                items: [
                    {
                        name: 'Product 2.1',
                        link: '/products/2/1',
                        items: []
                    },
                ]
            },
        ]
    },
    {
        name: 'Services',
        link: '/services',
        items: [
            {
                name: 'Service 1',
                link: '/services/1',
                items: [
                    {
                        name: 'Service 1.1',
                        link: '/services/1/1',
                        items: []
                    },
                ]
            },
            {
                name: 'Service 2',
                link: '/services/2',
                items: [
                    {
                        name: 'Service 2.1',
                        link: '/services/2/1',
                        items: []
                    },
                    {
                        name: 'Service 2.2',
                        link: '/services/2/2',
                        items: []
                    },
                ]
            },
        ]
    },
];
let iterator = 0;
const nav = document.querySelector('#menu');
nav.innerHTML = createMenu(menu, false);

const list = document.querySelectorAll('.with-submenu');
const list2 = document.getElementsByClassName('with-nosub');


for (let a = 0; a < list.length; a++) {
    const liWithSub = document.querySelector('#li' + a);
    liWithSub.addEventListener('click', (event) => {
        liWithSub.classList.toggle('open');
        const ulwithsub = document.querySelector('#ul' + a);
        ulwithsub.classList.toggle('open');
        for(let child of ulwithsub.children){
            console.log(child);
            child.classList.toggle('open');
        }
    });
}

for (let a = 0; a < list2.length; a++) {
    const liWithNoSub = list2[a];
    liWithNoSub.addEventListener('click', (event) => {
        liWithNoSub.classList.toggle('activo');
    });
}

function createMenu(menuVar, subm, id) {
    if (!menuVar.length) {
        return;
    }

    let menuW = "";

    if (subm) {
        menuW = "<ul class='ul-submenu' id='" + id + "'>";
    } else {
        menuW = "<ul>";
    }

    for (let item in menuVar) {
        if (menuVar[item].items.length > 0) {
            let iditems = 'ul' + iterator;
            menuW += "<li class='with-submenu' id='li" + iterator + "'>" + menuVar[item].name + "</li>"
            iterator++;
            menuW += createMenu(menuVar[item].items, true, iditems);
        } else {
            menuW += "<li class='with-nosub'>" + menuVar[item].name + "</li>"
        }
    }
    menuW += "</ul>";
    return menuW;
}
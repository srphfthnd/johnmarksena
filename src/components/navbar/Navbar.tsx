import React, { useEffect } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './Navbar.scss'

function Navbar() {
    
    useEffect(() => {
        document.addEventListener('scroll', changeColorNavBar);
    })
    
    return ([
        <div className="nav">
            <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    ]);
}

const changeColorNavBar = () => {
    const wrapElement = document.body;
    const navBar = document.querySelector('.nav') as HTMLElement;
    const menuList = document.querySelector('.nav-menu') as HTMLElement;
    const options = menuList.children;
    const currentScrollHeight = wrapElement.getBoundingClientRect().bottom;
    const maxScrollHeight = wrapElement.scrollHeight - 100;

    if(currentScrollHeight < maxScrollHeight){
            navBar.classList.add('after-scroll');
            menuList.style.color = 'black';
            changeMenuOptionsColor(options, currentScrollHeight, maxScrollHeight);

    } else if(currentScrollHeight === maxScrollHeight){
        navBar.classList.remove('after-scroll');
        changeMenuOptionsColor(options, currentScrollHeight, maxScrollHeight);
    }
    
}

const changeMenuOptionsColor = (options: HTMLCollection, currentScrollHeight: number, maxScrollHeight: number) => {
    let aElem;
    let color;

    if(currentScrollHeight < maxScrollHeight){ color = '#515769'; }
    else { color = 'white'; }

    for(let option of options) {
        option = option as HTMLElement;
        aElem = option.querySelector('a');
        aElem != null && (aElem.style.color = color);
    }
}



export default Navbar;
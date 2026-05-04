'use strict'

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

const savedTheme = localStorage.getItem('portfolio-theme');

if(savedTheme){
    body.classList.remove('dark-theme', 'light-theme');
    body.classList.add(savedTheme);
}

function toggleTheme(){
    if(body.classList.contains('dark-theme')){
        body.classList.replace('dark-theme', 'light-theme');
        localStorage.setItem('portfolio-theme', 'light-theme');
    }else{
        body.classList.replace('light-theme', 'dark-theme');
        localStorage.setItem('portfolio-theme', 'dark-theme');
    }
}

themeToggle.addEventListener('click', toggleTheme);
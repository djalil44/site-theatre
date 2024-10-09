const nav = document.querySelector(".nav");

const fixNav = () => {
  if (window.scrollY > nav.offsetHeight + 150) nav.classList.add("active");
  else nav.classList.remove("active");
};

window.addEventListener("scroll", fixNav);

function O(i)
{
    return typeof i == 'object' ? i : document.getElementById(i)
}

function S(i)
{
return O(i).style
}

function C(i)
{
    return document.getElementByIdClassname(i)
}


const loader = document.querySelector('.loader');

window.addEventListener('load', () => {

    loader.classList.add('fondu-out');

})
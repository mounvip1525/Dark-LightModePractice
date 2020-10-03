const nav=document.getElementById("nav");
const image1=document.getElementById("image1");
const image2=document.getElementById("image2");
const image3=document.getElementById("image3");
const toggleSwitch=document.querySelector('input[type="checkbox"]');
const toggler=document.getElementById("toggler");
const textArea=document.getElementById("textarea");

function imageMode(mode){
image1.src=`photos/Booking-${mode}.svg`;
image2.src=`photos/LandingPage-${mode}.svg`;
image3.src=`photos/Photograph-${mode}.svg`;
}
function DarkLightModeToggler(isDark){
    nav.style.backgroundColor = isDark? 'rgb(0 0 0 / 50%)':'rgb(255 255 255 / 50%)';
    textarea.style.backgroundColor = isDark? 'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggler.children[0].textContent = isDark? 'Dark Mode':'Light Mode';
    isDark? toggler.children[1].classList.replace('fa-sun', 'fa-moon'): toggler.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark? imageMode('dark'):imageMode('light');
}
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        DarkLightModeToggler(true);
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        DarkLightModeToggler(false);
    }
}
toggleSwitch.addEventListener('change',switchTheme);
const currentTheme=localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme==="dark")
    {
        toggleSwitch.checked=true;
        DarkLightModeToggler(true);
    }
}

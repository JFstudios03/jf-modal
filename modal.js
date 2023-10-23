const popup = document.getElementById("popup");
const blur = document.getElementById("blur");
const container = document.querySelector('.container');


function openPopup(e){
    popup.classList.add("open-popup");
    blur.classList.add('active');
    container.classList.add('active')
}
function closePopup(e){
    popup.classList.remove("open-popup");
    blur.classList.remove('active');
    container.classList.remove('active')
}
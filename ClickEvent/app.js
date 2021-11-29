const closedFace = document.querySelector(".closed")
const openFace = document.querySelector(".open")

//add event listener for closedFace
closedFace.addEventListener('click', () => {
    if(openFace.classList.contains('open')){
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

//add event listener for openFace
openFace.addEventListener('click', () => {
    if(closedFace.classList.contains('closed')){
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});
let modal=document.querySelector(".modal-container");
let overlay=document.querySelector(".overlay");

//modal open function

let openModal= function(){
    console.log("open modal");
    modal.classList.add("active");
    overlay.classList.add("overlayactive")
}

let closeModal= function(){
    console.log("close modal");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
}
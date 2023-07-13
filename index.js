let modal=document.querySelector(".modal-container");
let overlay=document.querySelector(".overlay");

//modal open function

let openModal= function(){
    console.log("open modal");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
    followmodal.classList.remove("activeFollow");
}

let closeModal= function(){
    console.log("close modal");
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
    followmodal.classList.remove("activeFollow");
}

// follow me

let followmodal=document.querySelector(".modal-follow");
let openFollow=function(){
    followmodal.classList.add("activeFollow");
    overlay.classList.add("overlayactive");
}
let closeFollow=function(){
    followmodal.classList.remove("activeFollow");
    overlay.classList.remove("overlayactive");
}





const myInp=document.querySelector(".copy-link-input");
const btnCopy = document.querySelector(".copy-link-button");

// btnCopy.onclick=function(){

//     myInp.select();
 
//     document.execCommand("Copy");
// }
myInp.addEventListener("focus",function(){
    myInp.select();
})
btnCopy.addEventListener("click",function(){
    const text= myInp.value;
    navigator.clipboard.writeText(text);
    myInp.value = "Copied!";
    setTimeout(() => myInp.value = text,1000);
})
const fb=document.querySelector("#facebook")
const tw=document.querySelector("#twidtter")
const ig=document.querySelector("#instagram")
const whts=document.querySelector("#whatsapp")
const li=document.querySelector("#linkedin")
const dc=document.querySelector("#discord")
const rd=document.querySelector("#reddit")
const msg=document.querySelector("#messenger")

function init(){
    let postUrl =encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
    // tw.href = `https://twitter.com/share?url=${postUrl}&text=${postTitle}&hashtags=javascript,programming`;
    fb.setAttribute("href",
    `https://www.facebook.com/sharer.php?u=${postUrl}`);
    
    whts.setAttribute("href",
    `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
    rd.setAttribute("href",
    `https://reddit.com/submit?url=${postUrl}&title=${postTitle}`);
    li.setAttribute("href",
    `https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}`);
}
init();

// search bar here 
let searchIcon = document.querySelector("#search-icon");
let searchSection = document.querySelector(".search-section");

searchIcon.addEventListener("click", () => {
    searchSection.classList.toggle("active");
});


// new product changes src 
const newLeftImage = document.querySelectorAll("#new-left-img");
const rightBigImg = document.querySelector(".new-img-right img");

for (let x = 0; x < newLeftImage.length; x++) {
    let elementSrc = newLeftImage[x].src;
    newLeftImage[x].addEventListener("click", () => {
        rightBigImg.src = elementSrc;
    });
}

// another new products section 1
const newLeftImage2 = document.querySelectorAll("#new-left-img2");
const rightBigImg2 = document.querySelector(".new-img-right2 img");

for (let x = 0; x < newLeftImage2.length; x++) {
    let elementSrc = newLeftImage2[x].src;
    newLeftImage2[x].addEventListener("click", () => {
        rightBigImg2.src = elementSrc;
    });
}


// another new products section 2
const newLeftImage3 = document.querySelectorAll("#new-left-img3");
const rightBigImg3 = document.querySelector(".new-img-right3 img");

for (let x = 0; x < newLeftImage2.length; x++) {
    let elementSrc = newLeftImage3[x].src;
    newLeftImage3[x].addEventListener("click", () => {
        rightBigImg3.src = elementSrc;
    });
}


// menu bar show here 

const menuBar = document.querySelector(".menu-bar");
const navList = document.querySelector(".navlist");

menuBar.addEventListener("click", () => {
    navList.classList.toggle("active");
});

// menubar close here 
const closeMenu = document.querySelector("#close-menu");
const navLiA = document.querySelectorAll(".navlist li a");
closeMenu.addEventListener("click", () => {
    navList.classList.remove("active");
});

for(let i = 0; i < navLiA.length; i++) {
    navLiA[i].addEventListener("click", () => {
        navList.classList.remove("active");
    });
}
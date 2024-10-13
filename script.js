document.addEventListener('DOMContentLoaded',
    function(event) {
        setTimeout(function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    });

let images = ["assets/images/Canggu\ Beach\ bg.png", "assets/images/GWK\ Statue\ bg.png", "assets/images/Uluwatu\ Tample\ bg.png", "assets/images/Mengening\ Beach\ bg.png"];
let div = document.querySelector(".div-main");
let i = 0;
let stop_loop = false;

function preloadImages(imageArray) {
    imageArray.forEach((src) => {
        let img = new Image();
        img.src = src;
    });
}

preloadImages(images);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function loop_bg() {
    if(images.length != 0) {
        while(!stop_loop) {
            for (i; i <= images.length - 1; i++) {
                // console.log(i);
                if(stop_loop) {
                    return;
                }
                div.style.backgroundImage = `url('${images[i]}')`;
                div.style.transitionDuration = '2s';
    
                if(i == images.length - 1) {
                    i = -1;
                }
                await delay(7000);
            }
        }
    }
}

loop_bg();












let button_main = document.querySelector(".btn-main");
let sub_div_main = document.querySelector(".sub-div-main");
let div_choose_destination = document.querySelector(".div-choose-destination");
let destination1 = document.querySelector(".img-destination1");
let destination2 = document.querySelector(".img-destination2");
let destination3 = document.querySelector(".img-destination3");
let destination4 = document.querySelector(".img-destination4");
let isTransitioning = false;
let header = document.querySelector(".div-header");
let destination_title = document.querySelector(".destination-title");
let map_bali = document.querySelector(".img-map-bali");
let div_main_about = document.querySelector(".div-main-about");

window.onload = function() {
    sub_div_main.style.marginTop = "27vh";
    div_choose_destination.style.display = "none";
    // console.log(stop_loop);
    header.style.display = "none";
    div.style.position = "fixed";
    destination_title.style.display = "none";
    div_main_about.style.display = "none"
}

button_main.addEventListener("click", function() {
    sub_div_main.style.display = "none";
    div_choose_destination.style.display = "block";
    div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    stop_loop = true;
    // console.log(stop_loop);
});

function changBackground(imageUrl) {
    if(!isTransitioning) {
        isTransitioning = true;
        div.style.backgroundImage = `url('${imageUrl}')`;

        setTimeout(() => {
            isTransitioning = false;
        }, 2000)
    }
}

destination1.addEventListener("mouseenter", function() {
    changBackground(images[0]);
});

destination1.addEventListener("mouseleave", function() {
});

destination2.addEventListener("mouseenter", function() {
    changBackground(images[1]);
});

destination3.addEventListener("mouseenter", function() {
    changBackground(images[2]);
});

destination4.addEventListener("mouseenter", function() {
    changBackground(images[3]);
});










map_bali.addEventListener("click", function() {
    header.style.display = "none";
    div.style.position = "fixed"
    destination_title.style.display = "none";
    div_choose_destination.style.display = "block";
    div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
});

destination1.addEventListener("click", function() {
    div_choose_destination.style.display = "none";
    div.style.backgroundImage = `url('${images[0]}')`
    div.style.transitionDuration = '2s'
    header.style.display = "block";
    div.style.position = "relative";
    destination_title.style.display = "block";
    destination_title.style.animation = "opacity 2.5s ease-in-out";
    div.style.alignContent = "center";
    div_main_about.style.display = "block";
});














window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let div_map_bali_description = document.querySelector(".div-map-bali-description");

    if(scrollY >= 150) {
        // div_map_bali_description.style.display = "none";
        div_map_bali_description.style.opacity = '0';
        div_map_bali_description.style.transitionDuration = '1s';
    }
    else if (scrollY <= 150) {
        div_map_bali_description.style.opacity = '1';
        div_map_bali_description.style.transitionDuration = '1s';
    }
});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let navbar = document.querySelector(".navbar");

    if (scrollY >= (0.7 * windowHeight)) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        navbar.transitionDuration = '2s';
    }
    else if (scrollY <= (0.7 * windowHeight)) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navbar.transitionDuration = '2s';
    }
});

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let div_main_about = document.querySelector(".div-about");
    let img_rectangle1 = document.querySelector(".rectangle1");
    let img_square1 = document.querySelector(".square1");
    let img_rectangle2 = document.querySelector(".rectangle2");
    let img_square2 = document.querySelector(".square2");
    let title_about = document.querySelector(".title-about");
    let section_declaration1 = document.querySelector(".section-declaration1");
    let section_declaration2 = document.querySelector(".section-declaration2");
    let div_parent_about = document.querySelector(".div-main-about");

    // console.log(scrollY);
    if(scrollY >= (0.9 * windowHeight + 50)) {
        div_main_about.style.position = "fixed";
        div_main_about.style.transitionDuration = '2s';
    }

    else if(scrollY <= (0.9 * windowHeight + 50)) {
        div_main_about.style.position = "static";
    }

    if(scrollY >= (1.6 * windowHeight + 50)) {
        img_rectangle1.style.height = '200px';
        img_rectangle2.style.height = '200px';
        img_square1.style.height = '300px';
        img_square2.style.height = '300px';
        title_about.innerHTML = "What Make Us Popular?";
        section_declaration2.style.backgroundColor = "var(--blue-color)"
        section_declaration2.style.color = "white";
        section_declaration2.style.border = "none"
        section_declaration1.style.border = "1px solid black"
        section_declaration1.style.color = "black";
        section_declaration1.style.backgroundColor = "transparent";
        // img_rectangle1.style.top = 0


    }

    else if (scrollY <= (1.6 * windowHeight + 50)) {
        img_rectangle1.style.height = '300px';
        img_rectangle2.style.height = '300px';
        img_square1.style.height = '200px';
        img_square2.style.height = '200px';
        title_about.innerHTML = "About Canggu Beach";
        section_declaration1.style.backgroundColor = "var(--blue-color)"
        section_declaration1.style.color = "white";
        section_declaration1.style.border = "none"
        section_declaration2.style.border = "1px solid black"
        section_declaration2.style.color = "black";
        section_declaration2.style.backgroundColor = "transparent";
    }

    if(scrollY >= (2.2 * windowHeight + 70)) {
        div_main_about.style.position = "static";
        div_parent_about.style.alignContent = "end";
    }

    else if(scrollY <= (2.2 * windowHeight + 70)) {
        div_parent_about.style.alignContent = "start";
    }
});






















let div_main_hotels = document.querySelector(".div-sub-hotels");
let scrollY_div = div_main_about.getBoundingClientRect().bottom + window.scrollY;
let is_full_width = false;

// Ukuran awal gambar
const minWidth = 150;  // 20% dari lebar layar (vw)
const minHeight = 80; // 20% dari tinggi layar (vh)

// Ukuran maksimal gambar
const maxWidth = 100;   // Gambar bisa mengisi hingga 100% dari lebar layar
const maxHeight = 100;  // Gambar bisa mengisi hingga 100% dari tinggi layar

window.addEventListener("scroll", function() {
    let new_scrollY = window.scrollY - scrollY_div;

    console.log(new_scrollY);
    if(is_full_width == false) {
        if (new_scrollY > 0) {

                    // Skala lebar dan tinggi secara proporsional berdasarkan scroll
                    let newWidth = minWidth + (new_scrollY / 5);  // Tambahkan berdasarkan scroll (lebih cepat)
                    let newHeight = minHeight + (new_scrollY / 5);  // Tambahkan tinggi
            
                    // Batasi ukuran maksimal agar tidak lebih dari layar
                    if (newWidth > maxWidth) {
                        newWidth = maxWidth;  // Lebar maksimal 100vw
                    }
                    if (newHeight > maxHeight) {
                        newHeight = maxHeight;  // Tinggi maksimal 100vh
                    }
            
                        // Terapkan ukuran baru pada gambar menggunakan vw dan vh
                        div_main_hotels.style.width = newWidth + 'vw';
                        div_main_hotels.style.height = newHeight + 'vh';
                        console.log(newWidth);
                        console.log(newHeight);
                    if(newWidth == 100) {
                        is_full_width = true;
                        div_main_hotels.style.marginTop = '10vh'
                        // div_main_hotels.style.filter = 'blur(3px)'
                    }
        }
        else {
            // Jika belum melewati gambar pertama, tetap pada ukuran awal
            div_main_hotels.style.width = minWidth + 'px';
            div_main_hotels.style.height = minHeight + 'px';
        }
    }
});
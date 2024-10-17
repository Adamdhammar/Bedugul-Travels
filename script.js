let images = ["assets/images/Canggu\ Beach\ bg.png", "assets/images/GWK\ Statue\ bg.png", "assets/images/Uluwatu\ Tample\ bg.png", "assets/images/Mengening\ Beach\ bg.png"];
let div = document.querySelector(".div-main");
let i = 0;
let stop_loop = false;
let picked_destination_canggu = false;
let picked_destination_gwk = false;
let picked_destination_uluwatu = false;
let picked_destination_mengening = false;

// localStorage.removeItem()

// function preloadImages(imageArray) {
//     imageArray.forEach((src) => {
//         let img = new Image();
//         img.src = src;
//     });
// }

// preloadImages(images);

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function loop_bg() {
//     if(images.length != 0) {
//         while(!stop_loop) {
//             for (i; i <= images.length - 1; i++) {
//                 // console.log(i);
//                 if(stop_loop) {
//                     return;
//                 }
//                 div.style.backgroundImage = `url('${images[i]}')`;
//                 div.style.transitionDuration = '2s';
    
//                 if(i == images.length - 1) {
//                     i = -1;
//                 }
//                 await delay(7000);
//             }
//         }
//     }
// }

// loop_bg();















// Periksa apakah website pertama kali dibuka
if (!sessionStorage.getItem('firstVisit')) {
    // Website pertama kali dibuka
    sessionStorage.setItem('firstVisit', 'true');  // Set agar tahu website sudah dibuka
    console.log("Website pertama kali dibuka");
    // console.log(picked_destination_canggu);
    // console.log(picked_destination_gwk);
    // console.log(picked_destination_uluwatu);
    // console.log(picked_destination_mengening);

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 100);  // Penundaan kecil untuk memastikan rendering halaman
    });

    // if (picked_destination_canggu == false && picked_destination_gwk == false && picked_destination_uluwatu == false && picked_destination_mengening == false) {

    // // }
    // if(picked_destination_canggu == true) {
    //     localStorage.setItem('picked_destination_canggu', 'true');
    //     localStorage.setItem('picked_destination_gwk', 'false');
    //     localStorage.setItem('picked_destination_uluwatu', 'false');
    //     localStorage.setItem('picked_destination_mengening', 'false');
    // }
    // else if(picked_destination_gwk == true) {
    //     localStorage.setItem('picked_destination_canggu', 'false');
    //     localStorage.setItem('picked_destination_gwk', 'true');
    //     localStorage.setItem('picked_destination_uluwatu', 'false');
    //     localStorage.setItem('picked_destination_mengening', 'false');
    // }

    // else if(picked_destination_uluwatu == true) {
    //     localStorage.setItem('picked_destination_canggu', 'false');
    //     localStorage.setItem('picked_destination_gwk', 'false');
    //     localStorage.setItem('picked_destination_uluwatu', 'true');
    //     localStorage.setItem('picked_destination_mengening', 'false');
    // }

    // else if(picked_destination_mengening == true) {
    //     localStorage.setItem('picked_destination_canggu', 'false');
    //     localStorage.setItem('picked_destination_gwk', 'false');
    //     localStorage.setItem('picked_destination_uluwatu', 'false');
    //     localStorage.setItem('picked_destination_mengening', 'true');
    // }

    localStorage.setItem('picked_destination_canggu', 'false');
    localStorage.setItem('picked_destination_gwk', 'false');
    localStorage.setItem('picked_destination_uluwatu', 'false');
    localStorage.setItem('picked_destination_mengening', 'false');
    FirstViewWeb();



} else {
    // Website di-refresh atau reload
    console.log("Website di-refresh");
    console.log(localStorage.getItem('picked_destination_canggu'));
    console.log(localStorage.getItem('picked_destination_gwk'));
    console.log(localStorage.getItem('picked_destination_uluwatu'));
    console.log(localStorage.getItem('picked_destination_mengening'));
    // console.log(localStorage.getItem('picked_destination_canggu'));
    // console.log(picked_destination_canggu);
    // console.log(picked_destination_gwk);
    // console.log(picked_destination_uluwatu);
    // console.log(picked_destination_mengening);

    window.history.scrollRestoration = 'manual';  // Mencegah restore posisi scroll
    window.addEventListener('load', function () {
        window.scrollTo(0, 0);  // Scroll ke atas langsung saat di-refresh
    });

    // if(localStorage.getItem('picked_destination_canggu', 'true') === true) {
    //     CangguBeach();
    // }
    // if(localStorage.getItem('picked_destination_canggu') === 'false' || localStorage.getItem('picked_destination_gwk') === 'false' || localStorage.getItem('picked_destination_uluwatu') === 'false' || localStorage.getItem('picked_destination_mengening') === 'false') {
    //     FirstViewWeb();
    // }

    // if (!localStorage.getItem('picked_destination_canggu') && !localStorage.getItem('picked_destination_gwk') && !localStorage.getItem('picked_destination_uluwatu') && !localStorage.getItem('picked_destination_mengening')) {
    //     FirstViewWeb();
    // }
    if (localStorage.getItem('picked_destination_canggu') === 'false') {
        // console.log("ga terjadi");
        FirstViewWeb();
    }
    else if(localStorage.getItem('picked_destination_canggu') === 'true') {
        // console.log("terjadi")
        CangguBeach();
    }



    // let button_main = document.querySelector(".btn-main");
    // let sub_div_main = document.querySelector(".sub-div-main");
    // let div_choose_destination = document.querySelector(".div-choose-destination");
    // let destination1 = document.querySelector(".img-destination1");
    // let destination2 = document.querySelector(".img-destination2");
    // let destination3 = document.querySelector(".img-destination3");
    // let destination4 = document.querySelector(".img-destination4");
    // let isTransitioning = false;
    // let header = document.querySelector(".div-header");
    // let destination_title = document.querySelector(".destination-title");
    // let map_bali = document.querySelector(".img-map-bali");
    // let div_main_about = document.querySelector(".div-main-about");
    // let div_hotels = document.querySelector(".div-main-hotels");
    // let div_hotels_text = document.querySelector(".div-hotels-text");
    // let div_choose_hotels = document.querySelector(".div-hotels");
    // let div_see_more_hotels = document.querySelector(".div-see-more");
    // // let div_main = document.querySelector(".div-main");

    // window.onload = function() {
    //     // sub_div_main.style.marginTop = "27vh";
    //     div_choose_destination.style.display = "none";
    //     // div_main.style.display = "none";
    //     // console.log(stop_loop);
    //     // header.style.display = "none";
    //     // div.style.position = "fixed";
    //     // destination_title.style.display = "none";
    //     // div_main_about.style.display = "none";
    //     // div_hotels.style.display = "none";
    //     // div_hotels_text.style.opacity = 0;
    //     // div_choose_hotels.style.opacity = 0;
    //     // div_see_more_hotels.style.opacity = 0;
    //     sub_div_main.style.display = "none";
    //     div_choose_destination.style.display = "none";
    //     div.style.backgroundImage = `url('${images[0]}')`
    //     div.style.transitionDuration = '2s'
    //     header.style.display = "block";
    //     div.style.position = "relative";
    //     destination_title.style.display = "block";
    //     destination_title.style.animation = "opacity 2.5s ease-in-out";
    //     div.style.alignContent = "center";
    //     div_main_about.style.display = "block";
    //     div_hotels.style.display = "block";
    // }


    // button_main.addEventListener("click", function() {
    //     sub_div_main.style.display = "none";
    //     div_choose_destination.style.display = "block";
    //     div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    //     stop_loop = true;
    //     // console.log(stop_loop);
    // });

    // function changBackground(imageUrl) {
    //     if(!isTransitioning) {
    //         isTransitioning = true;
    //         div.style.backgroundImage = `url('${imageUrl}')`;

    //         setTimeout(() => {
    //             isTransitioning = false;
    //         }, 2000)
    //     }
    // }

    // destination1.addEventListener("mouseenter", function() {
    //     changBackground(images[0]);
    // });

    // destination1.addEventListener("mouseleave", function() {
    // });

    // destination2.addEventListener("mouseenter", function() {
    //     changBackground(images[1]);
    // });

    // destination3.addEventListener("mouseenter", function() {
    //     changBackground(images[2]);
    // });

    // destination4.addEventListener("mouseenter", function() {
    //     changBackground(images[3]);
    // });










    // map_bali.addEventListener("click", function() {
    //     header.style.display = "none";
    //     div.style.position = "fixed"
    //     destination_title.style.display = "none";
    //     div_choose_destination.style.display = "block";
    //     div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // });

    // destination1.addEventListener("click", function() {
    //     div_choose_destination.style.display = "none";
    //     div.style.backgroundImage = `url('${images[0]}')`
    //     div.style.transitionDuration = '2s'
    //     header.style.display = "block";
    //     div.style.position = "relative";
    //     destination_title.style.display = "block";
    //     destination_title.style.animation = "opacity 2.5s ease-in-out";
    //     div.style.alignContent = "center";
    //     div_main_about.style.display = "block";
    //     div_hotels.style.display = "block";
    // });















    // window.addEventListener("scroll", function() {
    //     let scrollY = window.scrollY;
    //     let div_map_bali_description = document.querySelector(".div-map-bali-description");

    //     if(scrollY >= 150) {
    //         // div_map_bali_description.style.display = "none";
    //         div_map_bali_description.style.opacity = '0';
    //         div_map_bali_description.style.transitionDuration = '1s';
    //     }
    //     else if (scrollY <= 150) {
    //         div_map_bali_description.style.opacity = '1';
    //         div_map_bali_description.style.transitionDuration = '1s';
    //     }
    // });

    // window.addEventListener("scroll", function() {
    //     let scrollY = window.scrollY;
    //     let windowHeight = window.innerHeight;
    //     let navbar = document.querySelector(".navbar");

    //     if (scrollY >= (0.7 * windowHeight)) {
    //         navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    //         navbar.transitionDuration = '2s';
    //     }
    //     else if (scrollY <= (0.7 * windowHeight)) {
    //         navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
    //         navbar.transitionDuration = '2s';
    //     }
    // });

    // window.addEventListener("scroll", function() {
    //     let scrollY = window.scrollY;
    //     let windowHeight = window.innerHeight;
    //     let div_main_about = document.querySelector(".div-about");
    //     let img_rectangle1 = document.querySelector(".rectangle1");
    //     let img_square1 = document.querySelector(".square1");
    //     let img_rectangle2 = document.querySelector(".rectangle2");
    //     let img_square2 = document.querySelector(".square2");
    //     let title_about = document.querySelector(".title-about");
    //     let section_declaration1 = document.querySelector(".section-declaration1");
    //     let section_declaration2 = document.querySelector(".section-declaration2");
    //     let div_parent_about = document.querySelector(".div-main-about");

    //     // console.log(scrollY);
    //     if(scrollY >= (0.9 * windowHeight + 50)) {
    //         div_main_about.style.position = "fixed";
    //         div_main_about.style.transitionDuration = '2s';
    //     }

    //     else if(scrollY <= (0.9 * windowHeight + 50)) {
    //         div_main_about.style.position = "static";
    //     }

    //     if(scrollY >= (1.6 * windowHeight + 50)) {
    //         img_rectangle1.style.height = '200px';
    //         img_rectangle2.style.height = '200px';
    //         img_square1.style.height = '300px';
    //         img_square2.style.height = '300px';
    //         title_about.innerHTML = "What Make Us Popular?";
    //         section_declaration2.style.backgroundColor = "var(--blue-color)"
    //         section_declaration2.style.color = "white";
    //         section_declaration2.style.border = "none"
    //         section_declaration1.style.border = "1px solid black"
    //         section_declaration1.style.color = "black";
    //         section_declaration1.style.backgroundColor = "transparent";
    //         // img_rectangle1.style.top = 0


    //     }

    //     else if (scrollY <= (1.6 * windowHeight + 50)) {
    //         img_rectangle1.style.height = '300px';
    //         img_rectangle2.style.height = '300px';
    //         img_square1.style.height = '200px';
    //         img_square2.style.height = '200px';
    //         title_about.innerHTML = "About Canggu Beach";
    //         section_declaration1.style.backgroundColor = "var(--blue-color)"
    //         section_declaration1.style.color = "white";
    //         section_declaration1.style.border = "none"
    //         section_declaration2.style.border = "1px solid black"
    //         section_declaration2.style.color = "black";
    //         section_declaration2.style.backgroundColor = "transparent";
    //     }

    //     if(scrollY >= (2.2 * windowHeight + 70)) {
    //         div_main_about.style.position = "static";
    //         div_parent_about.style.alignContent = "end";
    //     }

    //     else if(scrollY <= (2.2 * windowHeight + 70)) {
    //         div_parent_about.style.alignContent = "start";
    //     }
    // });






















    // let div_main_hotels = document.querySelector(".div-sub-hotels");

    // let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    // let is_full_width = false;

    // // Ukuran awal gambar
    // const minWidth = 150;  // 20% dari lebar layar (vw)
    // const minHeight = 80; // 20% dari tinggi layar (vh)

    // // Ukuran maksimal gambar
    // const maxWidth = 100;   // Gambar bisa mengisi hingga 100% dari lebar layar
    // const maxHeight = 100;  // Gambar bisa mengisi hingga 100% dari tinggi layar

    // window.addEventListener("scroll", function() {
    //     let new_scrollY = window.scrollY - scrollY_div;

    //     // console.log(new_scrollY);
    //     if(is_full_width == false) {
    //         if (new_scrollY > 1100) {

    //                     // Skala lebar dan tinggi secara proporsional berdasarkan scroll
    //                     let newWidth = minWidth + (new_scrollY / 5);  // Tambahkan berdasarkan scroll (lebih cepat)
    //                     let newHeight = minHeight + (new_scrollY / 5);  // Tambahkan tinggi
                
    //                     // Batasi ukuran maksimal agar tidak lebih dari layar
    //                     if (newWidth > maxWidth) {
    //                         newWidth = maxWidth;  // Lebar maksimal 100vw
    //                     }
    //                     if (newHeight > maxHeight) {
    //                         newHeight = maxHeight;  // Tinggi maksimal 100vh
    //                     }
                
    //                         // Terapkan ukuran baru pada gambar menggunakan vw dan vh
    //                         div_main_hotels.style.width = newWidth + 'vw';
    //                         div_main_hotels.style.height = newHeight + 'vh';
    //                         // console.log(newWidth);
    //                         // console.log(newHeight);
    //                     if(newWidth == 100) {
    //                         // div_main_hotels.style.marginTop = '10vh';
    //                         is_full_width = true;
    //                         div_hotels_text.style.opacity = 1;
    //                         div_choose_hotels.style.opacity = 1;
    //                         div_see_more_hotels.style.opacity = 1;
    //                         // div_main_hotels.style.filter = 'blur(3px)'
    //                     }
    //         }
    //         else {
    //             // Jika belum melewati gambar pertama, tetap pada ukuran awal
    //             div_main_hotels.style.width = minWidth + 'px';
    //             div_main_hotels.style.height = minHeight + 'px';
    //         }
    //     }
    // });







































    // let div_main_culinary = document.querySelector(".div-main-culinary");
    // let scrollY_culinary = div_main_culinary.getBoundingClientRect().top + window.scrollY;

    // window.addEventListener("scroll", function() {
    //     let new_scrollY_culinary = window.scrollY - scrollY_culinary;
        
    //     if(new_scrollY_culinary >= 0 && new_scrollY_culinary <= 150) {
    //         // div_main_culinary.style.position = "fixed";
    //         div_main_culinary.style.top = 0;
    //     }
    //     else if (new_scrollY_culinary >= 150 && new_scrollY_culinary <= 300) {

    //     }
    // });
}









document.addEventListener('DOMContentLoaded',
    function() {
        setTimeout(function(){
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        });
    });

window.history.scrollRestoration = 'manual';
window.scrollTo(0, 0);
    
window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});




























function FirstViewWeb() {
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
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");

    window.onload = function() {
        sub_div_main.style.marginTop = "27vh";
        div_choose_destination.style.display = "none";
        // console.log(stop_loop);
        header.style.display = "none";
        div.style.position = "fixed";
        destination_title.style.display = "none";
        div_main_about.style.display = "none";
        div_hotels.style.display = "none";
        div_hotels_text.style.opacity = 0;
        div_choose_hotels.style.opacity = 0;
        div_see_more_hotels.style.opacity = 0;
    }

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










    // map_bali.addEventListener("click", function() {
    //     picked_destination_canggu = false;
    //     picked_destination_gwk = false;
    //     picked_destination_uluwatu = false;
    //     picked_destination_mengening = false;
    //     header.style.display = "none";
    //     div.style.position = "fixed"
    //     destination_title.style.display = "none";
    //     div_choose_destination.style.display = "block";
    //     div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    // });

    destination1.addEventListener("click", function() {
        // picked_destination_canggu = true;
        // picked_destination_gwk = false;
        // picked_destination_uluwatu = false;
        // picked_destination_mengening = false;
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        console.log(localStorage.getItem('picked_destination_canggu'));
        window.location.reload()
        // console.log("canggu dipilih")
        // div_choose_destination.style.display = "none";
        // div.style.backgroundImage = `url('${images[0]}')`
        // div.style.transitionDuration = '2s'
        // header.style.display = "block";
        // div.style.position = "relative";
        // destination_title.style.display = "block";
        // destination_title.style.animation = "opacity 2.5s ease-in-out";
        // div.style.alignContent = "center";
        // div_main_about.style.display = "block";
        // div_hotels.style.display = "block";
    });
}













// function ReloadWeb() {
//     let button_main = document.querySelector(".btn-main");
//     let sub_div_main = document.querySelector(".sub-div-main");
//     let div_choose_destination = document.querySelector(".div-choose-destination");
//     let destination1 = document.querySelector(".img-destination1");
//     let destination2 = document.querySelector(".img-destination2");
//     let destination3 = document.querySelector(".img-destination3");
//     let destination4 = document.querySelector(".img-destination4");
//     let isTransitioning = false;
//     let header = document.querySelector(".div-header");
//     let destination_title = document.querySelector(".destination-title");
//     let map_bali = document.querySelector(".img-map-bali");
//     let div_main_about = document.querySelector(".div-main-about");
//     let div_hotels = document.querySelector(".div-main-hotels");
//     let div_hotels_text = document.querySelector(".div-hotels-text");
//     let div_choose_hotels = document.querySelector(".div-hotels");
//     let div_see_more_hotels = document.querySelector(".div-see-more");
//     // let div_main = document.querySelector(".div-main");

//     window.onload = function() {
//         // sub_div_main.style.marginTop = "27vh";
//         div_choose_destination.style.display = "none";
//         // div_main.style.display = "none";
//         // console.log(stop_loop);
//         // header.style.display = "none";
//         // div.style.position = "fixed";
//         // destination_title.style.display = "none";
//         // div_main_about.style.display = "none";
//         // div_hotels.style.display = "none";
//         // div_hotels_text.style.opacity = 0;
//         // div_choose_hotels.style.opacity = 0;
//         // div_see_more_hotels.style.opacity = 0;
//         sub_div_main.style.display = "none";
//         div_choose_destination.style.display = "none";
//         div.style.backgroundImage = `url('${images[0]}')`
//         div.style.transitionDuration = '2s'
//         header.style.display = "block";
//         div.style.position = "relative";
//         destination_title.style.display = "block";
//         destination_title.style.animation = "opacity 2.5s ease-in-out";
//         div.style.alignContent = "center";
//         div_main_about.style.display = "block";
//         div_hotels.style.display = "block";
//     }
// }















function CangguBeach() {

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
    let div_hotels = document.querySelector(".div-main-hotels");
    let div_hotels_text = document.querySelector(".div-hotels-text");
    let div_choose_hotels = document.querySelector(".div-hotels");
    let div_see_more_hotels = document.querySelector(".div-see-more");

    window.onload = function() {
        // sub_div_main.style.marginTop = "27vh";
        div_choose_destination.style.display = "none";
        // div_main.style.display = "none";
        // console.log(stop_loop);
        // header.style.display = "none";
        // div.style.position = "fixed";
        // destination_title.style.display = "none";
        // div_main_about.style.display = "none";
        // div_hotels.style.display = "none";
        // div_hotels_text.style.opacity = 0;
        // div_choose_hotels.style.opacity = 0;
        // div_see_more_hotels.style.opacity = 0;
        sub_div_main.style.display = "none";
        div_choose_destination.style.display = "none";
        div.style.backgroundImage = `url('${images[0]}')`
        div.style.transitionDuration = '2s'
        header.style.display = "block";
        div.style.position = "relative";
        destination_title.style.display = "block";
        destination_title.style.animation = "opacity 2.5s ease-in-out";
        div.style.alignContent = "center";
        div_main_about.style.display = "block";
        div_hotels.style.display = "block";
        question_foods.style.opacity = 1;
        answers_foods.style.opacity = 0;
        title_culinary.style.opacity = 0;
        div_foods_information.style.display = 'none';
        food1.style.opacity = 0;
        food2.style.opacity = 0;
        food3.style.opacity = 0;
        food4.style.opacity = 0;
    }

    map_bali.addEventListener("click", function() {
        header.style.display = "none";
        div.style.position = "fixed"
        destination_title.style.display = "none";
        div_choose_destination.style.display = "block";
        div_choose_destination.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    });

    destination1.addEventListener("click", function() {
        // picked_destination_canggu = true;
        // picked_destination_gwk = false;
        // picked_destination_uluwatu = false;
        // picked_destination_mengening = false;
        localStorage.setItem('picked_destination_canggu', 'true');
        localStorage.setItem('picked_destination_gwk', 'false');
        localStorage.setItem('picked_destination_uluwatu', 'false');
        localStorage.setItem('picked_destination_mengening', 'false');
        console.log(localStorage.getItem('picked_destination_canggu'));
        window.location.reload()
        // console.log("canggu dipilih")
        // div_choose_destination.style.display = "none";
        // div.style.backgroundImage = `url('${images[0]}')`
        // div.style.transitionDuration = '2s'
        // header.style.display = "block";
        // div.style.position = "relative";
        // destination_title.style.display = "block";
        // destination_title.style.animation = "opacity 2.5s ease-in-out";
        // div.style.alignContent = "center";
        // div_main_about.style.display = "block";
        // div_hotels.style.display = "block";
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

    let scrollY_div = div_main_about.getBoundingClientRect().top + window.scrollY;
    let is_full_width = false;

    // Ukuran awal gambar
    const minWidth = 150;  // 20% dari lebar layar (vw)
    const minHeight = 80; // 20% dari tinggi layar (vh)

    // Ukuran maksimal gambar
    const maxWidth = 100;   // Gambar bisa mengisi hingga 100% dari lebar layar
    const maxHeight = 100;  // Gambar bisa mengisi hingga 100% dari tinggi layar

    window.addEventListener("scroll", function() {
        let new_scrollY = window.scrollY - scrollY_div;

        // console.log(new_scrollY);
        if(is_full_width == false) {
            if (new_scrollY > 1100) {

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
                            // console.log(newWidth);
                            // console.log(newHeight);
                        if(newWidth == 100) {
                            // div_main_hotels.style.marginTop = '10vh';
                            is_full_width = true;
                            div_hotels_text.style.opacity = 1;
                            div_choose_hotels.style.opacity = 1;
                            div_see_more_hotels.style.opacity = 1;
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










































































// DESTINATION IMAGE SCROLL ANIMATION START
// const track = document.getElementById("image-track");

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
//     track.dataset.mouseDownAt = "0";  
//     track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
//     if(track.dataset.mouseDownAt === "0") return;

//     const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//         maxDelta = window.innerWidth / 2;

//     const percentage = (mouseDelta / maxDelta) * -100,
//         nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//         nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

//     track.dataset.percentage = nextPercentage;

//     track.animate({
//         transform: `translate(${nextPercentage}%, -50%)`
//     }, { duration: 1200, fill: "forwards" });

//     for(const image of track.getElementsByClassName("image")) {
//     image.animate({
//         objectPosition: `${100 + nextPercentage}% center`
//     }, { duration: 1200, fill: "forwards" });
//     }
// }


// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);
// DESTINATION IMAGE SCROLL ANIMATION END

const track = document.getElementById("image-track");
const container = document.querySelector('.destin-container');
const titleText = document.querySelector('.title-gallery');
const descriptionText = document.querySelector('.description-gallery');

const initialBackgroundColor = "black";
const targetBackgroundColor = "rgba(252, 240, 227, 1)"; // Final color
const initialTextColor = "white";
const targetTextColor = "black";

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";  
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
    if(track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1200, fill: "forwards" });

    for(const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1200, fill: "forwards" });
    }

    // Calculate the background color and text color transition based on drag percentage
    const backgroundTransitionFactor = Math.abs(nextPercentage) / 100;
    const r = Math.round(0 + (252 - 0) * backgroundTransitionFactor);
    const g = Math.round(0 + (240 - 0) * backgroundTransitionFactor);
    const b = Math.round(0 + (227 - 0) * backgroundTransitionFactor);
    container.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;

    // Transition the text color
    const textColorTransitionFactor = Math.abs(nextPercentage) / 100;
    const textR = Math.round(255 + (0 - 255) * textColorTransitionFactor);
    const textG = Math.round(255 + (0 - 255) * textColorTransitionFactor);
    const textB = Math.round(255 + (0 - 255) * textColorTransitionFactor);
    titleText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
    descriptionText.style.color = `rgb(${textR}, ${textG}, ${textB})`;
}

window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);










    let stars1 = document.querySelector(".stars1");
    let stars2 = document.querySelector(".stars2");
    let stars3 = document.querySelector(".stars3");
    let stars4 = document.querySelector(".stars4");
    let stars5 = document.querySelector(".stars5");

    stars1.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png"
        stars2.src = "assets/images/unactive-stars.png"
        stars3.src = "assets/images/unactive-stars.png"
        stars4.src = "assets/images/unactive-stars.png"
        stars5.src = "assets/images/unactive-stars.png"
    });

    stars2.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png"
        stars2.src = "assets/images/active-stars.png"
        stars3.src = "assets/images/unactive-stars.png"
        stars4.src = "assets/images/unactive-stars.png"
        stars5.src = "assets/images/unactive-stars.png"
    });

    stars3.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png"
        stars2.src = "assets/images/active-stars.png"
        stars3.src = "assets/images/active-stars.png"
        stars4.src = "assets/images/unactive-stars.png"
        stars5.src = "assets/images/unactive-stars.png"
    });

    stars4.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png"
        stars2.src = "assets/images/active-stars.png"
        stars3.src = "assets/images/active-stars.png"
        stars4.src = "assets/images/active-stars.png"
        stars5.src = "assets/images/unactive-stars.png"
    });

    stars5.addEventListener("click", function() {
        stars1.src = "assets/images/active-stars.png"
        stars2.src = "assets/images/active-stars.png"
        stars3.src = "assets/images/active-stars.png"
        stars4.src = "assets/images/active-stars.png"
        stars5.src = "assets/images/active-stars.png"
    });

    

















    let btn_send_message = document.querySelector(".btn-send-message");
    let input_gender = document.querySelectorAll(".input-gender");
    let rating = document.querySelectorAll(".unactive-stars");
    let link_active_stars = "assets/images/active-stars.png";
    let error_message = document.querySelector(".error-message");

    // Event listener untuk tombol
    btn_send_message.addEventListener("click", function() {
        // Ambil elemen input dan textarea
        let input_name_elem = document.querySelector(".input-name");
        let textarea_elem = document.querySelector(".textarea");

        // Ambil nilai input dan textarea
        let input_name = input_name_elem.value;
        let textarea = textarea_elem.value;

        // Reset kondisi input gender (radio button)
        let input_gender_checked = false;
        input_gender.forEach(radio => {
            if (radio.checked) {
                input_gender_checked = true;
            }
        });

        // Cek apakah rating sudah dipilih
        let ratings = false;
        rating.forEach(function(image) {
            if (image.src.includes(link_active_stars)) {
                ratings = true;
            }
        });

        // Validasi: apakah semua input sudah diisi
        if (input_name === "" || textarea === "" || input_gender_checked == false || ratings == false) {
            // console.log("kosong");
            error_message.style.display = "block";
        } else {
            // console.log("isi");
            error_message.style.display = "none";

            // Kosongkan input dan textarea
            input_name_elem.value = "";    // Mengosongkan input name
            textarea_elem.value = "";      // Mengosongkan textarea

            // Reset rating ke gambar 'unactive'
            rating.forEach(function(image) {
                if (image.src.includes(link_active_stars)) {
                    image.src = "assets/images/unactive-stars.png";  // Ganti src menjadi gambar unactive
                }
            });

            // Set semua input radio menjadi unchecked
            input_gender.forEach(radio => {
                radio.checked = false;  // Mengatur semua input radio menjadi unchecked
            });
        }
    });

    
}
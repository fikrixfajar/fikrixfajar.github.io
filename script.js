const navtotop = document.getElementById('to-top');

window.onscroll = function() {scrollfunction ()};
function scrollfunction () {
    if (document.documentElement > 100 || document.body.scrollTop > 100) {
        navtotop.style.display = "none";
    } else {
        navtotop.style.display = "block";
    }
}

navtotop.addEventListener ('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;''
})


// =========Slider========
let i = 0;
let j = 5;

const dots = document.querySelectorAll(".dot-container .tombol");
const images = document.querySelectorAll(".ilustrasi-container img");

function next () {
    document.getElementById("gambar"+ (i + 1)).classList.remove("aktif");
    i = (j + i + 1) % j;

    document.getElementById("gambar" + (i + 1)).classList.add("aktif");

    indicator(i + 1);
}


function prev () {
    document.getElementById("gambar"+ (i + 1)).classList.remove("aktif");
    i = (j + i - 1) % j;

    document.getElementById("gambar" + (i + 1)).classList.add("aktif");

    indicator(i + 1);
}


// indicator
function indicator(num) {
    dots.forEach(function(dot) {
      dot.style.backgroundColor = "transparent" ;
    });
    document.querySelector(".dot-container .tombol:nth-child(" + num + ")").style.backgroundColor = "#e61e1e";
}
    
function dot(index) {
    images.forEach(function(image) {
        image.classList.remove("aktif");
    });
    document.getElementById("gambar" + index).classList.add("aktif");

    i = index - 1;
    indicator(index);
    
}




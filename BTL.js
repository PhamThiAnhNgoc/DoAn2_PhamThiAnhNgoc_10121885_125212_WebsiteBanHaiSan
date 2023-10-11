window.onload=function(){
    slickPictureMain();
    slickPictureMain2();
   
}
function slickPictureMain(){
    $('.slider-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow' ><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots:true
    });
}
function slickPictureMain2(){
    $('.slideauto').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,  
    });
}
//thêm vào giỏ hàng
 var gio = new Array();

function themvaogiohang(x) {
    var gh=x.parentElement.children;
    gio.push(gh);
    console.log(gio);
    showcountsp();
}
function showcountsp() {
    document.getElementById("cart2").innerHTML = gio.length;
}
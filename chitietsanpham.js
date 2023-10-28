window.onload=function(){
  slickPictureMain();
  slickPictureMain2();
  
}
//chạy ảnh ff
function slickPictureMain2(){
    $('.slideauto').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        
    });
}
//Ấn ảnh
function slickPictureMain(){
  $(document).ready(function(){
    $('.thumb a').mouseover(function(e){
    e.preventDefault();
    $('.imgBox img').attr("src",$(this).attr("href"));
    });
});
}
//Tăng giảm số lượng
function incrementValue()
{
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;
            document.getElementById('quantity').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('quantity').value = value;
    }

}
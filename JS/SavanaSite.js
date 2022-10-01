// arrow (fléche)
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft +=  containerWidth;
    })
   preBtn[i].addEventListener('click', () => {
        item.scrollLeft -=  containerWidth;
    })
})

$(".button").click(function(){
    $(".social.email").toggleClass("clicked");
    $(".social.email").toggleClass("clicked");
    $(".social.musique").toggleClass("clicked");
    $(".social.telephone").toggleClass("clicked");
    $(".social.twitter").toggleClass("clicked");
    $(".social.facebook").toggleClass("clicked");
    $(".social.google").toggleClass("clicked");
    $(".social.linkedin").toggleClass("clicked");
    $(".social.whatsapp").toggleClass("clicked");
    $(".social.instagram").toggleClass("clicked");
    $(".social.tiktok").toggleClass("clicked");
    $(".social.telegram").toggleClass("clicked");
    $(".social.snapchat").toggleClass("clicked");
    $(".social.likee").toggleClass("clicked");
    $(".social.youtube").toggleClass("clicked");
    
  })
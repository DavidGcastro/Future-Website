$(document).ready(function() {
  var first = $("#image").attr('src', "https://s-media-cache-ak0.pinimg.com/736x/16/5d/10/165d106ff9844b31ba1887b224786aa7--white-home-decor-home-design-white.jpg");

  function getImages(x) {
   $('#image').attr('src', x).hide(0).fadeIn(500);
  }
  var image1 = "https://s-media-cache-ak0.pinimg.com/736x/44/e7/e3/44e7e3896348dfc49731d5f61ac5344c--eat-in-kitchen-kitchen-nook.jpg";
  var image2 = "https://images.unsplash.com/photo-1498842812179-c81beecf902c?dpr=2&auto=format&fit=crop&w=1500&h=2250&q=80&cs=tinysrgb&crop=";
  var image3 = "https://images.unsplash.com/photo-1476891626313-2cecb3820a69?dpr=2&auto=format&fit=crop&w=1500&h=2437&q=80&cs=tinysrgb&crop=";
  var image4 = "https://images.unsplash.com/photo-1497979520324-8140b1524b8d?dpr=2&auto=format&fit=crop&w=1500&h=2185&q=80&cs=tinysrgb&crop=";
  var images = [image1, image2, image3, image4];
  var i = 0;

  function timedLoop() {
    setTimeout(function() {
      getImages(images[i]);
      i++;
      if (i < images.length) {
        timedLoop();
        console.log(i);
      } else {
        i = 0;
        console.log("done");
        timedLoop();
      }
    }, 8000)
  }
  timedLoop();
});








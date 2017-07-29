

$(document).ready(function() {
  var first = $("#image").attr('src', "https://images.unsplash.com/photo-1497979520324-8140b1524b8d?dpr=2&auto=format&fit=crop&w=1500&h=2185&q=80&cs=tinysrgb&crop=");

  function getImages(x) {
   $('#image').attr('src', x).hide().fadeIn(500);
  }
  var image1 = "https://images.unsplash.com/photo-1498335746477-0c73d7353a07?dpr=2&auto=format&fit=crop&w=1500&h=2100&q=80&cs=tinysrgb&crop=";
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
    }, 5000)
  }
  timedLoop();
});

//mobile menu 







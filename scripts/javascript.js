
  var image1 = "/Users/davidcastro/Desktop/Developer\ Projects/DevPortfolio/portfolio/images/sunset.JPG";
  var image2 = "/Users/davidcastro/Desktop/Developer\ Projects/DevPortfolio/portfolio/images/grad.JPG";
  var image3 = "/Users/davidcastro/Desktop/Developer\ Projects/DevPortfolio/portfolio/images/red.JPG";
  var image4 = "/Users/davidcastro/Desktop/Developer\ Projects/DevPortfolio/portfolio/images/red.JPG";
  var images = [image1, image2, image3, image4];
  var i = 0;

$(document).ready(function() {
  var first = $("#image").attr('src', "/Users/davidcastro/Desktop/Developer\ Projects/DevPortfolio/portfolio/images/red.JPG");

  function getImages(x) {
   $('#image').attr('src', x).hide().fadeIn(560);
   // $('#image').attr('src', x).hide().fadeIn(500);
    }


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








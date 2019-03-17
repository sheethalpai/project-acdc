document.getElementById('inp').onchange = function(e) {
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  img.src = URL.createObjectURL(this.files[0]);
};
function draw() {
  var canvas = document.getElementById('canvas');
  canvas.width = this.width;
  canvas.height = this.height;
  var ctx = canvas.getContext('2d');
  ctx.drawImage(this, 50, 50, 200, 200)
  

}
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
}
if(!img.error){
   //here the next post part//
}

//share button//
var fbButton = document.getElementById('fb-share-button');
var url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});

//like button//
$(document).foundation();

$(function() {
  $('.button-like')
    .bind('click', function(event) {
      $(".button-like").toggleClass("liked");
    })
});




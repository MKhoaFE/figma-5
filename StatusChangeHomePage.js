// document.addEventListener("DOMContentLoaded", function () {
//   var playButton = document.getElementById("play");

//   playButton.addEventListener("click", function () {
//     console.log("clicked");
//   });
// });
let player;

// Tạo một event listener để chờ khi iframe đã sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo trình phát video với iframe đã nhúng

  window.YT.ready(function(){
    player = new window.YT.Player("myVideo",{
      events:{
        onReady: onPlayerReady
      }
    });
  });


});

function onPlayerReady(event) {
  // Thêm sự kiện cho trình phát video
  player.addEventListener("onStateChange", function (event) {
    // Lấy trạng thái của video (1: Playing, 2: Paused)
    const videoState = event.data;

    // Lấy phần tử .bg
    const bgElement = document.querySelector('.bg');
    const pbElement = document.querySelector('.play-button');
    
    // Kiểm tra trạng thái và thực hiện hành động tương ứng
    if (videoState === YT.PlayerState.PLAYING) {
      console.log("Video is playing");
      bgElement.style.zIndex = '-1'; 
      pbElement.style.zIndex = '-1'; 
    } else if (videoState === YT.PlayerState.PAUSED) {
      console.log("Video is paused");

      bgElement.style.zIndex = '999'; 
      pbElement.style.zIndex = '999'; 
      
    }
  });

  var playButton = document.getElementById("play");
  playButton.addEventListener("click", function() {
      player.playVideo();
      console.log("Button clicked");
  });
}

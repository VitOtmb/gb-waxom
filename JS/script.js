var video = document.querySelector("#video"),
    button = document.querySelector("button");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".page_video_btn").click(function() {
$('#video').get(0).play()
$(".page_video_btn").addClass('page_video_wrp--hide');
})

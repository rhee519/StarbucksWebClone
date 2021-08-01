// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    // height: '360',
    // width: '640',
    videoId: "WuvXf1rsulI", // first videoId
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "WuvXf1rsulI", // next videoId
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // mute video
      },
      // 'onStateChange': onPlayerStateChange
    },
  });
}

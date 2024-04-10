const thumbnailCollection =  document.getElementsByClassName("thumbnail")

for(let i = 0; i < thumbnailCollection.length; i++){
    thumbnailCollection[i].addEventListener("click", () => {
        thumbnailCollection[i].style.display = 'none';
        loadYT();
    })
}



loadYT = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

const playerList = [
    {id:'player', height: '390', width: '640', videoId: '8dRRzOuKaeg'},
    {id:'player2', height: '390', width: '640', videoId: '-ygZYfiDwH4'}
]

onYouTubeIframeAPIReady = () => {
    if(typeof playerList === 'undefined'){
        return
    }
    createPlayer = (player) => {
            return new YT.Player(player.id, {
                height: player.height,
                width: player.width,
                videoId: player.videoId,
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
            }
        });
    }

    for(let i = 0; i < playerList.length; i++){
        createPlayer(playerList[i])
    }
}

onPlayerReady = (e) => {
    e.target.playVideo();
}

let done = false;
onPlayerStateChange = (e) => {
    if (e.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}

stopVideo = () => {
    player.stopVideo();
}

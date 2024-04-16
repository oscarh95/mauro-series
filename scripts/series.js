const thumbnailCollection =  document.querySelectorAll('.thumbnail')
const playerCollection =  document.querySelectorAll('.visibility')
const collapsibleCollection = document.querySelectorAll('.season-collapse')
const seasonTabs = document.querySelectorAll('.season-number')

const loadYT = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    alert("API loaded")
}

let flag = false
for(let i = 0; i < seasonTabs.length; i++){
    seasonTabs[i].addEventListener("click", () => {
        loadYT();
        flag = true
        console.log(flag)
    })
    if(flag){
        break;
    }
}


//Loop for showing video player hiding behind corresponding thumbnail
for(let i = 0; i < thumbnailCollection.length; i++){
    for(let j = 0; j < playerCollection.length; j++){
        if(i == j){
            thumbnailCollection[i].addEventListener("click", () => {
                console.log(playerCollection[j])
                thumbnailCollection[i].style.display = 'none';
                playerCollection[j].classList.toggle('visibility-show')
            })
        }
    }
}

//Array of videos (by season)
const playerList = [
    {id:'player', height: '390', width: '640', videoId: '8dRRzOuKaeg'},
    {id:'player2', height: '390', width: '640', videoId: '-ygZYfiDwH4'},
    {id:'player3', height: '390', width: '640', videoId: '7WjZijQai40'},
    {id:'player4', height: '390', width: '640', videoId: 'jz1tpqGD5EM'},
    {id:'player5', height: '390', width: '640', videoId: '1emZAXvzi2g'},
    {id:'player6', height: '390', width: '640', videoId: 'hosJ0_zoDtE'},
    {id:'player7', height: '390', width: '640', videoId: '21TRHyA613g'},
    {id:'player8', height: '390', width: '640', videoId: 'PmvzdMMu7ok'},
]


//Loads Youtube Iframe + parameters using playerList array
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
                    'autoplay' : 0,
                    'disablekb' : 1
                },
        });
    }

    //Creates player using ids from playerList array
    for(let i = 0; i < playerList.length; i++){
        createPlayer(playerList[i])
    }
}

//Collapsible sections
for(let i = 0; i < collapsibleCollection.length; i++){
    collapsibleCollection[i].addEventListener('click', () => {
        collapsibleCollection[i].classList.toggle('active')
        let mainContent = collapsibleCollection[i].nextElementSibling;
        if(mainContent.style.maxHeight){
            mainContent.style.maxHeight = null;
        }
        else{
            mainContent.style.maxHeight = mainContent.scrollHeight + "px";
        }
    })
}
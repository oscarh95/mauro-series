const thumbnailCollection =  document.querySelectorAll('.thumbnail')
const playerCollection =  document.querySelectorAll('.visibility')
const collapsibleCollection = document.querySelectorAll('.season-collapse')
const seasonTabs = document.querySelectorAll('.season-number')
const contentWrapper = document.getElementById('content-wrapper')


loadYT = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

document.addEventListener("DOMContentLoaded", () => {
    contentWrapper.addEventListener("mouseover", () => {
        loadYT()
    }, {once:true})
})

//Loop for showing video player hiding behind corresponding thumbnail
for(let i = 0; i < thumbnailCollection.length; i++){
    for(let j = 0; j < playerCollection.length; j++){
        if(i == j){
            thumbnailCollection[i].addEventListener("click", () => {
                thumbnailCollection[i].style.display = 'none';
                playerCollection[j].classList.toggle('visibility-show')
            })
        }
    }
}

//Array of videos (by season)
const playerList = [
    [
        {id:'s1e1', height: '390', width: '640', videoId: '8dRRzOuKaeg'},
        {id:'s1e2', height: '390', width: '640', videoId: '-ygZYfiDwH4'},
        {id:'s1e3', height: '390', width: '640', videoId: '7WjZijQai40'},
        {id:'s1e4', height: '390', width: '640', videoId: 'jz1tpqGD5EM'},
        {id:'s1e5', height: '390', width: '640', videoId: '1emZAXvzi2g'},
        {id:'s1e6', height: '390', width: '640', videoId: 'hosJ0_zoDtE'},
        {id:'s1e7', height: '390', width: '640', videoId: '21TRHyA613g'},
        {id:'s1e8', height: '390', width: '640', videoId: 'PmvzdMMu7ok'}
    ],
    [
        {id:'s2e1', height: '390', width: '640', videoId: 'P_L-uaLQXgs'},
        {id:'s2e2', height: '390', width: '640', videoId: 'GXOzUy-QKz8'},
        {id:'s2e3', height: '390', width: '640', videoId: 'JhgsXl6eFOw'},
        {id:'s2e4', height: '390', width: '640', videoId: '6qWOA53wVL0'}
    ],
    [
        {id:'s3e1', height: '390', width: '640', videoId: '8qRWr6wZHXs'},
        {id:'s3e2', height: '390', width: '640', videoId: 'X13AcMbCzKM'},
        {id:'s3e3', height: '390', width: '640', videoId: 'QjWoZUWfGCE'},
        {id:'s3e4', height: '390', width: '640', videoId: 'VqkU7bAUpE4'},
        {id:'s3e5', height: '390', width: '640', videoId: '8a3QQM6O7'},
        {id:'s3e6', height: '390', width: '640', videoId: 'U5gdUzVDrY0'},
        {id:'s3e7', height: '390', width: '640', videoId: 'X1_QekvjT8E'},
        {id:'s3e8', height: '390', width: '640', videoId: '2qKnIX7s2yk'},
        {id:'s3e9', height: '390', width: '640', videoId: '4djhVRH-5Ac'},
        {id:'s3e10', height: '390', width: '640', videoId: 'Dmcq-FQ0bP0'}
    ],
    [
        {id:'s4e1', height: '390', width: '640', videoId: 'p7QZHNezmt4'},
        {id:'s4e2', height: '390', width: '640', videoId: 'z8OCAWhWIpE'}
    ]
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
        for(let j = 0; j < playerList[i].length; j++)
            createPlayer(playerList[i][j])
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
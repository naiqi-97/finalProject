var player;
var currentPlay = 0;
var playList = happyPlayList;
var playTime = happyplayTime;
function onYouTubeIframeAPIReady(){
    
    player = new YT.Player("player",{
        height:"390",
        width:"640",
        videoId:playList[currentPlay],
        playerVars:{
            "autoplay":0,//不自動撥放
            "controls":0,//不顯示控制項
            "start":playTime[currentPlay][0],//起始秒數
            "end":playTime[currentPlay][1],//結束秒數
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}
function onPlayerReady(event){
    $("#happyButton").click(function(){
        playList=happyPlayList;
        playTime=sadplayTime;
        currentPlay = 0;
        $("#musicTitle").text("");
        player.cueVideoById({
            "videoId":playList[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
        });
            
    });
    $("#sadButton").click(function(){
        playList=sadPlayList;
        playTime=sadplayTime;
        currentPlay = 0;
        $("#musicTitle").text("");
        player.cueVideoById({
            "videoId":playList[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
        });
    });
    $("#fineButton").click(function(){
        playList=finePlayList;
        playTime=fineplayTime;
        currentPlay = 0;
        $("#musicTitle").text("");
        player.cueVideoById({
            "videoId":playList[currentPlay],
            "startSeconds":playTime[currentPlay][0],
            "endSeconds":playTime[currentPlay][1],
            "suggestedQuality":"large"
        });

    });
    $("#playButton").click(function(){
        $("#musicTitle").text(player.getVideoData().title);
        player.playVideo();
    });
    $("#pauseButton").click(function(){
        $("#musicTitle").text(player.getVideoData().title);
        player.pauseVideo();
    });
}
function onPlayerStateChange(event){
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId": playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }else{
            currentPlay = 0;
            player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }        
    }
    if(player.getVideoLoadedFraction()>0){
        $("#musicTitle").text(player.getVideoData().title);
    }
}


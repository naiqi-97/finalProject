var timer=null;
$(document).ready(function(){
    $("#choose").click(function(){
        clearInterval(timer);
        timer=setInterval(function(){
            let numberOfListItem = $("#choices li").length;
            let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
            var audio = new Audio("yisell_sound_2008092614483685702_88012.mp3");
            audio.play();
            $("#random-result").text($("#choices li").eq(randomChildNumber).text());          
            if(randomChildNumber>3){
                $("#random-pic").attr("src",pictures[4]);
            }else{
                $("#random-pic").attr("src",pictures[randomChildNumber]);
            }
        },50);
    });
    $("#stopChoose").click(function(){
        clearInterval(timer);
    });
    $("#submit").click(function(){
        let foodStr = document.getElementById('food').value;
        //console.log( foodStr);
        $("#choices").append("<li>"+foodStr+"</li>");
    });
    $("#delete").click(function(){
        let foodStr = document.getElementById('food').value;
        var object = document.getElementById("choices");
        var liObjects = object.childNodes;
        console.log(liObjects);
        for(let x=0;x<liObjects.length;x++){
            console.log(liObjects[x].innerText);
            if(liObjects[x].innerText==foodStr){
                object.removeChild(liObjects[x]);
            }
        }
    });
});

$(document).ready(function(){
    $("#answer").hide();
   
       
    $("#answer").change(function(){
        $("#theValue").text($("#answer").val()+" "+fiveIndex[$("#answer").val()-1]);                        
    });   
    let currentQuiz=null;
    let questionScores=[];
    $("#startButton").click(function(){
        $("#result").empty();
        $("#question").empty();
        $("#answer").show();
        
        $("#theValue").text($("#answer").val()+" "+fiveIndex[$("#answer").val()-1]);
             
        if(currentQuiz==null){
            currentQuiz=0;
        }
        else{             
            currentQuiz+=1;
        }
       
        $("#question").text(questions[currentQuiz]);     
        questionScores.push(parseInt($("#answer").val()));
        console.log(questionScores);                    
        if(currentQuiz==questions.length-1){           
            $("#startButton").attr("value","顯示結果");
        }else if(currentQuiz<questions.length-1&&currentQuiz!=null){
            $("#startButton").attr("value","下一題");
        }  
        if(currentQuiz==questions.length){                 
            for(let x=0;x<allScores.length;x++){
                sumScore(allScores[x].Char,questionScores);
            }
            allScores.sort(function(a,b){
                console.log(a);
                return a.Score-b.Score;
            });
            $("#answer").hide();
            $("#question").empty();
            $("#theValue").empty();
            for(let y=0;y<allScores.length;y++){
                $("#result").append(allScores[y].Char+" : "+allScores[y].Score+"<br>");
            }       
            $("#startButton").attr("value","重新作答");
            currentQuiz=null;
            questionScores.empty();
        } 
               
    });
    function sumScore(animal,questionScores){
        switch(animal){
            case "老虎":
                allScores[0].Score=questionScores[4]+questionScores[9]+questionScores[13]+questionScores[17]+questionScores[23]+questionScores[29];
                break;
            case "孔雀":
                allScores[1].Score=questionScores[2]+questionScores[5]+questionScores[12]+questionScores[19]+questionScores[21]+questionScores[28];
                break;
            case "無尾熊": 
                allScores[2].Score=questionScores[1]+questionScores[7]+questionScores[14]+questionScores[16]+questionScores[24]+questionScores[27];
                break;
            case "貓頭鷹":
                allScores[3].Score=questionScores[0]+questionScores[6]+questionScores[10]+questionScores[15]+questionScores[20]+questionScores[25];
                break; 
            case "變色龍":
                allScores[4].Score=questionScores[3]+questionScores[8]+questionScores[11]+questionScores[18]+questionScores[22]+questionScores[26];
                break;       
        }
    }
});
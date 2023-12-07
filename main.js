function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_pv7XSg_4/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log('gotresults');
    red=Math.floor(Math.random()*255)+1;
    Blue=Math.floor(Math.random()*255)+1;
    green=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+red+","+green+","+Blue+")";
    document.getElementById("result_confidence").style.color = "rgb("+red+","+green+","+Blue+")";

    img1=document.getElementById('alien1');
    img2=document.getElementById('alien2');
    img3=document.getElementById('alien3');
    img4=document.getElementById('alien4');

    if(results[0].label=="clap"){
        img1.src='aliens-01.gif';
        img2.src='aliens-02.png';
        img3.src='aliens-03.png';
        img4.src='aliens-04.png';
    }else   if(results[0].label=="snap"){
        img1.src='aliens-01.png';
        img2.src='aliens-02.gif';
        img3.src='aliens-03.png';
        img4.src='aliens-04.png';
    }else  if(results[0].label=="banging"){
        img1.src='aliens-01.png';
        img2.src='aliens-02.png';
        img3.src='aliens-03.gif';
        img4.src='aliens-04.png';
    }else   {
        img1.src='aliens-01.png';
        img2.src='aliens-02.png';
        img3.src='aliens-03.png';
        img4.src='aliens-04.gif';
    }
}

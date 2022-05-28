var len=document.querySelectorAll('.drum').length;
for(var i=0;i<len;i++){
    document.querySelectorAll('.drum')[i].addEventListener("click",function(){
        var key=this.innerHTML;
        makeSound(key);
    })
}
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(){
        var key=event.key;
        makeSound(key);
    })
}
function makeSound(key){
    if(key=='w'||key=='W'){
        var aud=new Audio('..//Sounds/crash.mp3');
        aud.play();
    }
    else if(key=='a'||key=='A'){
        var aud=new Audio('..//Sounds/kick-bass.mp3');
        aud.play();
    }
    else if(key=='s'||key=='S'){
        var aud=new Audio('..//Sounds/snare.mp3');
        aud.play();
    }
    else if(key=='d'||key=='D'){
        var aud=new Audio('..//Sounds/tom-1.mp3');
        aud.play();
    }
    else if(key=='j'||key=='J'){
        var aud=new Audio('..//Sounds/tom-2.mp3');
        aud.play();
    }
    else if(key=='k'||key=='K'){
        var aud=new Audio('..//Sounds/tom-3.mp3');
        aud.play();
    }
    else if(key=='l'||key=='L'){
        var aud=new Audio('..//Sounds/tom-4.mp3');
        aud.play();
    }
    var but=document.querySelector("."+key);
    but.classList.add("press");
    setTimeout(function(){but.classList.remove("press")},100);
}
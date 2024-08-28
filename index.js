const content=document.getElementById("content");
let Timer=null;
let startime=0;
let elapsedtime=0;
let isrunning=false;

function start(){
    if(!isrunning){
        startime=Date.now() -elapsedtime;
        Timer=setInterval(()=>{
            const currentime= Date.now();
            elapsedtime=currentime-startime;

            let hour=Math.floor(elapsedtime/(1000*60*60));
            let minute=Math.floor(elapsedtime/(1000*60)%60);
            let second=Math.floor(elapsedtime/(1000)%60);
            let millisec=Math.floor(elapsedtime%1000/10);

            hour=hour.toString().padStart(2,0);
            minute=minute.toString().padStart(2,0);
            second=second.toString().padStart(2,0);
            millisec=millisec.toString().padStart(2,0);


            c=`${hour}:${minute}:${second}:${millisec}`;
            content.textContent=c;
        },10);
        isrunning=true;
    }
}
function reset(){
    clearInterval(Timer);
    startime=0;
    elapsedtime=0;
    isrunning=false;
    content.textContent="00:00:00:00";
}
function stop(){
    if(isrunning){
        clearInterval(Timer);
        elapsedtime=Date.now()-startime;
        isrunning=false
    }
}

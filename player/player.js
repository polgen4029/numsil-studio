const prevButton = document.querySelector(".prevLogo");
const prevText = document.querySelector(".prevText")
const nextButton = document.querySelector(".nextLogo");
const nextText = document.querySelector(".nextText")
const stopButton = document.querySelector(".pausebutton");

const playerTitle = document.querySelector(".songTitle")
const playerText = document.querySelector(".songCredit")
const CDImg = document.querySelector(".rotateCD")
const playerAudio = document.getElementById("audioSource");

const fixViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--fixed-vh', `${vh}px`);
    };

    // 최초 1회만 계산
fixViewportHeight();


const sources = [
    {title : "Modern Kidults - Kunoo (Remastered)"
     ,text : "Track Count : 39 Tracks <br><br> Used Mic : <br> Vocal - Octava MK012 <br> Drums - SM57/Sennheiser E Series Kit/Octava MK012 <br> Guitar&Bass - Kemper Profiler <br> <br> Used Gear : <br> Vocal - 1073LB/CL1B/611EQ <br> Bass - 1073LB/1176LN <br> Snare - 1073LB/1176LN/611EQ <br> Drum Bus - G Series Bus Compressor <br> <br> Rec/Tuned/Mixed/Mastered at Studio Numsil"
     ,img : "../img/MK.jpg"
     ,song : "../audio/MK New.mp3"
    }
    ,
    {title : "Someday - 김혜린"
    ,text :"Track Count : 61 Tracks <br><br> Used Mic : <br> Vocal - Neumann TLM103 <br><br> Used Gear : <br> Vocal - 1073LB/CL1B/611EQ <br> Bass - 1073LB/CL1B/1176LN <br> Drum Bus - SSL G Series Bus Compressor <br><br> Rec at Record Factory & Mixed/Mastered at Studio Numsil"
    ,img : "../img/Someday.jpg"
    ,song : "../audio/Someday Studio.mp3"
    }
]







let index = 0;
const total = 2;

function slideUpdate () {

    playerText.innerHTML = sources[index].text;
    CDImg.style.backgroundImage = `url(${sources[index].img})`
    playerTitle.innerHTML = sources[index].title;
    playerAudio.src = sources[index].song;


}
slideUpdate();


let AudioPlay = 0;

    prevButton.addEventListener("click", ()=>{

        
        if(AudioPlay==1) {AudioStop();}
        AudioPlay = 0;
        index = (index - 1 + total) % total;
        slideUpdate ();
    

        console.log(index)

        
        

    })

    prevText.addEventListener("click", ()=>{

        if(AudioPlay==1) {AudioStop();}
        AudioPlay = 0;
        index = (index - 1 + total) % total;
        slideUpdate ();
    

        console.log(index)

    })


    nextButton.addEventListener("click", ()=>{

        
        if(AudioPlay==1) {AudioStop();}
        AudioPlay = 0;
        index = (index+1) % total;
        slideUpdate ();
        console.log(index);

        
    })

    nextText.addEventListener("click", ()=>{
        
        if(AudioPlay==1) {AudioStop();}
        AudioPlay = 0;
        index = (index+1) % total;
        slideUpdate ();
        console.log(index);

    })

function AudioStart () {
    stopButton.innerHTML = ""
    stopButton.innerHTML = "■"
    playerAudio.play();
    CDImg.style.animationPlayState = "running"

}

function AudioStop () {
    stopButton.innerHTML = ""
    stopButton.innerHTML = "▶"
    playerAudio.pause();
    CDImg.style.animationPlayState = "paused"
}

    stopButton.addEventListener("click" , ()=>{

        if (AudioPlay == 0 ){
            AudioStart();
            AudioPlay = 1;
        }
        else {
            AudioStop();
            AudioPlay = 0;
        }

    })

    CDImg.addEventListener("click", ()=>{
        if (AudioPlay == 0 ){
            AudioStart();
            AudioPlay = 1;
        }
        else {
            AudioStop();
            AudioPlay = 0;
        }
    })

    document.addEventListener("keydown", (event)=>{
        if(event.code==="Space" && AudioPlay == 0){
            AudioStart();
            AudioPlay = 1;
        }
        else if (event.code==="Space"&&AudioPlay == 1){
            AudioStop();
            AudioPlay = 0;
        }
    })

   



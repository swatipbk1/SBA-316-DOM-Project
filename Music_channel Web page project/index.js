console.log("Welcome to Angelic Music");

//Intialize the variable

let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songs= [
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautifuljourney", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
]





//Handle Play/Pause Click
masterPlay.addEventListener("click",() =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else {
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
})




//Listen to Events
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //Update seekbar
});
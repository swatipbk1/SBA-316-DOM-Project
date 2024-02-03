console.log("Welcome to Angelic Music");

//Intialize the variable

let songIndex=0;
let audioElement= new Audio('1.mp3');
let masterPlay= document.getElementById("masterPlay");
let songs= [
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"beautiful journey", filepath:"song/1.mp3", coverPath:"covers/1.jpg"}
]

audioElement.play();
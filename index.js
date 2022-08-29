// variables initialization
var songIndex =0;
var audioElement = new Audio("songs/Marshmello_Ft_Khalid_-_Numb_naijanowell.com.mp3");
var masterPlay = document.querySelector("#masterPlay");
var myProgressBar = document.querySelector("#myProgressBar");
// var gif = document.querySelector("#gif");
// var masterSongName = document.querySelector("#masterSongName");
let songItems = Array.from(document.getElementsByClassName('songItem'));

// var numberOfButtons = document.querySelectorAll(".playsongs");
// console.log(numberOfButtons);
// for(var i=0;i<numberOfButtons;i++)
// {
//   document.querySelectorAll(".playsongs")[i].addEventListener("click",function(){
//     var buttonSelected = this.id;
//     console.log(this.id);
//     choosePlaylist(buttonSelected);
//   })
// }

// function choosePlaylist(key)
// {
//   switch(key)
//   {
//     case "MM":
//       console.log("MM");
      var songs = [
        {songName: "Numb", filePath: "songs/Marshmello_Ft_Khalid_-_Numb_naijanowell.com.mp3",coverPath:"images/MM-numb.jpeg",timespan:"02:35"},
        {songName: "Happier", filePath: "songs/Marshmello-ft.-Bastille-Happier.mp3",coverPath:"images/MM-happier.png",timespan:"03:34"},
        {songName: "FRIENDS", filePath: "songs/Friends(PaglaSongs).mp3",coverPath:"images/MM-friends.jpeg",timespan:"03:22"},
        {songName: "Wolves", filePath: "songs/Wolves - Selena Gomez, Marshmello- [PagalWorld.NL].mp3",coverPath:"images/MM-wolves.jpeg",timespan:"03:17"},
        {songName: "Be kind", filePath: "songs/Marshmello_Halsey_-_BE_KIND_CeeNaija.com_.mp3",coverPath:"images/MM-be kind.png",timespan:"02:52"},
        {songName: "Alone", filePath: "songs/Marshmello-Alone-Mybestfeelings.com_.mp3",coverPath:"images/MM-alone.jpeg",timespan:"03:19"},
        {songName: "Keep It Mello", filePath: "songs/american-studios_marshmello-keep-it-mello-ft-omar-linx.mp3",coverPath:"images/MM-keep it mello.jpeg",timespan:"03:10"},
        {songName: "Fairytale", filePath: "songs/Marshmello_-_Fairytale_Soloplay.ng.mp3",coverPath:"images/MM-fairytale.jpeg",timespan:"02:35"},
      ];
//       break;
//
//     case "AW":
//       console.log("MM");
//       break;
//
//     case "SD":
//       console.log("MM");
//       break;
//   }
// }



  songItems.forEach((element, i)=>{
    console.log(element,i);
      element.getElementsByTagName("img")[0].src = songs[i].coverPath;
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
      element.getElementsByClassName("timespan")[0].innerText = songs[i].timespan;
  })




// handle play/pause clicks
masterPlay.addEventListener("click",function(){
  if(audioElement.paused || audioElement.currentTime<=0)
  {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    // gif.style.opacity = 1;
  }
  else
  {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
    // gif.style.opacity = 0;
  }
})

// change of progress bar according to the current time of audio element

audioElement.addEventListener("timeupdate",function(){
  myProgressBar.value = (audioElement.currentTime/audioElement.duration)*100;
})

// change of audio element according to the progress bar

myProgressBar.addEventListener("change",function(){
  audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

// makeAllPlays
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// play the current music
var numberOfSongItems = document.querySelectorAll(".songItemPlay").length;
for(var i=0;i<numberOfSongItems;i++)
{
  document.querySelectorAll(".songItemPlay")[i].addEventListener("click",function(){
      songIndex = parseInt(this.id);
      console.log(songIndex);
      audioElement.src = songs[songIndex].filePath;
      if(this.classList.contains("fa-play-circle"))
      {

        audioElement.play();
        makeAllPlays();
        audioElement.currentTime = 0;
        this.classList.replace("fa-play-circle","fa-pause-circle");
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
      }
      else if(this.classList.contains("fa-pause-circle")){
        audioElement.pause();
        this.classList.replace("fa-pause-circle","fa-play-circle");
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
      }
    })
}

// For next song to play
document.querySelector("#next").addEventListener("click",function(){
  if(songIndex==numberOfSongItems-1)
  {
    songIndex = 0;
  }
  else{
    songIndex = songIndex+1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  makeAllPlays();
  // this.id = songIndex;
  // console.log(this.id);
  // this.classList.remove("fa-play-circle");
  // this.classList.add("fa-pause-circle");
})

// For previous song to play
document.querySelector("#previous").addEventListener("click",function(){
  if(songIndex==0)
  {
    songIndex = numberOfSongItems-1;
  }
  else{
    songIndex = songIndex-1;
  }
  audioElement.src = songs[songIndex].filePath;
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove("fa-play");
  masterPlay.classList.add("fa-pause");
  makeAllPlays();
  // this.id = songIndex;
  // console.log(this.id);
  // this.classList.remove("fa-play-circle");
  // this.classList.add("fa-pause-circle");
})

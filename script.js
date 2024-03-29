//Global Constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [2, 1, 4, 2, 3, 4, 3, 2];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var trackMistakes = 0;
var timelimit = 20;
var timer;
var currentTime;

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    trackMistakes = 0;
  //Swap the Start and Stop Buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    document.getElementById("countdown").classList.remove("hidden");
    playClueSequence();

}

function stopGame(){
  clearInterval(timer);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button"+ btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+ btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  console.log('Entered playClueSequence');
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++) { //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    setTimeout(() => {
    if(i=== progress){
      console.log('played final clue ...');
      currentTime = timelimit;
        timer = setInterval(()=>{
        myTimer();
      },1000);
    }
    
    }, delay);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  console.log('sequence complete');
}

function myTimer(){
  console.log('counting down');
  currentTime = (currentTime - 1);
  
  if(currentTime <= 0){
    currentTime = 0;
    document.getElementById("countdown").innerHTML = ('Time remaining: ' + currentTime);
    
    clearInterval(timer);
    guess();
  }
  document.getElementById("countdown").innerHTML = ('Time remaining: ' + currentTime);
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  
}

function winGame(){
  stopGame();
  alert("Game Over. You Won!");

}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying) {
    return;
  }
  
  //add game logic here
  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1 ) {
        winGame(); //you win!
      } else{
          clearInterval(timer); //guess correctly so stop timer
          progress++; //correct! Next..
          playClueSequence();

      }
    } else {
      guessCounter++; //next guess..
    }
  }else {
    if(trackMistakes < 2 ||trackMistakes <2 && currentTime <=0){
      trackMistakes++;                            
      alert("You have made: " + trackMistakes + " strike(s)");
      clearInterval(timer);
      playClueSequence();}
    else loseGame(); //incorrect guess, you lose
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

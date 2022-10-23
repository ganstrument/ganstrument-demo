//Instruments
// let drumPlayers = new Tone.Players({
//     kick: './src/sounds/tone/kick.wav',
//     hatClosed: "./src/sounds/tone/hat_close.wav",
//     snare: "./src/sounds/tone/snare.wav",
//   }).toDestination()
  

let leadSampler = new Tone.Sampler({
    urls:{
      'C2': 'https://cdn.glitch.com/effb75c1-4897-406e-b74b-b70879274ac9%2Fsynth_C1.wav?v=1597468882840'
    },
    volume: -12
})

let leadFilter = new Tone.Filter({
type : 'lowpass', frequency: 1000
})
leadSampler.connect(leadFilter);
leadFilter.toDestination();

let leadPattern = [
    ['0:0:0', 'D4'],
    ['0:0:2', 'C3'],
    ['0:0:3', 'E#4'],
    ['0:0:3', 'D4'],
    ['0:2:1', 'E#1'],
    ['0:2:2', 'E2'],
    ['0:2:3', 'E3'],
    ['0:2:4', 'D4'],
    ['0:3:1', 'C3'],
    ['0:3:2', 'D4'],
    ['0:3:3', 'C#2'],
]

let leadPart = new Tone.Part((time, note) =>{
    leadSampler.triggerAttackRelease(note,'2n',time);
    },leadPattern).start();
    
leadPart.loop = true;
leadPart.loopStart = 0;
leadPart.loopEnd = '1m';


played = false
const unmute = document.getElementById('unmute');
//toggle sound mute button
unmute.addEventListener('click', function(){
    played = !played;
    if(played){
        Tone.start();
    Tone.Transport.start();
    }else{
    Tone.Transport.stop();
    }
});
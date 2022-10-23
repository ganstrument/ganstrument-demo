// tone-synth-keys


const canvas_ganstrument = document.getElementById('ganstrument');
const ctx_ganstrument = canvas_ganstrument.getContext('2d');

let synth;
let bgCol;

const AMinorScale = ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4'];

function setup() {
  createCanvas(windowWidth, windowHeight);

  bgCol = color(207, 236, 207);
  background(bgCol);
  textSize(22);
  
  synth = new Tone.Synth().toDestination();
}

function draw() {
  background(bgCol);
  text('ASDFJKL keys!', 20, 40);
}

function keyPressed() {
  switch (key) {
    case ('a'): 
      synth.triggerAttackRelease(AMinorScale[0], '16n'); 
      bgCol = color(207, 236, 207);
      break;
    
    case ('s'): 
      synth.triggerAttackRelease(AMinorScale[1], '16n');
      bgCol = color(154, 206, 223); 
      break;
    
    case ('d'): 
      synth.triggerAttackRelease(AMinorScale[2], '16n'); 
      bgCol = color(221, 212, 232);
      break;
    
    case ('f'): 
      synth.triggerAttackRelease(AMinorScale[3], '16n'); 
      bgCol = color(253, 202, 162);
      break;
    
    case ('j'): 
      synth.triggerAttackRelease(AMinorScale[4], '16n');
      bgCol = color(219, 213, 185); 
      break;

    case ('k'): 
      synth.triggerAttackRelease(AMinorScale[5], '16n'); 
      bgCol = color(179, 226, 221);
      break;
    
    case ('l'): 
      synth.triggerAttackRelease(AMinorScale[6], '16n'); 
      bgCol = color(148, 168, 208);
      break;
  }
}
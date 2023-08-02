Tone.start()
let currentPitch = 1.0;
let currentRegister = 1/2;
let keyChange = 1;
let mode = 1;
let currentAngle = 0;
let currentVolume = 0.1;
let volumeStep = 0.05;
const notes = [
  "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A", "B", "H"
];
const steps = [
  1,2,3,4,5,6,7,8,9,10,11,12
]
function getFrequency(note){
  let note_position = notes.indexOf(note)
  if (note_position == -1){
    note_position = steps.indexOf(note)
  }
  return(2**(note_position/12))
}


function delay(time){
  return new Promise(resolve => {setTimeout(resolve,time)});
}

function playNote() {
  const audio = new Tone.Player({
    url: 'C4.wav', 
    playbackRate: currentRegister*currentPitch*keyChange,
    
    autostart: true,
  }).toDestination();
}
/*function play(note,pitch){
  currentPitch = note * pitch
  playNote()
}*/
function l(x){
  console.log(x);
}
function playA(note,pitch,register,offset){
  currentPitch = (getFrequency(note)*2**(offset/12))*pitch*register;
  console.log(currentPitch)
  l(offset)
  l(pitch)
  l(register)
  playNote()
}
async function play(note,duration,register=1,pitch=pitch,offset=0){
  playA(note,pitch,register,offset);
  await delay(duration);
}
async function playMajChord(pitch){
  if (mode ==1){
    currentPitch = pitch/2;
    playNote()
    currentPitch = pitch*2**(4/12)/2
    playNote()
    currentPitch = pitch*2**(7/12)/2
    playNote()
    currentPitch = pitch
    playNote()
    currentPitch = pitch/2;
    playNote()
    play('F',1,1/2,4)
  }
  if (mode ==2){
    var delay_time = 1000
    var offset = 4
    play("E",delay_time,1/2,offset)
    play("B",delay_time,1/2,offset)
    play("G#",delay_time,1/2,offset)
    play("F#",delay_time,1/2,offset)
    play("G#",delay_time,1/2,offset)
    play("E",delay_time,1/2,offset)
    play("G#",delay_time,1/2,offset)
    play("E",delay_time,1/2,offset)
    play("Eb",delay_time,1/2,offset)
    play("G#",delay_time,1/2,offset)
    play("Eb",delay_time,1/2,offset)
    play("D",delay_time,1/2,offset)
    play("E",delay_time,1/2,offset)
    play("D",delay_time,1/2,offset)
    play("C#",delay_time,1/2,offset)
    play("E",delay_time,1/2,offset)
    play("C#",delay_time,1/2,offset)
    play("C",delay_time,1/2,offset)
    play("C#",delay_time,1/2,offset)
    play("C",delay_time,1/2,offset)
    play("H",delay_time,1/2,offset)
    play("C",delay_time,1/2,offset)
    play("B",delay_time,1/2,offset)
    play("H",delay_time,1/2,offset)
    
    /* play(2**(7/12)/2,pitch)
    await delay(delay_time)
    play(2**(4/12),pitch)
    await delay(delay_time)
    play(2**(2/12),pitch)
    await delay(delay_time)
    play(2**(4/12),pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(4/12),pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(11/12)/2,pitch)
    await delay(delay_time)
    play(2**(4/12),pitch)
    await delay(delay_time)
    play(2**(11/12)/2,pitch)
    await delay(delay_time)
    play(2**(10/12)/2,pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(10/12)/2,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(7/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(6/12)/2,pitch)
    await delay(delay_time)
    play(2**(7/12)/2,pitch)
    await delay(delay_time) */

  }
  if (mode ==10){
    play(1/2,pitch)
    play(2**(4/12)/2,pitch)
    play(2**(8/12)/2,pitch)
    play(2**(12/12)/2,pitch)
  
  } 
  if (mode ==7){
    play(1/2,pitch)
    play(2**(4/12)/2,pitch)
    play(2**(7/12)/2,pitch)
    play(2**(10/12)/2,pitch)
  }
  if (mode ==8){
    play(1/2,pitch)
    play(2**(4/12)/2,pitch)
    play(2**(7/12)/2,pitch)
    play(2**(11/12)/2,pitch)
  }
}

async function playMinChord(pitch){
  if (mode ==1){
    currentPitch = pitch/2;
    playNote()
    currentPitch = pitch*2**(3/12)/2
    playNote()
    currentPitch = pitch*2**(7/12)/2
    playNote()
    currentPitch = pitch
    playNote()
    currentPitch = pitch/2;
    playNote()
  }
  if (mode ==2){
    var delay_time = 100
    play(1/2,pitch);
    await delay(delay_time)
    play(2**(7/12)/2,pitch)
    await delay(delay_time)
    play(2**(3/12),pitch)
    await delay(delay_time)
    play(2**(2/12),pitch)
    await delay(delay_time)
    play(2**(3/12),pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(3/12),pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(11/12)/2,pitch)
    await delay(delay_time)
    play(2**(3/12),pitch)
    await delay(delay_time)
    play(2**(11/12)/2,pitch)
    await delay(delay_time)
    play(2**(10/12)/2,pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(10/12)/2,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(1,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(9/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(7/12)/2,pitch)
    await delay(delay_time)
    play(2**(8/12)/2,pitch)
    await delay(delay_time)
    play(2**(6/12)/2,pitch)
    await delay(delay_time)
    play(2**(7/12)/2,pitch)
    await delay(delay_time)

  }
  if (mode ==10){
    play(1/2,pitch)
    play(2**(3/12)/2,pitch)
    play(2**(6/12)/2,pitch)
    play(2**(9/12)/2,pitch)
  
  }
  if (mode ==7){
    play(1/2,pitch)
    play(2**(3/12)/2,pitch)
    play(2**(7/12)/2,pitch)
    play(2**(10/12)/2,pitch)
  }
  if (mode ==8){
    play(1/2,pitch)
    play(2**(3/12)/2,pitch)
    play(2**(7/12)/2,pitch)
    play(2**(11/12)/2,pitch)
  }
}
function playDimChord(pitch){
  currentPitch= pitch/2
  playNote()
  currentPitch= pitch*2**(3/12)/2
  playNote()
  currentPitch= pitch*2**(6/12)/2
  playNote()
  currentPitch= pitch*2**(9/12)/2
}
//key press events
function handleKeyPress(event) {
  const keyPressed = event.key.toLowerCase();
  switch (keyPressed) {
    case '1':
      mode = 1;
      break;
    case '2':
      mode = 2
      break;
    case '7':
      mode = 7
      break;
    case '8':
      mode = 8
      break;
    case 'z':
      currentRegister*=2
      break;

    case 'x':
      currentRegister/=2
      break;

    case 'c':
      keyChange*=2**(1/12)
      break;

    case 'v':
      keyChange/=2**(1/12)
      break;
    case 'b':
      mode = 10
      break;
    case 'n':
      mode = 11
      break;
    case 'q':
      currentPitch = 2**(-1/12);
      playNote();
      break;
    case 'a':
      currentPitch = 1.0;
      playNote();
      break;
    case 'w':
      currentPitch = 2**(1/12);
      playNote();
      break;
    case 's':
      currentPitch = 2**(2/12);
      playNote();
      break;
    case 'e':
      currentPitch = 2**(3/12);
      playNote();
      break;
    case 'd':
      currentPitch = 2**(4/12);
      playNote();
      break;
    case 'f':
      currentPitch = 2**(5/12);
      playNote();
      break;
    case 't':
      currentPitch = 2**(6/12);
      playNote();
      break;
    case 'g':
      currentPitch = 2**(7/12); 
      playNote();
      break;
    case 'y':
      currentPitch = 2**(8/12); 
      playNote();
      break;
    case 'h':
      currentPitch = 2**(9/12); 
      playNote();
      break;
    case 'u':
      currentPitch = 2**(10/12); 
      playNote();
      break;
    case 'j':
      currentPitch = 2**(11/12); 
      playNote();
      break;
    case 'k':
      currentPitch = 2**(12/12); 
      playNote();
      break;
    case 'o':
      currentPitch = 2**(13/12); 
      playNote();
      break;
    case 'l':
      currentPitch = 2**(14/12); 
      playNote();
      break;
    case 'p':
      currentPitch = 2**(15/12); 
      playNote();
      break;
    case ';':
      currentPitch = 2**(16/12); 
      playNote();
      break;
    case "'":
      currentPitch = 2**(17/12); 
      playNote();
      break;
    case "]":
      currentPitch = 2**(18/12); 
      playNote();
      break;
    case "enter":
      currentPitch = 2**(19/12); 
      playNote();
      break;
    case "\\":
      currentPitch = 2**(20/12);
      playNote()
      break;
    case 'arrowup':
      currentVolume = Math.min(currentVolume + volumeStep, 1);
      Tone.Destination.volume.value = Tone.gainToDb(currentVolume);
      break;
    case 'arrowdown':
      currentVolume = Math.max(currentVolume - volumeStep, 0);
      Tone.Destination.volume.value = Tone.gainToDb(currentVolume);
      break;
      }

  }


function getRGB(angle) {
  console.log("gotrgb")
  const frequency = 1; // frequency
  const r = Math.sin(frequency * angle + 0) * 127 + 128;
  const g = Math.sin(frequency * angle + (2 * Math.PI / 3)) * 127 + 128;
  const b = Math.sin(frequency * angle + (4 * Math.PI / 3)) * 127 + 128;
  return `rgb(${r}, ${g}, ${b})`;
}


function toggleButtonColor(event) {
  console.log(currentAngle);
  const button = event.target;
  button.style.backgroundColor = getRGB(currentAngle);
  currentAngle += 0.01; 
  
}

const buttons = document.querySelectorAll('.circle button');
buttons.forEach((button) => {
  button.addEventListener('click', () => console.log("clicked"));
});

const Small_buttons = document.querySelectorAll('.Small_circle button');
Small_buttons.forEach((button) => {
  button.addEventListener('click', toggleButtonColor);
});


// listener
document.addEventListener('keydown', handleKeyPress);
//document.addEventListener('keyup', handleKeyUp);

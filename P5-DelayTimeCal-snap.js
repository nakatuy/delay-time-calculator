let canvas;
let bpm;
let beat_4;

let currentTime;
let pushtime;
let fade;
let fadetime;
let shrink;
let ellipse_radius;
let color_1,color_2,color_3;
let position_X1,position_X2,position_X3,position_X4,position_X5,position_X6;
let position_Y1,position_Y2,position_Y3,position_Y4,position_Y5,position_Y6;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);//2Dの場合は引数にWEBGLは要らない
  //canvas.position(0,0);//canvasをページの原点に固定
  canvas.style('z-index','-1');//canvasを後ろに移動する
}

function draw() {
  currentTime = millis();
  frameRate(30);
  blendMode(BLEND);
  background(0, 0, 0, 50);
  noFill();
  blendMode(SCREEN);

  bpm = document.getElementById("input_bpm").value; 
  beat_4 = 60000 / bpm ;

  Tone.Transport.bpm.value = bpm; //ToneのBPM設定

  let word1 = "BPM：" + bpm;

  //ellipse描画;
  strokeWeight(30);

  if (currentTime-pushtime < fadetime){
    fade = 255 - ((currentTime-pushtime) / fadetime * 255);
    shrink = fade / 255;
    stroke(color_1, color_2, color_3, fade);
    ellipse(position_X1,position_Y1,ellipse_radius*shrink);
  
    stroke(color_2, color_3, color_1, fade);
    ellipse(position_X2,position_Y2,ellipse_radius*0.85*shrink);
  
    stroke(color_3, color_1, color_2, fade);
    ellipse(position_X3,position_Y3,ellipse_radius*0.7*shrink);
  
    stroke(color_3, color_2, color_1, fade);
    ellipse(position_X4,position_Y4,ellipse_radius*0.55*shrink);
  
    stroke(color_2, color_1, color_3, fade);
    ellipse(position_X5,position_Y5,ellipse_radius*0.4*shrink);
  
    stroke(color_1, color_3, color_2, fade);
    ellipse(position_X6,position_Y6,ellipse_radius*0.25*shrink);
  }else{
    fade = 0;
  }
  
  delaytimecal();

  fill(9);
  noStroke();
  textSize(windowWidth/10);
  text(word1, 10, windowHeight*0.2);
  
}

//Tone sample再生セクション
function playSynth_1n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"1n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 4;
  
  drawing_Parameters();
}

function playSynth_2dot(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"2n.",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 2 * 1.5;
  
  drawing_Parameters();
}

function playSynth_2n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"2n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 2;
  
  drawing_Parameters();
}

function playSynth_4dot(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"4n.",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 1 * 1.5;
  
  drawing_Parameters();
}

function playSynth_4n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"4n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 1;
  
  drawing_Parameters();
}

function playSynth_8dot(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"8n.",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 2 * 1.5;
  
  drawing_Parameters();
}

function playSynth_8n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"8n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 2;
  
  drawing_Parameters();
}

function playSynth_16dot(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"16n.",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 4 * 1.5;
  
  drawing_Parameters();
}

function playSynth_16n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"16n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 4;
  
  drawing_Parameters();
}

function playSynth_32dot(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"32n.",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 8 * 1.5;
  
  drawing_Parameters();
}

function playSynth_32n(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"32n",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 / 8;
  
  drawing_Parameters();
}

function playSynth_2t(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"2t",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 1.333333;
  
  drawing_Parameters();
}

function playSynth_4t(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"4t",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 0.666666;
  
  drawing_Parameters();
}

function playSynth_8t(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"8t",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 0.333333;
  
  drawing_Parameters();
}

function playSynth_16t(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"16t",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 0.166666;
  
  drawing_Parameters();
}

function playSynth_32t(){
  const feedbackDelay = new Tone.FeedbackDelay({delayTime :"32t",feedback :0.4,wet :0.5}).toDestination();
  const checksound = new Tone.MembraneSynth({octaves: 1,pitchDecay: 0.1}).connect(feedbackDelay);
  checksound.triggerAttackRelease("C4", "4n");

  pushtime = currentTime;
  fadetime = beat_4 * 0.083333;
  
  drawing_Parameters();
}

//WEBへの計算結果
function delaytimecal() {
  document.getElementById("output_Beat_1").innerHTML = Math.floor(beat_4 * 4 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_2").innerHTML = Math.floor(beat_4 * 2 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_4").innerHTML = Math.floor(beat_4 * 1 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_8").innerHTML = Math.floor(beat_4 / 2 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_16").innerHTML = Math.floor(beat_4 / 4 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_32").innerHTML = Math.floor(beat_4 / 8 * 1000) / 1000 + " m/s";

  document.getElementById("output_Beat_2_dot").innerHTML = Math.floor(beat_4 * 2 * 1.5 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_4_dot").innerHTML = Math.floor(beat_4 * 1 * 1.5 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_8_dot").innerHTML = Math.floor(beat_4 / 2 * 1.5 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_16_dot").innerHTML = Math.floor(beat_4 / 4 * 1.5 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_32_dot").innerHTML = Math.floor(beat_4 / 8 * 1.5 * 1000) / 1000 + " m/s";

  document.getElementById("output_Beat_2_triplet").innerHTML = Math.floor(beat_4 * 1.333333 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_4_triplet").innerHTML = Math.floor(beat_4 * 0.666666 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_8_triplet").innerHTML = Math.floor(beat_4 * 0.333333 * 1000) / 1000  + " m/s";
  document.getElementById("output_Beat_16_triplet").innerHTML = Math.floor(beat_4 * 0.166666 * 1000) / 1000 + " m/s";
  document.getElementById("output_Beat_32_triplet").innerHTML = Math.floor(beat_4 * 0.083333 * 1000) / 1000 + " m/s";

}

function drawing_Parameters(){
  let color_base = 150;
  //描画領域
  let draw_min_X = windowWidth*0.2;
  let draw_max_X = windowWidth*0.8;
  let draw_min_Y = windowHeight*0.2;
  let draw_max_Y = windowHeight*0.8;

  ellipse_radius = random(0.25,0.45) * windowWidth;

  color_1 = random(color_base,255);
  color_2 = random(color_base,255)-150;
  color_3 = random(color_base,255);

  position_X1 = random(draw_min_X,draw_max_X);
  position_Y1 = random(draw_min_Y,draw_max_Y);
  position_X2 = random(draw_min_X,draw_max_X);
  position_Y2 = random(draw_min_Y,draw_max_Y);
  position_X3 = random(draw_min_X,draw_max_X);
  position_Y3 = random(draw_min_Y,draw_max_Y);
  position_X4 = random(draw_min_X,draw_max_X);
  position_Y4 = random(draw_min_Y,draw_max_Y);
  position_X5 = random(draw_min_X,draw_max_X);
  position_Y5 = random(draw_min_Y,draw_max_Y);
  position_X6 = random(draw_min_X,draw_max_X);
  position_Y6 = random(draw_min_Y,draw_max_Y);
}

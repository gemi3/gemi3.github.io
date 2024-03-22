//HTML REFERENCES

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["Bongo Bumblebee","Ziggy Zapman","Captain Cruncher"];

let inserty = ["Gizmo Grove", "Starlight Summit","Frostbite Falls"];

let insertz = ["witnessed a parade of magical steam powered gizmos","began to make constellations out of the dust in the air","got lost in a maze of enchanted mirrors"];

randomize.addEventListener('click', result);

function result() {
  
if(customName.value !== '') {
  const name = customName.value;
  newStory = newStory.replaceAll("Bob", name);
}
  
if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round((94-32) * 5/9) + ' celsius';
  
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
}
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

let newStory = storyText;

let itemX = randomValueFromArray(insertx);
let itemY = randomValueFromArray(inserty);
let itemZ = randomValueFromArray(insertz);

newStory = newStory.replaceAll(":insertx:",itemX);
newStory = newStory.replaceAll(":inserty:",itemY);
newStory = newStory.replaceAll(":insertz:",itemZ);


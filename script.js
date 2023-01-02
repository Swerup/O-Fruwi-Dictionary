//Constant Variables
const wrapper = document.querySelector(".wrapper"),//Everything Except BG
searchInput = wrapper.querySelector("input"),
infoText = wrapper.querySelector(".info-text"),//Info, Shows up sometimes
mainword = document.getElementById("word"),
speechpart = document.getElementById("speechpart"),
sound = document.getElementById("sound"),
meaning = document.getElementById("meaning");

//Enter pressed
searchInput.addEventListener("keyup", e =>{
    let input = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && input) {
		infoText.innerHTML = input;
		write(input); 
	}
});

//List Word Data
const Word = [
	"ko",
	"kopo",
	"tat"
];
const Word1 = [
	"Ko",
	"Kopo",
	"tat"
];
const SpeechPart1 = [
	"Mood - Imperative",
	"Mood - Imperative",
	"Determiner - Quantifier"
];
const Sound1 = [
	"/ko/",
	"/kopo/",
	"/tat/"
];
const Meaning1 = [
	"Imperative mood, singular, for instructions, orders or requests.",
	"Imperative mood, singular, for Advice.",
	"Universal full quantifier, translation:\"all\" ex: all dogs"
];

//Puts data in website
function write(input){
	wrapper.classList.remove("active");
	//Find Index in array 'Word'
	let i = Word.indexOf(input.toLowerCase());
	
	if (i == -1) {
		infoText.innerHTML = `Can't find the meaning of <span>"${input}"</span>. Please, try to search for another word.`;
	} else {
		wrapper.classList.add("active");
		mainword.innerText = Word1[i];
        speechpart.innerText = SpeechPart1[i];
		sound.innerText = Sound1[i];
        meaning.innerText = Meaning1[i];
	}
}
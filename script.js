//Constant Variables
const wrapper = document.querySelector(".wrapper");//Everything Except BG

//Enter pressed
wrapper.querySelector("input").addEventListener("keyup", e =>{
    let input = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && input) {
		wrapper.querySelector(".info-text").innerHTML = input;
		write(input); 
	}
});

//List Word Data
const INPWord = [
	"ko",
	"kopo",
	"tat"
];
const NumDef =[
	2,
	2,
	8
]
const Word = [
	["Ko", "Koño"],
	["Kopo", "Kopoño"],
	["tat", "tlat"]
];
const SpeechPart = [
	["Mood", "Mood"],
	["Mood", "Mood"],
	["Determiner - Quantifier","Determiner - Quantifier"]
];
const Sound = [
	["ko", "koŋo"],
	["kopo", "kopoŋo"],
	["tat", "tlat"]
];
const Meaning = [
	["Imperative mood, singular, for instructions, orders or requests.","plural"],
	["Imperative mood, singular, for Advice.", "plural"],
	["Universal full quantifier, translation:\"all\" ex: all dogs","Universal almost full quantifier, translation:\" almost all\" ex: almost all dogs"]
];

//Puts data in website
function write(input){
	wrapper.classList.remove("active");
	//Find Index in array 'Word'
	let i = INPWord.indexOf(input.toLowerCase());
	
	if (i == -1) {
		wrapper.querySelector(".info-text").innerHTML = `Can't find the meaning of <span>"${input}"</span>. Please, try to search for another word.`;
	} else {
		wrapper.classList.add("active");
		for (let j=0;j<NumDef[i];j++){
			document.getElementById("word"+j).innerText = Word[i][j];
        	document.getElementById("sp"+j).innerText = SpeechPart[i][j];
			document.getElementById("IPA"+j).innerText = "/"+Sound[i][j]+"/";
        	document.getElementById("mean"+j).innerText = Meaning[i][j];
		}
	}
}
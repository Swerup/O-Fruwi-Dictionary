//Constant Variables
const wrapper = document.querySelector(".wrapper");//Everything Except BG

//Enter pressed
wrapper.querySelector("input").addEventListener("keyup", e =>{
    let input = e.target.value.replace(/\s+/g, ' ');
    if(e.key == "Enter" && input) {
		write(input); 
	}
});

//List Word Data
const INPWord = [
	"ko",
	"ker",
	"kañ",
	"val",
	"myi",
	"cul",
	"nuz",
	"senuz",
	"öpo",
	"kod",
	"ol",
	"oñ",
	"tat",
	"kok",
	"gequ",
	"ánỏn"
];
const NumDef =[
	2,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	1,
	5,
	5,
	4,
	4,
	4,
	4
]
WordFullList = [
	[
		["Ko", "Koñ"],
		["Mood", "Mood"],
		["ko", "koŋ"],
		["Imperative mood, singular","plural"]
	],
	[
		["Ker"],
		["Mood"],
		["ker"],
		["Interrogative mood, WH questions"]
	],
	[
		["kañ"],
		["Modality"],
		["kaŋ"],
		["Ability Ex:can"]
	],
	[
		["val"],
		["Modality"],
		["val"],
		["Ability Ex:can"]
	],
	[
		["myi"],
		["Modality"],
		["mji"],
		["Permission Ex:may"]
	],
	[
		["cul"],
		["Modality"],
		["cul"],
		["Likelihood Ex:probably"]
	],
	[
		["nuz"],
		["Modality"],
		["nuz"],
		["Obligation Ex:must"]
	],
	[
		["senuz"],
		["Modality"],
		["senuz"],
		["Advice ex:Should"]
	],
	[
		["öpo"],
		["Modality"],
		["hopo"],
		["Optative Mood"]
	],
	[
		["kod"],
		["Modality"],
		["kotʰ"],
		["Hypothetical Mood"]
	],
	[
		["Ol", "Oli", "Ole", "Ola", "Olo"],
		[
			"Determiner - Article - Definite",
			"Determiner - Article - Definite",
			"Determiner - Article - Definite",
			"Determiner - Article - Definite",
			"Determiner - Article - Definite"
		],
		["ol", "oli", "ole", "ola", "olo"],
		["The", "The", "The", "The", "The"]
	],
	[
		["Oñ", "Oñi", "Oñe", "Oña", "Oño"],
		[
			"Determiner - Article - Indefinite",
			"Determiner - Article - Indefinite",
			"Determiner - Article - Indefinite",
			"Determiner - Article - Indefinite",
			"Determiner - Article - Indefinite"
		],
		["oŋ", "oŋi", "oŋe", "oŋa", "oŋo"],
		["a/an", "a/an", "a/an", "a/an", "a/an"]
	],
	[
		["tat", "tatjha", "Tat", "Tatjha"],
		[
			"Determiner - Quantifier - Universal",
			"Determiner - Quantifier - Universal - Possessive",
			"Pronoun - Positive - Indefinite",
			"Pronoun - Positive - Indefinite - Possessive"
		],
		["tat", "tatdzʰa", "tat", "tatdzʰa"],
		[
			"Universal  Quantifier Determiner, translation:\"all\" ex: all dogs are cool.",
			"Possessive Universal Quantifier Determiner, translation:\" all's\" ex: all dogs' ears are cool.",
			"Positive Indefinite Pronoun, translation:\"all\" ex: all, please.",
			"Possessive Positive Indefinite Pronoun, translation:\" all's\" ex: all's is okay."
		]
	],
	[
		["kok", "kokjha", "Kok", "Kokjha"],
		[
			"Determiner - Quantifier - Negatory",
			"Determiner - Quantifier - Negatory - Possessive",
			"Pronoun - Negative - Indefinite",
			"Pronoun - Negative - Indefinite - Possessive"
		],
		["kok", "kokdzʰa", "kok", "kokdzʰa"],
		[
			"Negatory  Quantifier Determiner, translation:\"no\" ex: no dogs are cool.",
			"Possessive Negatory Quantifier Determiner, translation:\" no's\" ex: no dogs' ears are cool.",
			"Negative Indefinite Pronoun, translation:\"none\" ex: none, please.",
			"Possessive Negative Indefinite Pronoun, translation:\" none's\" ex: none's is okay."
		]
	],
	[
		["geq", "geqjha", "Geq", "Geqjha"],
		[
			"Determiner - Quantifier - Alternative",
			"Determiner - Quantifier - Alternative - Possessive",
			"Pronoun - Alternative - Indefinite",
			"Pronoun - Alternative - Indefinite - Possessive"
		],
		["geɣ", "geɣdzʰa", "geɣ", "geɣdzʰa"],
		[
			"Alternative  Quantifier Determiner, translation:\"another\" ex: another dog is cool.",
			"Possessive Alternative Quantifier Determiner, translation:\" all's\" ex: another dog's ears are cool.",
			"Alternative Indefinite Pronoun, translation:\"another\" ex: another, please.",
			"Possessive Alternative Indefinite Pronoun, translation:\" another's\" ex: another's is okay."
		]
	],
	[
		["ánỏn", "ánỏnjha", "Ánỏn", "Ánỏnjha"],
		[
			"Determiner - Quantifier - Existential",
			"Determiner - Quantifier - Existential - Possessive", 
			"Pronoun - Existential - Indefinite",
			"Pronoun - Existential - Indefinite - Possessive"
		],
		["anʡon", "anʡondzʰa", "anʡon", "anʡondzʰa"],
		[
			"Existential  Quantifier Determiner, translation:\"any\" ex: any dogs are cool.",
			"Possessive Existential Quantifier Determiner, translation:\" any's\" ex: any dogs' ears are cool.",
			"Existential Indefinite Pronoun, translation:\"any\" ex: any, please.",
			"Possessive Existential Indefinite Pronoun, translation:\" any's\" ex: any's is okay."
		]
	]
];
//Puts data in website
function write(input){
	clear();
	//Find Index in array 'Word'
	let i = INPWord.indexOf(input.toLowerCase());
	
	if (i == -1) {
		wrapper.querySelector(".info-text").innerHTML = `Can't find the meaning of <span>"${input}"</span>. Please, try to search for another word.`;
	} else {
		wrapper.classList.add("active");
		for (let j=0;j<NumDef[i];j++){
			document.getElementById("word"+j).innerText = WordFullList[i][0][j];
        	document.getElementById("sp"+j).innerText = WordFullList[i][1][j];
			document.getElementById("IPA"+j).innerText = "/"+WordFullList[i][2][j]+"/";
        	document.getElementById("mean"+j).innerText = WordFullList[i][3][j];
		}
	}
}
function clear(){
	wrapper.classList.remove("active");
	for (let j=0;j<8;j++){
		document.getElementById("word"+j).innerText = "";
		document.getElementById("sp"+j).innerText = "";
		document.getElementById("IPA"+j).innerText = "";
		document.getElementById("mean"+j).innerText = "";
		}
}
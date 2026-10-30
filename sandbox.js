let button_start = document.getElementById("button_start");
button_start.addEventListener("click", run);
let jokes = [
	"Why did the ghost skip dinner? It was already stuffed with boos.",
	"what do you call a spooky hotdog? frankenstein",
	"Knock, knock. Who’s there? Fang. Fang who? Fang you very much for the candy.",
	"What’s a ghost’s favorite treat? Booberries.",
	"Why was the skeleton so relaxed? Nothing ever got under his skin.",
	"The monster opened a savings account for emergency scare cash.",
	"Why did the bat bring a sweater? The cave had a draft.",
	"The witch opened a bakery because she had a magic whisk.",
];

function run() {
	let randoms = Math.floor(Math.random() * 8) + 0;
	// console.log(randoms);
	document.getElementById("wherejokes").innerHTML = jokes[randoms];
}
